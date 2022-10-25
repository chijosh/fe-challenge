import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';

import { IProductItem, AppState } from '../types';

const Products = () => {
  const { products } = useSelector((state: AppState) => state.AllProducts);
  console.log({ products });

  return (
    <>
      <Box>
        <FormControl fullWidth>
          <InputLabel id='products-label'>Products</InputLabel>
          <Select labelId='products-label' id='products' label='Products'>
            {products.map((product: IProductItem) => (
              <MenuItem key={product.id} value={product.productName}>
                {product.productName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export { Products };
