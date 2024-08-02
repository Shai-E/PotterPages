import React from 'react';
// components
import ScreenContainer from '../components/ScreenContainer';
import BookDetails from '../components/BookDetails';
// styles
import {light} from '../fixtures/colors.json';

const BookDetailScreen: React.FC = () => {
  return (
    <ScreenContainer isScrollable backgroundColor={light.background}>
      <BookDetails />
    </ScreenContainer>
  );
};

export default BookDetailScreen;
