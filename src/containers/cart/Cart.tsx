import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useIntl } from 'react-intl';

import { AppState, IProductItem } from '../../types';
import { clearCart } from '../../state-managment/actions/carts/cartActions';

import { CardContainer } from '../../components/cardWrapper/CardWrapper';
import { Button, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSnackbar } from 'notistack';
import { removeSelectedProduct } from '../../state-managment/actions/products/productActions';
import { Header } from '../../components/header/Header';

const CartCheckout = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { cart } = useSelector((state: AppState) => state);

  const displaySnackbar = useCallback(() => {
    enqueueSnackbar(`Cart successfully cleared`, {
      variant: 'success'
    });
  }, [enqueueSnackbar]);

  const handleEmptyCart = () => {
    dispatch(clearCart());
    dispatch(removeSelectedProduct());
    displaySnackbar();
  };

  console.log({ cart });

  const getTotalCost = () => {
    let totalCostArr: Array<number> = [];

    cart.forEach((value: IProductItem) => {
      totalCostArr.push(value.price);
    });

    const value = totalCostArr.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);

    console.log({ value });

    return value;
  };

  return (
    <CardContainer>
      <Header
        label={intl.formatMessage({
          id: 'checkout',
          defaultMessage: 'Checkout'
        })}
      />
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'flex-end'
        }}
      >
        <Button
          color='warning'
          startIcon={<DeleteIcon />}
          variant='contained'
          onClick={() => handleEmptyCart()}
          sx={{ height: '40px' }}
        >
          Empty cart
        </Button>
        <Box
          sx={{
            height: '70px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <span>{`$${getTotalCost()}`}</span>
          <Button
            startIcon={<DeleteIcon />}
            variant='contained'
            onClick={() => handleEmptyCart()}
          >
            Buy
          </Button>
        </Box>
      </Box>
    </CardContainer>
  );
};

export { CartCheckout };
