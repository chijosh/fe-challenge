import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToBasket } from '../../state-managment/actions/carts/cartActions';
import { AppState } from '../../types';
import { DropDown } from '../dropDown/DropDown';
import { CostCalc } from '../costCalc/CostCalc';
import { ProductsContainer } from './styles';

import { Button } from '@mui/material';

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state: AppState) => state.AllProducts);
  const { selectedProduct } = useSelector((state: AppState) => state);

  const handleAddtoCart = () => {
    dispatch(addToBasket(selectedProduct));
  };

  return (
    <ProductsContainer>
      {products && <DropDown products={products} />}
      <CostCalc />
      <Button variant='contained' onClick={handleAddtoCart}>
        Add to cart
      </Button>
    </ProductsContainer>
  );
};

export { Products };
