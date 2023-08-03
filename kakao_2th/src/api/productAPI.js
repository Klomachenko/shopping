import API from "../constants/API";
import instance from "./instance";

const productAPI = {
  getAllProducts: async ({ pageIndex }) => {
    return instance({
      url: API.PRODUCT.PRODUCTS,
      method: "GET",
      params: { page: pageIndex },
    });
  },

  getProductById: async ({ productId }) => {
    return instance({
      url: `${API.PRODUCT.PRODUCTS}/${productId}`,
      method: "GET",
    });
  },
};

export default productAPI;
