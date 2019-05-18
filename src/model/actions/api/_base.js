import axios from "axios";

const apiUrl = "http://localhost:4000";

export default (path, method, data, token) => {
  // Validation
  if (typeof path !== "string") {
    throw new Error("Path must be a string!");
  }

  if (typeof method !== "string") {
    throw new Error("Method must be a string!");
  }

  if (data !== undefined && typeof data !== "object") {
    throw new Error("Data must be an object!");
  }

  if (token !== undefined && typeof token !== "string") {
    throw new Error("Token must be a string!");
  }

  // Do request if all of these requirements are fulfilled
  return axios({
    method,
    // Path always starts with "/"
    url: `${apiUrl}${path}`,
    headers: {
      "token": token
    },
    data: ["put", "post", "patch"].includes(method.toLowerCase()) && data,
    params: method.toLowerCase() === "get" && data
  });
};
