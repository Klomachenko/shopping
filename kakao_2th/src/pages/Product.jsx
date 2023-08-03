import { Suspense } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import GlobalTemplate from "../components/templates/global-template/GlobalTemplate.jsx";
import ProductDetailRow from "../components/organisms/product-detail-row/ProductDetailRow.jsx";
import ProductOptionRow from "../components/organisms/product-option-row/ProductOptionRow.jsx";
import useGetProductByIdQuery from "../hooks/useGetProductByIdQuery.js";
import Loader from "../components/atoms/loader/Loader.jsx";

const Styled = {
  Container: styled.section`
    width: 100%;
    min-height: calc(100vh - 65px);

    display: grid;
    grid-template-columns: 1fr 360px;

    @media screen and (max-width: 1400px) {
      display: block;
    }
  `,
};

function Product() {
  const { productId } = useParams();
  const { data, isLoading } = useGetProductByIdQuery({ productId });

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return <div>상품 정보를 불러오는데 실패했습니다.</div>;
  }

  return (
    <GlobalTemplate title={data.productName}>
      <Styled.Container>
        <ProductDetailRow
          imgSrc={data.image}
          starCount={data.starCount}
          productName={data.productName}
          price={data.price}
        />
        <ProductOptionRow options={data.options} />
      </Styled.Container>
    </GlobalTemplate>
  );
}

export default Product;
