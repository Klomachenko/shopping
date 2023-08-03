import { useMemo } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import GlobalTemplate from "../components/templates/global-template/GlobalTemplate";
import OrderDelivery from "../components/organisms/order-delivery/OrderDelivery";
import useGetCartItemsQuery from "../hooks/useGetCartItemsQuery";
import OrderProductColumn from "../components/organisms/order-product-column/OrderProductColumn";
import OrderAgreeTerm from "../components/organisms/order-agree-term/OrderAgreeTerm";

const Styled = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};

function Order() {
  const { orderId } = useParams();
  const { data } = useGetCartItemsQuery({ id: orderId });
  const { products = [], totalPrice } = data ?? {};

  return (
    <GlobalTemplate
      title="주문 상세 정보"
      style={{
        backgroundColor: "#f4f4f4",
      }}
    >
      <Styled.Container>
        <OrderDelivery />
        {products?.map((product) => (
          <OrderProductColumn
            key={product.id}
            id={product.id}
            productName={product.productName}
            optionName={product?.option?.optionName}
            carts={product.carts}
          />
        ))}

        <OrderAgreeTerm totalPrice={totalPrice} />
      </Styled.Container>
    </GlobalTemplate>
  );
}

export default Order;
