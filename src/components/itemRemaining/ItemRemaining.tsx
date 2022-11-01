import { useSelector } from 'react-redux';
import { AppState } from '../../types';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import { Wrapper } from './styles';
import { handleIntl } from '../../utils';

export const ItemRemaining = () => {
  const { selectedProduct, locale } = useSelector((state: AppState) => state);

  const ProductInStore = () => {
    return (
      <span>{`${
        selectedProduct.maxAmount - selectedProduct.quantity
      } ${handleIntl('inStore', locale)}`}</span>
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
