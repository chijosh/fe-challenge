import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToBasket } from '../../state-managment/actions/carts/cartActions';
import { AppState } from '../../types';
import { DropDown } from '../../components/dropDown/DropDown';
import { CostCalc } from '../../components/costCalc/CostCalc';
import { CardContainer } from '../../components/cardWrapper/CardWrapper';

import { Button } from '@mui/material';
import { ItemRemaining } from '../../components/itemRemaining/ItemRemaining';

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state: AppState) => state.AllProducts);
  const { selectedProduct } = useSelector((state: AppState) => state);

  const handleAddtoCart = () => {
    console.log({ selectedProduct });

    dispatch(addToBasket(selectedProduct));
  };

  return (
    <CardContainer>
      {products && <DropDown products={products} />}
      <CostCalc />
      <ItemRemaining />
      <Button variant='contained' onClick={handleAddtoCart}>
        Add to cart
      </Button>
    </CardContainer>
  );
};

export { Products };
