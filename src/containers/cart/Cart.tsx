import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { clearCart } from '../../state-managment/actions/carts/cartActions';

import { CardContainer } from '../../components/cardWrapper/CardWrapper';
import { Button, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSnackbar } from 'notistack';
import { removeSelectedProduct } from '../../state-managment/actions/products/productActions';

const Cart = () => {
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
      <Typography variant='h4' sx={{ mb: 3 }}>
        Checkout
      </Typography>
      <Button
        startIcon={<DeleteIcon />}
        variant='contained'
        onClick={() => handleEmptyCart()}
      >
        Empty cart
      </Button>
    </CardContainer>
  );
};

export { Cart };
