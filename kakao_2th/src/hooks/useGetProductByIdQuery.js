import { useQuery } from "@tanstack/react-query";
import productAPI from "../api/productAPI";
import API from "../constants/API";

function useGetProductByIdQuery({ productId }) {
  const { data } = useQuery(
    [API.KEYS.GET_PRODUCT_BY_ID],
    async () => {
      const { data } = await productAPI.getProductById({ productId });
      return data.response;
    },
    {
      suspense: true,
    }
  );

  return { data };
}

export default useGetProductByIdQuery;
