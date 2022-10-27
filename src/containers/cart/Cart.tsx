import { useDispatch } from 'react-redux';

import { clearCart } from '../../state-managment/actions/carts/cartActions';

import { CardContainer } from '../../components/cardWrapper/CardWrapper';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { showSuccessSnackbar } from '../../state-managment/actions/snackbar/snackbarActions';

const Cart = () => {
  const dispatch = useDispatch();

  const emptyCart = () => {
    dispatch(clearCart());
    dispatch(showSuccessSnackbar('Success!'));
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
