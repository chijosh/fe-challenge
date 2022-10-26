import React from 'react';
import { IProductItem } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../types';
import { removeFromBasket } from '../../state-managment/actions/carts/cartActions';
import { removeSelectedProduct } from '../../state-managment/actions/products/productActions';

import { Card, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import {
  CardContentTable,
  TableHeader,
  TableRow,
  CardDetail,
  CardDetailBtn
} from './styles';

export const CartDetails = ({ product }: any) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: AppState) => state);

  console.log({ cart });

  const handleDelete = (id: string) => {
    dispatch(removeFromBasket(id));
  };

  if (cart.length === 0) {
    dispatch(removeSelectedProduct());
  }

  return (
    <Card>
      <CardContentTable>
        <thead>
          <TableRow>
            <TableHeader>Product name</TableHeader>
            <TableHeader>Unit price</TableHeader>
            <TableHeader>Amount</TableHeader>
            <TableHeader>Price</TableHeader>
            <TableHeader></TableHeader>
          </TableRow>
        </thead>
        {cart
          ? cart.map((selectedCart: IProductItem) => {
              return (
                <tbody>
                  <TableRow key={selectedCart.id}>
                    <CardDetail>{selectedCart.productName}</CardDetail>
                    <CardDetail>{selectedCart.price}</CardDetail>
                    <CardDetail>{selectedCart.quantity}</CardDetail>
                    <CardDetail>{`${
                      selectedCart.quantity * selectedCart.price
                    }`}</CardDetail>
                    <CardDetailBtn>
                      <IconButton onClick={() => handleDelete(selectedCart.id)}>
                        <DeleteIcon fontSize='inherit' />
                      </IconButton>
                    </CardDetailBtn>
                  </TableRow>
                </tbody>
              );
            })
          : ''}
      </CardContentTable>
    </Card>
  );
};
