const API_BASE_URL = process.env.REACT_APP_PATH;

const routes = {
  home: API_BASE_URL + "/",
  signIn: API_BASE_URL + "/sign-in",
  signUp: API_BASE_URL + "/sign-up",
  product: API_BASE_URL + "/product",
  cart: API_BASE_URL + "/cart",
  order: API_BASE_URL + "/order",
  orderResult: API_BASE_URL + "/order-result",
};

export default routes;
