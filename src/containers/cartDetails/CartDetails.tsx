import { ChangeEvent, useState } from 'react';
import { IProductItem } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../types';
import {
  removeFromBasket,
  updateCart
} from '../../state-managment/actions/carts/cartActions';
import { removeSelectedProduct } from '../../state-managment/actions/products/productActions';

import { Card, IconButton, Box, Badge, TextField, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';

import {
  CardContentTable,
  TableHeader,
  TableRow,
  CardDetail,
  CardDetailBtn
} from './styles';
import { Header } from '../../components/header/Header';
import { handleIntl } from '../../utils';

interface CardDetailsProp {
  product: IProductItem;
}

export const CartDetails = ({ product }: CardDetailsProp) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    isSelected: false,
    selectedItem: {} as IProductItem
  });
  const { cart, locale } = useSelector((state: AppState) => state);

  const handleDelete = (id: string) => {
    dispatch(removeFromBasket(id));
  };

  if (cart.length === 0) {
    dispatch(removeSelectedProduct());
  }

  const handleSelected = (selectedItem: IProductItem) => {
    setState({
      ...state,
      isSelected: true,
      selectedItem: { ...selectedItem }
    });
  };

  const handleUpdateQty = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      selectedItem: {
        ...state.selectedItem,
        quantity: parseInt(event.target.value)
      }
    });
  };

  const handleDispatchUpdateQty = () => {
    dispatch(
      updateCart({
        ...state.selectedItem
      })
    );

    clearState();
  };

  const clearState = () => {
    setState({
      isSelected: false,
      selectedItem: {
        id: '',
        productName: '',
        maxAmount: 0,
        taxRate: 0,
        price: 0,
        quantity: 0
      }
    });
  };

  return (
    <Card sx={{ p: 2 }}>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Header
          label={handleIntl('cart', locale)}
          tooltip={'Maximum 10 items'}
        />
        <Badge
          badgeContent={`${cart.length >= 1 ? cart.length : 0}`}
          color='info'
        >
          <ShoppingCartIcon color='secondary' />
        </Badge>
      </Box>
      <CardContentTable>
        <thead>
          <TableRow>
            <TableHeader>{handleIntl('productName', locale)}</TableHeader>
            <TableHeader>{handleIntl('unitPrice', locale)}</TableHeader>
            <TableHeader>{handleIntl('amount', locale)}</TableHeader>
            <TableHeader>{handleIntl('price', locale)}</TableHeader>
            <TableHeader></TableHeader>
          </TableRow>
        </thead>
        {cart
          ? cart.map((selectedCart: IProductItem) => {
              return (
                <tbody key={selectedCart.id}>
                  <TableRow>
                    <CardDetail>{selectedCart.productName}</CardDetail>
                    <CardDetail>{selectedCart.price}</CardDetail>
                    {state.isSelected &&
                    selectedCart.id === state.selectedItem.id ? (
                      <CardDetail
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          width: '100%'
                        }}
                      >
                        <TextField
                          disabled={!selectedCart.quantity ? true : false}
                          type='number'
                          variant='outlined'
                          InputLabelProps={{
                            shrink: true
                          }}
                          InputProps={{
                            inputProps: {
                              min: 0,
                              max: selectedCart.maxAmount
                                ? selectedCart.maxAmount
                                : 1
                            }
                          }}
                          value={
                            state.selectedItem.quantity
                              ? state.selectedItem.quantity
                              : 0
                          }
                          onChange={handleUpdateQty}
                        />
                        <Button
                          onClick={handleDispatchUpdateQty}
                          sx={{ textAlign: 'center' }}
                          color='secondary'
                        >
                          <CheckCircleIcon />
                          {handleIntl('update', locale)}
                        </Button>
                      </CardDetail>
                    ) : (
                      <CardDetail
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          width: '100%',
                          minHeight: '49px',
                          alignItems: 'center'
                        }}
                        onClick={() => handleSelected(selectedCart)}
                      >
                        <span style={{ marginRight: '8px' }}>
                          {selectedCart.quantity}
                        </span>
                        <EditIcon color='primary' />
                      </CardDetail>
                    )}
                    <CardDetail>{`${(
                      selectedCart.quantity * selectedCart.price
                    ).toFixed(2)}`}</CardDetail>
                    <CardDetailBtn>
                      <IconButton onClick={() => handleDelete(selectedCart.id)}>
                        <DeleteIcon color='warning' fontSize='inherit' />
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
