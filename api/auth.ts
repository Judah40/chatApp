import apiClient from "@/lib/apiClient";

export const handleOTPVerification = async (otp: string) => {
  const data = {
    otp,
  };
  try {
    const response = await apiClient.post("/User/generate-token", data);
    return response;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};

export const handleAuthenticateUser = async (phoneNumber: string) => {
  const data = {
    phoneNumber,
  };
  try {
    const response = await apiClient.post("/User/authenticate", data);
    return response;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};
