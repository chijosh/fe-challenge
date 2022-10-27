import { useDispatch, useSelector } from 'react-redux';
import { Snackbar, Icon, Alert, Slide } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import IconButton from '@mui/material/IconButton';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { clearSnackbar } from '../../state-managment/actions/snackbar/snackbarActions';
import { AppState } from '../../types';
import { SlideProps } from '@mui/material/Slide';

type TransitionProps = Omit<SlideProps, 'direction'>;

export const AppSnackbar = () => {
  const dispatch = useDispatch();

  const { successSnackbarMessage, successSnackbarOpen } = useSelector(
    (state: AppState) => state.snackbar
  );

  const handleClose = () => {
    dispatch(clearSnackbar());
  };

  const TransitionLeft = (props: TransitionProps) => {
    return <Slide {...props} direction='right' />;
  };

  return (
    <Snackbar
      TransitionComponent={TransitionLeft}
      open={successSnackbarOpen}
      autoHideDuration={4000}
      onClose={handleClose}
      aria-describedby='client-snackbar'
    >
      <Alert
        action={[
          <IconButton
            key='close'
            aria-label='close'
            color='inherit'
            onClick={handleClose}
          >
            <HighlightOffIcon />
          </IconButton>
        ]}
        severity='success'
      >
        {successSnackbarMessage}
      </Alert>
    </Snackbar>
  );
};
