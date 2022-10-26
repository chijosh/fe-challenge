import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from './state-managment/actions/products/productActions';
import { Cart } from './containers';
import { Products } from './components';
import { AppState } from './types';
import { isEmpty } from './utils';

import { CssBaseline } from '@mui/material';
import { ProductDetails } from './containers/ProductDetails/CartDetails';

import { AppContainer } from './style';

function App() {
  const dispatch = useDispatch();
  const { products } = useSelector((state: AppState) => state.AllProducts);
  const { selectedProduct } = useSelector((state: AppState) => state);

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
        })
        .catch((err) => console.error(err));
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      <CssBaseline />
      {products && (
        <AppContainer>
          <Products />
          {!isEmpty(selectedProduct) && (
            <ProductDetails product={selectedProduct} />
          )}
          <Cart />
        </AppContainer>
      )}
    </>
  );
}

export default App;
