import { useIntl, FormattedMessage } from 'react-intl';
import { IProductItem } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../types';
import { removeFromBasket } from '../../state-managment/actions/carts/cartActions';
import { removeSelectedProduct } from '../../state-managment/actions/products/productActions';

import { Card, IconButton, Box, Badge } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import {
  CardContentTable,
  TableHeader,
  TableRow,
  CardDetail,
  CardDetailBtn
} from './styles';
import { Header } from '../../components/header/Header';

interface CardDetailsProp {
  product: IProductItem;
}

export const CartDetails = ({ product }: CardDetailsProp) => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const { cart } = useSelector((state: AppState) => state);

  const handleDelete = (id: string) => {
    dispatch(removeFromBasket(id));
  };

  if (cart.length === 0) {
    dispatch(removeSelectedProduct());
  }

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
          label={intl.formatMessage({
            id: 'Cart',
            defaultMessage: 'Cart'
          })}
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
            <TableHeader>
              <FormattedMessage
                id='productName'
                defaultMessage='Product name'
              />
            </TableHeader>
            <TableHeader>
              <FormattedMessage id='unitPrice' defaultMessage='Unit price' />
            </TableHeader>
            <TableHeader>
              <FormattedMessage id='amount' defaultMessage='Amount' />
            </TableHeader>
            <TableHeader>
              Price
              <FormattedMessage id='price' defaultMessage='Price' />
            </TableHeader>
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
                    <CardDetail>{selectedCart.quantity}</CardDetail>
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
