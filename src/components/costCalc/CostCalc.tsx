import React from 'react';
import { Slider, TextField } from '@mui/material';
import { CostCalcContainer } from './styles';

export const CostCalc = () => {
  return (
    <CostCalcContainer>
      <Slider disabled defaultValue={30} aria-label='Disabled slider' />
      <TextField variant='outlined' />
    </CostCalcContainer>
  );
};
