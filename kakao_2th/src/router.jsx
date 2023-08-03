import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import routes from "./constants/routes";
import Order from "./pages/Order";
import GlobalLoader from "./pages/GlobalLoader";

const Home = lazy(() => import("./pages/Home")); // 상대경로로 변경
const SignIn = lazy(() => import("./pages/SignIn.jsx")); // 상대경로로 변경
const SignUp = lazy(() => import("./pages/SignUp.jsx")); // 상대경로로 변경
const Product = lazy(() => import("./pages/Product.jsx")); // 상대경로로 변경
const Cart = lazy(() => import("./pages/Cart.jsx")); // 상대경로로 변경
const NotFound = lazy(() => import("./pages/NotFound.jsx")); // 상대경로로 변경
const OrderResult = lazy(() => import("./pages/OrderResult.jsx")); // 상대경로로 변경

const router = createBrowserRouter([
  {
    path: "",
    loader: GlobalLoader,
    errorElement: <NotFound />,
    children: [
      {
        path: routes.home,
        element: <Home />,
      },
      {
        path: routes.signIn,
        element: <SignIn />,
      },
      {
        path: routes.signUp,
        element: <SignUp />,
      },
      {
        path: `${routes.product}/:productId`,
        element: <Product />,
        errorElement: (
          <NotFound
            title="상품 아이디 에러"
            description="해당 상품 아이디가 존재하지 않습니다"
          />
        ),
      },
      {
        path: routes.cart,
        element: <Cart />,
      },
      {
        path: routes.order,
        element: <Order />,
      },
      {
        path: `${routes.orderResult}/:orderId`,
        element: <OrderResult />,
      },
    ],
  },
],{
  basename: process.env.REACT_APP_PATH
});


export default router;
