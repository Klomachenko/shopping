import API from "../constants/API";
import cartAPI from "../api/cartAPI";
import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";

function useGetCartItemsQuery({ id }) {
  const { data } = useQuery(
    [API.KEYS.GET_CART_ITEMS, id],
    async () => {
      const { data } = await cartAPI.getCartItems();
      return data.response;
    },
    {
      onError: (err) => {
        console.log(err.response.status);
      },
      suspense: true,
    }
  );

  return { data };
}

useGetCartItemsQuery.propTypes = {
  id: PropTypes.string || PropTypes.number,
};

export default useGetCartItemsQuery;
