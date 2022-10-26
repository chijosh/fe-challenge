import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQtyItem } from '../../state-managment/actions/carts/cartActions';
import { setSelectedProduct } from '../../state-managment/actions/products/productActions';
import { AppState } from '../../types';

import { Slider, TextField } from '@mui/material';
import { CostCalcContainer } from './styles';

export const CostCalc = () => {
  const dispatch = useDispatch();
  const { selectedProduct } = useSelector((state: AppState) => state);

  console.log({ selectedProduct });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const quantity = Number(event.target.value);
    console.log({ quantity });

    dispatch(setSelectedProduct({ ...selectedProduct, quantity }));
    dispatch(setQtyItem({ ...selectedProduct, quantity }));
  };

  return (
    <CostCalcContainer>
      <Slider disabled defaultValue={30} aria-label='Disabled slider' />
      <TextField
        type='number'
        variant='outlined'
        // maxRows={selectedProduct ? selectedProduct.maxAmount : 1}
        // minRows={0}
        InputProps={{
          inputProps: {
            min: 0,
            max: selectedProduct ? selectedProduct.maxAmount : 1
          }
        }}
        value={selectedProduct ? selectedProduct.quantity : 0}
        onChange={handleChange}
      />
    </CostCalcContainer>
  );
};
