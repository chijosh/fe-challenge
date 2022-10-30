import { useIntl } from 'react-intl';
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
    <Card sx={{ p: 1 }}>
      <Header
        label={intl.formatMessage({
          id: 'Cart',
          defaultMessage: 'Cart'
        })}
        tooltip={'Maximum 10 items'}
      />
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
