import React from 'react';
import ScreenContainer from '../components/ScreenContainer';
import BookDetails from '../components/BookDetails';

const BookDetailScreen: React.FC = () => {
  return (
    <ScreenContainer isScrollable backgroundColor={'#f5f5f5'}>
      <BookDetails />
    </ScreenContainer>
  );
};

export default BookDetailScreen;
