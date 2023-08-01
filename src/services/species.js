import api from "./apiConfig.js";

export const getSpecies = async () => {
  try {
    const res = await api.get("/species");
    return res.data;
  } catch (error) {
    console.log("Error: Getting species.", error);
  }
};
