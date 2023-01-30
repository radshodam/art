import axios from "axios";

// This function creates an instance of axios with the provided config.
const appHTTP = (config = {}) => {
  // Here we create the instance of axios with the provided config.
  // If no config is provided, it will use the default values.
  const instance = axios.create({
    baseURL: config.baseURL || "https://fakestoreapi.com",
    headers: config.headers || {},
  });

  // Add request interceptors for adding tokens, handling errors, etc.
  instance.interceptors.request.use(
    (config) => {
      // Add token to headers if not set as noToken
      if (!config.noToken) {
        // Here we check if the request has the noToken flag set to true.
        // If it does not, we add the token from localStorage to the headers.
        config.headers["Authorization"] = `Bearer ${localStorage.getItem(
          "token"
        )}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Add response interceptors for handling errors, etc.
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Finally, we return the instance of axios with the added interceptors.
  return instance;
};

export default appHTTP;