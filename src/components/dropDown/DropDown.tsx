import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedProduct } from '../../state-managment/actions/products/productActions';
import { ProductState, AppState, IProductItem } from '../../types';

import { MenuItem, FormControl, InputLabel, Box } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const DropDown = ({ products }: ProductState) => {
  const dispatch = useDispatch();
  const { selectedProduct } = useSelector((state: AppState) => state);
  const handleChange = (event: SelectChangeEvent) => {
    const {
      target: { value }
    } = event;

    const product = products.find((product) => product.id === value);

    if (product) {
      dispatch(setSelectedProduct(product));
    }
  };
  return (
    <Box sx={{ width: 250 }}>
      <FormControl fullWidth>
        <InputLabel id='products-label'>Select product</InputLabel>
        <Select
          displayEmpty
          labelId='products-label'
          id='products'
          label='Products'
          value={selectedProduct ? selectedProduct.productName : ''}
          onChange={handleChange}
        >
          {products.map((product: IProductItem) => (
            <MenuItem key={product.id} value={product.id}>
              {product.productName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
