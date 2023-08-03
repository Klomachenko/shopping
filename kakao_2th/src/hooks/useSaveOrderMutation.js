import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import API from "../constants/API";
import orderAPI from "../api/orderAPI";
import routes from "../constants/routes";

function useSaveOrderMutation() {
  const navigate = useNavigate();
  const { mutate } = useMutation(
    [API.KEYS.POST_ORDER],
    async () => {
      const { data } = await orderAPI.saveOrder();
      return data.response;
    },
    {
      onSuccess: (data) => {
        navigate(`${routes.orderResult}/${data.id}`);
      },
    }
  );

  return { mutate };
}

export default useSaveOrderMutation;
