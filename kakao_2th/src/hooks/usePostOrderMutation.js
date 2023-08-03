import { useNavigate } from "react-router-dom";
import API from "../constants/API";
import orderAPI from "../api/orderAPI";
import routes from "../constants/routes";
import { useMutation } from "@tanstack/react-query";

function usePostOrderMutation() {
  const navigate = useNavigate();
  const { mutate } = useMutation(
    [API.KEYS.POST_ORDER],
    async () => {
      const { data } = await orderAPI.postOrder();
      return data.response;
    },
    {
      onSuccess: (data) => {
        console.log(data);
        navigate(`${routes.orderResult}/${data.id}`);
      },
    }
  );

  return { mutate };
}

export default usePostOrderMutation;
