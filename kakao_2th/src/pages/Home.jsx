import { Suspense, useEffect, useRef } from "react";
import styled from "styled-components";

import useIntersectionObserver from "../hooks/useIntersectionObserver";
import useGetInfiniteProductsQuery from "../hooks/useGetInfiniteProductsQuery";

import GlobalTemplate from "../components/templates/global-template/GlobalTemplate";
import Carousel from "../components/molecules/carousel/Carousel";
import ProductInfoCard from "../components/organisms/product-info-card/ProductInfoCard";
import ProductInfoCardLoader from "../components/organisms/product-info-card/ProductInfoCard.loader";
import Loader from "../components/atoms/loader/Loader";

import CAROUSEL from "../constants/CAROUSEL";

const GridContainer = styled.article`
  width: 100%;
  padding-top: 4rem;
  display: grid;
  justify-content: center;
  align-items: flex-start;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 2rem;
`;

const LoaderContainer = styled.article`
  width: 100%;
  padding: 4rem 0;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 2rem;
`;

function Home() {
  const loaderRef = useRef(null);
  const observer = useIntersectionObserver(async () => {
    await fetchNextPage();
  });
  const { data, fetchNextPage } = useGetInfiniteProductsQuery({
    loader: loaderRef?.current,
  });
  const { pages = [] } = data ?? {};

  useEffect(() => {
    const unobserve = observer.observe(loaderRef.current);
    return () => {
      observer && unobserve();
    };
  }, [loaderRef, observer]);

  return (
    <GlobalTemplate>
      <Carousel
        slideArray={CAROUSEL.SLIDE}
        dotButton
        arrowButton
        time={2000}
        style={{
          width: "100vw",
          position: "relative",
          left: "-4rem",
        }}
      />
      <Suspense fallback={<Loader />}>
        <GridContainer>
          {pages?.map((page) =>
            page.map((info) => (
              <ProductInfoCard
                key={info.id}
                id={info.id}
                image={info.image}
                description={info.description}
                productName={info.productName}
                price={info.price}
              />
            ))
          )}

          <LoaderContainer ref={loaderRef}>
            <ProductInfoCardLoader />
          </LoaderContainer>
        </GridContainer>
      </Suspense>
    </GlobalTemplate>
  );
}

export default Home;
