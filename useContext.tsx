import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { handleAuthenticateUser, handleOTPVerification } from "./api/auth";

interface errorType {
  isVisible: boolean;
  message?: string;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

const ErrorUI: FC<errorType> = ({ isVisible, message, setVisible }) => {
  return (
    <Modal visible={isVisible} animationType="slide" transparent>
      <View
        style={{ opacity: 0.5 }}
        className="flex-1 justify-center items-center z-10 bg-black opacity-50 px-12"
      >
        <View className="w-11/12 p-2 rounded-full z-50 bg-white">
          <View className="w-full px-6 items-center">
            <View className="flex-row items-end w-full">
              <TouchableOpacity onPress={() => setVisible(false)}>
                <MaterialCommunityIcons
                  name="close-circle"
                  size={24}
                  color="red"
                />
              </TouchableOpacity>
            </View>

            <Text className="font-bold text-xl text-red-500">Error</Text>
            <Text>{message && message}</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};
type contextType = {
  authenticate: (phoneNumber: string) => Promise<void>;
  verify: (otp: string) => Promise<void>;
  errorMessage: string | null;
  isLoading: boolean;
  isReady: boolean;
  isAuthenticated: boolean;
};
const AuthContext = createContext<Partial<contextType>>({});

const AuthContextProvider = ({ children }: any) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isErrorVisible, setErrorVisible] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const [isReady, setIsReady] = useState<boolean>(false);
  const authenticateUser = async () => {
    const token = await AsyncStorage.getItem("token");
    if (!token) {
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
    setIsReady(true);
  };
  const authenticate = async (phoneNumber: string) => {
    setIsLoading(true);
    try {
      const response = await handleAuthenticateUser(phoneNumber);
      console.log(response.data.data);
      if (response.status === 200) {
        router.push({
          pathname: "/otp",
          params: {
            otp: response.data.data.otp,
          },
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const verify = async (otp: string) => {
    setIsLoading(true);
    try {
      const response = await handleOTPVerification(otp);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    authenticateUser();
  }, [isAuthenticated]);
  return (
    <AuthContext.Provider
      value={{
        authenticate,
        errorMessage,
        verify,
        isLoading,
        isAuthenticated,
        isReady,
      }}
    >
      <ErrorUI isVisible={isErrorVisible} setVisible={setErrorVisible} />
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
