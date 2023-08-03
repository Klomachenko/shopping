import instance from "./instance";
import API from "../constants/API";

const cartAPI = {
  addCartItem: async ({ items }) => {
    return await instance({
      url: API.CARTS.ADD,
      method: "POST",
      data: items,
    });
  },

  getCartItems: async () => {
    return await instance({
      url: API.CARTS.GET,
      method: "GET",
    });
  },

  updateCartItems: async ({ items }) => {
    return await instance({
      url: API.CARTS.UPDATE,
      method: "POST",
      data: items,
    });
  },
};

export default cartAPI;
