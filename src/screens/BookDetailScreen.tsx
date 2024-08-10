import React from 'react';
// components
import ScreenContainer from '../components/ScreenContainer';
import BookDetails from '../components/BookDetails';
// styles
import {useColors} from '../hooks/useColors';

const BookDetailScreen: React.FC = () => {
  const colors = useColors();
  return (
    <ScreenContainer isScrollable backgroundColor={colors.background}>
      <BookDetails />
    </ScreenContainer>
  );
};

export default BookDetailScreen;
