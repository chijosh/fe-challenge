/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from './state-managment/actions/products/productActions';
import { CartCheckout } from './containers/cart';
import { Products } from './containers/productDetails';
import { AppState } from './types';
import { isEmpty } from './utils';

import { CssBaseline, CircularProgress, Collapse } from '@mui/material';
import { CartDetails } from './containers/cartDetails/CartDetails';
import { AppContainer, CirclularContainer } from './style';
import { AppHeader } from './components/appheader/AppHeader';
import { AppModal } from './components/modal/Modal';

function App() {
  const [state, setState] = useState({
    loading: true,
    itemInCart: false
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
          setState({ ...state, loading: false });
        })
        .catch((err) => console.error(err));
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (!isEmpty(cart)) {
      setState({ ...state, itemInCart: true });
    }
  }, [cart]);

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
      <AppHeader />
      <AppModal />
      {products && (
        <AppContainer>
          <Products />
          <Collapse in={state.itemInCart}>
            {!isEmpty(cart) && <CartDetails product={selectedProduct} />}
          </Collapse>
          <Collapse in={state.itemInCart}>
            {!isEmpty(cart) && <CartCheckout />}
          </Collapse>
        </AppContainer>
      )}
    </>
  );
}

export default App;
