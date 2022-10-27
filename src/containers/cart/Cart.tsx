import React from 'react';
import { useDispatch } from 'react-redux';

import { clearCart } from '../../state-managment/actions/carts/cartActions';

import { CardContainer } from '../../components/cardWrapper/CardWrapper';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
  const dispatch = useDispatch();

  const emptyCart = () => {
    dispatch(clearCart());
  };
  return (
    <CardContainer>
      <Button
        startIcon={<DeleteIcon />}
        variant='contained'
        onClick={() => emptyCart()}
      >
        Empty cart
      </Button>
    </CardContainer>
  );
};

export { Cart };
