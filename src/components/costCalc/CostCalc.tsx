/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useIntl } from 'react-intl';

import { setSelectedProduct } from '../../state-managment/actions/products/productActions';
import { AppState } from '../../types';

import { Slider, TextField } from '@mui/material';
import { CostCalcContainer, CostCalculator } from './styles';

export const CostCalc = () => {
  const dispatch = useDispatch();
  const intl = useIntl();
  const [state, setState] = useState({
    price: 0,
    quantity: 0,
    maxAmount: 1
  });
  const { selectedProduct } = useSelector((state: AppState) => state);

  useEffect(() => {
    if (selectedProduct.quantity) {
      setState({
        ...state,
        ...selectedProduct
      });
    }
  }, [selectedProduct.quantity]);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    console.log(event.type);

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
            {` x ${price} = ${(quantity * price).toFixed(2)}`}
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
        disabled={!state.quantity ? true : false}
        onChange={handleSliderChange}
        value={state.quantity ? state.quantity : 0}
        max={state.maxAmount}
        min={0}
      />
      <TextField
        type='number'
        variant='outlined'
        label={intl.formatMessage({
          id: 'Quantity',
          defaultMessage: 'Quantity'
        })}
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
