import instance from "./instance";
import API from "../constants/API";

const orderAPI = {
  saveOrder: async () => {
    return instance({
      url: API.ORDERS.SAVE,
      method: "POST",
    });
  },

  getOrderResult: async ({ orderId }) => {
    return instance({
      url: API.ORDERS.GET + orderId,
      method: "GET",
    });
  },
};

export default orderAPI;
