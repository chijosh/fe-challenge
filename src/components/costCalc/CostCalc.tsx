/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSelectedProduct } from '../../state-managment/actions/products/productActions';
import { AppState } from '../../types';

import { Slider, TextField } from '@mui/material';
import { CostCalcContainer, CostCalculator } from './styles';
import { handleIntl } from '../../utils';

export const CostCalc = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    price: 0,
    quantity: 0,
    maxAmount: 0
  });
  const { selectedProduct, locale } = useSelector((state: AppState) => state);

  useEffect(() => {
    const { maxAmount, price, quantity } = selectedProduct;
    setState({
      ...state,
      price,
      quantity,
      maxAmount
    });
  }, [selectedProduct]);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    const quantity = newValue as number;
    dispatch(setSelectedProduct({ ...selectedProduct, quantity }));
    setState({ ...selectedProduct, quantity });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const quantity = Number(event.target.value);

    setState({ ...state, quantity });
  };

  const DisplayTotalCost = () => {
    const { quantity, price } = state;
    return (
      <>
        {price ? (
          <CostCalculator>
            {` x ${price} = $${(quantity * price).toFixed(2)}`}
          </CostCalculator>
        ) : (
          <CostCalculator />
        )}
      </>
    );
  };

  return (
    <CostCalcContainer>
      <Slider
        disabled={!state.maxAmount ? true : false}
        onChange={handleSliderChange}
        value={state.quantity ? state.quantity : 0}
        max={state.maxAmount}
        min={0}
      />
      <TextField
        disabled={!state.maxAmount ? true : false}
        type='number'
        variant='outlined'
        label={handleIntl('quantity', locale)}
        InputLabelProps={{
          shrink: true
        }}
        InputProps={{
          inputProps: {
            min: 0,
            max: state.quantity ? state.maxAmount : 1
          }
        }}
        value={state.quantity ? state.quantity : 0}
        onChange={handleChange}
        onMouseUp={() => {
          dispatch(setSelectedProduct({ ...selectedProduct, ...state }));
        }}
      />
      <DisplayTotalCost />
    </CostCalcContainer>
  );
};
