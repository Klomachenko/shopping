import { Suspense, useMemo } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import GlobalTemplate from "../components/templates/global-template/GlobalTemplate";
import Loader from "../components/atoms/loader/Loader";
import useGetCartItemsQuery from "../hooks/useGetCartItemsQuery";
import CartProductColumn from "../components/organisms/cart-product-column/CartProductColumn";
import useUpdateCartItemsMutation from "../hooks/useUpdateCartItemsMutation";
import Button from "../components/atoms/button/Button";
import routes from "../constants/routes";

const Styled = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  PriceBox: styled.section`
    width: 100%;
  `,
  PriceInfo: styled.div`
    padding: 0.75rem 1.5rem;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 0.875rem;
    font-weight: 600;
    color: black;

    background-color: white;
    border-top: ${({ theme }) => theme.border.default};
    border-bottom: ${({ theme }) => theme.border.default};

    strong {
      color: ${({ theme }) => theme.color.highlight};
    }
  `,
};

function Cart() {
  const { data } = useGetCartItemsQuery({ id: undefined });
  const { products = [] } = data ?? {};

  const cartOptions = useMemo(
    () =>
      products
        ?.map((product) =>
          product?.carts?.map((cart) => {
            return { cartId: cart.id, quantity: cart.quantity };
          })
        )
        .flat() ?? [],
    [products]
  );

  const { mutate } = useUpdateCartItemsMutation();

  const totalPrice = useMemo(
    () =>
      data?.products
        ?.map((product) =>
          product?.carts.reduce((sum, option) => sum + option.price, 0)
        )
        .reduce((sum, productPrice) => sum + productPrice, 0) ?? 0,
    [data?.products]
  );

  const navigate = useNavigate();

  const handleOrderButtonClick = () => {
    navigate(routes.order);
  };

  return (
    <GlobalTemplate
      title="장바구니"
      style={{
        backgroundColor: "#f4f4f4",
      }}
    >
      <Suspense fallback={<Loader />}>
        <Styled.Container>
          <div style={{ maxWidth: "870px", width: "100%" }}>
            {products?.map((item) => (
              <CartProductColumn
                key={item.id}
                productId={item.id}
                productName={item.productName}
                carts={item.carts}
                setCartOptions={cartOptions}
              />
            ))}
            <Styled.PriceBox>
              <Styled.PriceInfo>
                <div>주문 예상금액</div>
                <div>
                  <strong>{totalPrice ? `${totalPrice.toLocaleString()}원` : ""}</strong>
                </div>
              </Styled.PriceInfo>
              <Button
                backgroundColor="#feeb00"
                style={{
                  color: "#333333",
                  width: "100%",
                  padding: "1.25rem",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                }}
                disabled={products?.length === 0}
                onClick={handleOrderButtonClick}
              >
                {products?.length}건 주문하기
              </Button>
            </Styled.PriceBox>
          </div>
        </Styled.Container>
      </Suspense>
    </GlobalTemplate>
  );
}

export default Cart;
