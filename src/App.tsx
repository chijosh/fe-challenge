import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from './state-managment/actions/products/productActions';
import { Cart } from './containers/cart';
import { Products } from './containers/productDetails';
import { AppState } from './types';
import { isEmpty } from './utils';

import { CssBaseline, CircularProgress } from '@mui/material';
import { CartDetails } from './containers/cartDetails/CartDetails';

import { AppContainer, CirclularContainer } from './style';

function App() {
  const [state, setState] = useState({
    loading: true
  });
  const dispatch = useDispatch();
  const { products } = useSelector((state: AppState) => state.AllProducts);
  const { selectedProduct, cart } = useSelector((state: AppState) => state);

  useEffect(() => {
    const fetchData = () => {
      fetch(`data/products.json`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch(setProducts(data));
          setState({ loading: false });
        })
        .catch((err) => console.error(err));
    };

    fetchData();
  }, [dispatch]);

  if (state.loading === true) {
    return (
      <CirclularContainer>
        <CircularProgress />
      </CirclularContainer>
    );
  }

  return (
    <>
      <CssBaseline />
      {products && (
        <AppContainer>
          <Products />
          {!isEmpty(cart) && <CartDetails product={selectedProduct} />}
          <Cart />
        </AppContainer>
      )}
    </>
  );
}

export default App;
