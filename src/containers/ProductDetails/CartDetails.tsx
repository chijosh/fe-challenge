import React from 'react';
import { IProductItem } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../types';
import { removeFromBasket } from '../../state-managment/actions/carts/cartActions';

import { Card, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import {
  CardContentTable,
  TableHeader,
  TableHeaderRow,
  CardDetail
} from './styles';

export const ProductDetails = ({ product }: any) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: AppState) => state);

  console.log({ cart });

  const handleDelete = (id: string) => {
    dispatch(removeFromBasket(id));
  };

  return (
    <Card>
      <CardContentTable>
        <TableHeaderRow>
          <TableHeader>Product name</TableHeader>
          <TableHeader>Unit price</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Price</TableHeader>
          <TableHeader></TableHeader>
        </TableHeaderRow>
        {cart
          ? cart.map((selectedCart: IProductItem) => {
              return (
                <TableHeaderRow>
                  <CardDetail>{selectedCart.productName}</CardDetail>
                  <CardDetail>{selectedCart.price}</CardDetail>
                  <CardDetail>Amount goes here</CardDetail>
                  <CardDetail>total price goes here</CardDetail>
                  <CardDetail>
                    {' '}
                    <IconButton
                      // icon={'icon'}
                      onClick={() => handleDelete(selectedCart.id)}
                    >
                      <DeleteIcon fontSize='inherit' />
                    </IconButton>
                  </CardDetail>
                </TableHeaderRow>
              );
            })
          : ''}
      </CardContentTable>
    </Card>
  );
};
