import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../types';
import { DropDown } from '../dropDown/DropDown';
import { CostCalc } from '../costCalc/CostCalc';
import { ProductsContainer } from './styles';

const Products = () => {
  const { products } = useSelector((state: AppState) => state.AllProducts);

  return (
    <ProductsContainer>
      {products && <DropDown products={products} />}
      <CostCalc />
    </ProductsContainer>
  );
};

export { Products };
