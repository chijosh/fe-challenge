import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useIntl } from 'react-intl';

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

  return (
    <CardContainer>
      <Header
        label={intl.formatMessage({
          id: 'checkout',
          defaultMessage: 'Checkout'
        })}
      />
      <Box
        sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}
      >
        <Button
          color='warning'
          startIcon={<DeleteIcon />}
          variant='contained'
          onClick={() => handleEmptyCart()}
        >
          Empty cart
        </Button>
        <Button
          startIcon={<DeleteIcon />}
          variant='contained'
          onClick={() => handleEmptyCart()}
        >
          Buy
        </Button>
      </Box>
    </CardContainer>
  );
};

export { CartCheckout };
