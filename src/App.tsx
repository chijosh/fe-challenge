import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from './state-managment/actions/products/productActions';
import { Cart } from './containers';
import { Products } from './components';

function App() {
  const dispatch = useDispatch();

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
    <div>
      <Cart />
      <Products />
    </div>
  );
}

export default App;
