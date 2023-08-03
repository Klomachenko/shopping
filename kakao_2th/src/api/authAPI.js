import instance from "./instance.js";
import API from "../constants/API.js";

const authAPI = {
  signIn: async (data) => {
    return await instance({
      url: API.AUTH.LOGIN,
      method: "POST",
      data,
    });
  },

  checkEmailDuplicate: async (email) => {
    return await instance({
      url: API.AUTH.CHECK,
      method: "POST",
      data: { email: email },
    });
  },

  signUp: async (data) => {
    return await instance({
      url: API.AUTH.JOIN,
      method: "POST",
      data,
    });
  },
};

export default authAPI;
