/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addToBasket,
  updateCart
} from '../../state-managment/actions/carts/cartActions';
import { AppState } from '../../types';
import { DropDown } from '../../components/dropDown/DropDown';
import { useSnackbar } from 'notistack';
import { CostCalc } from '../../components/costCalc/CostCalc';
import { CardContainer } from '../../components/cardWrapper/CardWrapper';

import { Button } from '@mui/material';
import { ItemRemaining } from '../../components/itemRemaining/ItemRemaining';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ProductContainer } from './styles';
import { Header } from '../../components/header/Header';
import { handleIntl, isEmpty } from '../../utils';

const Products = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
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
  const { selectedProduct, cart, locale } = useSelector(
    (state: AppState) => state
  );

  const displaySnackbar = useCallback(() => {
    enqueueSnackbar(handleIntl('cartMaxItem', locale), {
      variant: 'info'
    });
  }, [enqueueSnackbar]);

  const handleAddtoCart = (type: string) => {
    if (type === 'addToCart') {
      if (cart.length >= 10) {
        return displaySnackbar();
      }
      setState({ item: selectedProduct });
      return dispatch(addToBasket(selectedProduct));
    } else {
      dispatch(updateCart(selectedProduct));
    }
  };

  useEffect(() => {
    // Update state only when new item is selected
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
      <Header label={handleIntl('product', locale)} />
      <ProductContainer>
        {products && <DropDown products={products} />}
        <CostCalc />
        <ItemRemaining />
        {state.item.id === '' ? (
          <Button
            disabled={isEmpty(selectedProduct) ? true : false}
            startIcon={<ShoppingCartIcon />}
            variant='contained'
            onClick={() => handleAddtoCart('addToCart')}
          >
            {handleIntl('addToCart', locale)}
          </Button>
        ) : (
          <Button
            color='secondary'
            startIcon={<ShoppingCartIcon />}
            variant='contained'
            onClick={() => handleAddtoCart('updateCart')}
          >
            {handleIntl('updateCart', locale)}
          </Button>
        )}
      </ProductContainer>
    </CardContainer>
  );
};

export { Products };
