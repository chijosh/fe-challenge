import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSelectedProduct } from '../../state-managment/actions/products/productActions';
import { AppState } from '../../types';

import { Slider, TextField } from '@mui/material';
import { CostCalcContainer, CostCalculator } from './styles';

export const CostCalc = () => {
  const dispatch = useDispatch();
  const { selectedProduct } = useSelector((state: AppState) => state);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const quantity = Number(event.target.value);

    dispatch(setSelectedProduct({ ...selectedProduct, quantity }));
  };

  const DisplayTotalCost = () => {
    const { quantity, price } = selectedProduct;
    return (
      <>
        {price ? (
          <CostCalculator>{` x ${price} = ${(quantity * price).toFixed(
            2
          )}`}</CostCalculator>
        ) : (
          <CostCalculator />
        )}
      </>
    );
  };

  return (
    <CostCalcContainer>
      <Slider disabled defaultValue={30} aria-label='Disabled slider' />
      <TextField
        type='number'
        variant='outlined'
        label={'Quantity'}
        InputLabelProps={{
          shrink: true
        }}
        InputProps={{
          inputProps: {
            min: 0,
            max: selectedProduct ? selectedProduct.maxAmount : 1
          }
        }}
        value={selectedProduct ? selectedProduct.quantity : 0}
        onChange={handleChange}
      />
      <DisplayTotalCost />
    </CostCalcContainer>
  );
};
