import API from "../constants/API";
import cartAPI from "../api/cartAPI";
import { useNavigate } from "react-router-dom";
import routes from "../constants/routes";
import { useMutation } from "@tanstack/react-query";

function useAddCartItemMutation() {
  const navigate = useNavigate();

  const { mutate } = useMutation(
    [API.KEYS.ADD_CART_ITEM],
    async ({ items }) => {
      await cartAPI.addCartItem({ items });
    },
    {
      onSuccess: () => {
        navigate(routes.cart);
      },
    }
  );

  return { mutate };
}

export default useAddCartItemMutation;
