import api from "@/lib/api";

export const getImportProgress = async () => {
  const response = await api.get("/progress");
  return response.data;
};