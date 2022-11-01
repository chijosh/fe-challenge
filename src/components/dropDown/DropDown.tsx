import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedProduct } from '../../state-managment/actions/products/productActions';
import { ProductState, AppState, IProductItem } from '../../types';

import { MenuItem, FormControl, InputLabel, Box } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { handleIntl } from '../../utils';

export const DropDown = ({ products }: ProductState) => {
  const dispatch = useDispatch();
  const { selectedProduct, locale } = useSelector((state: AppState) => state);
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
        <InputLabel id='products-label'>
          {handleIntl('products', locale)}
        </InputLabel>
        <Select
          displayEmpty
          labelId='products-label'
          id='products'
          label={handleIntl('products', locale)}
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
