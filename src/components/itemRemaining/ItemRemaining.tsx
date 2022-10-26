import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../types';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import { Wrapper } from './styles';

export const ItemRemaining = () => {
  const { selectedProduct } = useSelector((state: AppState) => state);

  const ProductInStore = () => {
    return (
      <span>{`${
        selectedProduct.maxAmount - selectedProduct.quantity
      } in store`}</span>
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
