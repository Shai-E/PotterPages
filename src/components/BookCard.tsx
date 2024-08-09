import React, {memo} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
// redux
import {useAppSelector} from '../hooks/reduxHooks';
import {selectIsFavorite} from '../store/selectors';
// components
import TextElement from './reusable/TextElement';
// hooks
import {useNavigateToBookDetailCB} from '../hooks/navigationHooks';
// styles
import StarIcon from '../assets/Star';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {light} from '../fixtures/colors.json';
// animations
import Animated, {FadeInDown} from 'react-native-reanimated';
// types
import {Book} from '../types/entities';

type BookCardProps = {
  book: Book;
  onFavoritePress: (bookId: string) => void;
  index: number;
};

const BookCard: React.FC<BookCardProps> = ({book, onFavoritePress, index}) => {
  const isFavorite = useAppSelector(state => selectIsFavorite(state, book.id));

  const navigateToBookDetail = useNavigateToBookDetailCB();

  return (
    <Animated.View entering={FadeInDown.delay(120 * index)}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.card}
        onPress={navigateToBookDetail.bind(this, book.id)}>
        <ImageBackground
          source={{uri: book.cover}}
          style={styles.cover}
          imageStyle={styles.image}
          resizeMode={'cover'}>
          <View style={styles.overlay}>
            <View style={styles.infoContainer}>
              <TextElement style={styles.title}>{book.title}</TextElement>
              <TextElement style={styles.date}>{book.releaseDate}</TextElement>
            </View>
            <TouchableOpacity
              onPress={onFavoritePress.bind(this, book.id)}
              hitSlop={{top: 20, right: 20, bottom: 20, left: 20}}
              style={styles.favoriteIcon}>
              <StarIcon fill={!isFavorite ? light.transparent : undefined} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: hp('40%'),
    width: wp('45%'),
    margin: wp('2.5%'),
    borderRadius: 15,
    overflow: 'hidden',
  },
  cover: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  image: {
    borderRadius: 15,
  },
  overlay: {
    backgroundColor: light.overlay,
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
  },
  infoContainer: {
    backgroundColor: light.transparent,
    paddingHorizontal: 10,
  },
  title: {
    color: light.primaryText,
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  date: {
    color: light.subtle,
    fontSize: 12,
    marginTop: 2,
  },
  favoriteIcon: {
    alignSelf: 'flex-end',
  },
});

export default memo(BookCard);
