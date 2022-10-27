import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addToBasket,
  updateCart
} from '../../state-managment/actions/carts/cartActions';
import { AppState } from '../../types';
import { DropDown } from '../../components/dropDown/DropDown';
import { CostCalc } from '../../components/costCalc/CostCalc';
import { CardContainer } from '../../components/cardWrapper/CardWrapper';

import { Button } from '@mui/material';
import { ItemRemaining } from '../../components/itemRemaining/ItemRemaining';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Products = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    item: {
      id: '',
      productName: '',
      maxAmount: 0,
      taxRate: 0,
      price: 0,
      quantity: 0
    }
  });
  const { products } = useSelector((state: AppState) => state.AllProducts);
  const { selectedProduct } = useSelector((state: AppState) => state);

  const handleAddtoCart = (type: string) => {
    setState({ item: selectedProduct });

    if (type === 'addToCart') {
      dispatch(addToBasket(selectedProduct));
    } else {
      dispatch(updateCart(selectedProduct));
    }
  };

  useEffect(() => {
    console.log({ selectedProduct });
    console.log({ state });
    if (
      selectedProduct !== state.item &&
      selectedProduct.id !== state?.item.id
    ) {
      setState({
        item: {
          id: '',
          productName: '',
          maxAmount: 0,
          taxRate: 0,
          price: 0,
          quantity: 0
        }
      });
    }
  }, [selectedProduct]);

  return (
    <CardContainer>
      {products && <DropDown products={products} />}
      <CostCalc />
      <ItemRemaining />
      {state.item.id === '' ? (
        <Button
          startIcon={<ShoppingCartIcon />}
          variant='contained'
          onClick={() => handleAddtoCart('addToCart')}
        >
          Add to cart
        </Button>
      ) : (
        <Button
          startIcon={<ShoppingCartIcon />}
          variant='contained'
          onClick={() => handleAddtoCart('updateCart')}
        >
          Update cart
        </Button>
      )}
    </CardContainer>
  );
};

export { Products };
