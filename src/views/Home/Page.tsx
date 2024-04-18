import React from 'react';

import { MainContainer } from '@ui/MainContainer';
import { Reviews } from '@widgets/Reviews';
import { Header } from '@widgets/Header';
import { Basket } from '@widgets/Basket';
import { ProductCatalog } from '@widgets/ProductCatalog';

export default async function HomePage() {
  return (
    <>
      <Header />
      <MainContainer>
        <Reviews />
        <Basket />
        <ProductCatalog />
      </MainContainer>
    </>
  );
}
