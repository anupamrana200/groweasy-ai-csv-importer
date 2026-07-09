import api from "@/lib/api";

export const importCsv = async (formData, provider = "auto") => {
  formData.append("provider", provider);

  const response = await api.post("/import", formData);

  return response.data;
};