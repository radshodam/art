import baseAPI from "../baseApi";

export const getProducts = async () => {
  try {
    const response = await baseAPI.get("/products");
    console.log("dataFake", response.data);
  } catch (error) {
    console.error(error);
  }
};
