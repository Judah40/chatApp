import apiClient from "@/lib/apiClient";

export const getUserProfile = async () => {
  try {
    const response = await apiClient.get("/profile");
    return response;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};
