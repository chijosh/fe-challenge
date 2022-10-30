import { useSelector } from 'react-redux';
import { useIntl } from 'react-intl';
import { AppState } from '../../types';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import { Wrapper } from './styles';

export const ItemRemaining = () => {
  const intl = useIntl();
  const { selectedProduct } = useSelector((state: AppState) => state);

  const ProductInStore = () => {
    return (
      <span>{`${
        selectedProduct.maxAmount - selectedProduct.quantity
      } ${intl.formatMessage({
        id: 'inStore',
        defaultMessage: 'in Store'
      })}`}</span>
    );
  };

  return (
    <Wrapper>
      {selectedProduct.maxAmount ? (
        <>
          <NewReleasesIcon />
          <ProductInStore />
        </>
      ) : (
        <div></div>
      )}
    </Wrapper>
  );
};
