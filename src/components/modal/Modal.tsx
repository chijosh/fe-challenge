import { useDispatch, useSelector } from 'react-redux';
import { setModalDisplay } from '../../state-managment/actions/modal/modalActions';
import { clearCart } from '../../state-managment/actions/carts/cartActions';
import { removeSelectedProduct } from '../../state-managment/actions/products/productActions';
import {
  Dialog,
  Button,
  DialogContent,
  IconButton,
  DialogTitle,
  DialogActions
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { AppState } from '../../types';

const AppModal = () => {
  const dispatch = useDispatch();
  const { modal } = useSelector((state: AppState) => state);

  const handleClose = () => {
    dispatch(clearCart());
    dispatch(removeSelectedProduct());
    dispatch(setModalDisplay({ isModalOpen: false }));
  };

  return (
    <div>
      <Dialog open={modal.isModalOpen} onClose={handleClose}>
        <DialogTitle sx={{ m: 0, p: 2 }}>
          Thanks for your order!
          {!!modal.isModalOpen ? (
            <IconButton
              aria-label='close'
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8
              }}
            >
              <CloseIcon />
            </IconButton>
          ) : null}
        </DialogTitle>

        <DialogContent dividers>
          <video style={{ width: '100%' }} autoPlay loop>
            <source src='/images/superhero.mp4' type='video/mp4' />
          </video>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export { AppModal };
