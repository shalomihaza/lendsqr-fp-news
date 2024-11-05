import React, {useEffect} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  // Image,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import {fetchNews} from 'store/newsSlice';

import {getLocalDateString, L} from 'utils/helpers';
import {NEWS_DETAIL_SCREEN} from 'utils/constants/screenNames';
import {COLORS} from 'theme/config';
import FastImage from 'react-native-fast-image';
import {useAppDispatch, useAppSelector} from 'hooks/redux-hooks/storeHooks';
import {h, w} from 'utils/responsive';

interface NewsListProps {
  navigation: any;
}

const NewsList: React.FC<NewsListProps> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const {articles, status} = useAppSelector(state => state.news);

  useEffect(() => {
    L('NewsList useEffect');
    dispatch(fetchNews());
  }, [dispatch]);

  const renderItem = ({item}: {item: any}) => (
    <TouchableOpacity
      style={styles.newsItem}
      onPress={() => navigation.navigate(NEWS_DETAIL_SCREEN, {article: item})}>
      <FastImage source={{uri: item?.images?.thumbnail}} style={styles.image} />
      <View style={styles.content}>
        <Text numberOfLines={2} style={styles.title}>
          {item.title}
        </Text>
        <Text numberOfLines={2} style={styles.description}>
          {item.snippet}
        </Text>
        <Text style={styles.date}>
          {getLocalDateString(parseInt(item.timestamp))}
        </Text>
      </View>
    </TouchableOpacity>
  );

  if (status === 'loading') {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={COLORS.blue} />
      </View>
    );
  }

  return (
    <FlatList
      data={articles}
      renderItem={renderItem}
      // keyExtractor={item => item.id}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  newsItem: {
    flexDirection: 'row',

    paddingHorizontal: w(10),
    paddingVertical: h(10),
    backgroundColor: COLORS.white,
    marginVertical: h(5),
    marginHorizontal: w(10),
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: w(100),
    height: h(100),
    borderRadius: 5,
  },
  content: {
    flex: 1,
    marginLeft: w(10),
    justifyContent: 'space-between',
  },
  title: {
    fontSize: h(15),
    fontWeight: 'bold',
    color: COLORS.black,
  },
  description: {
    fontSize: h(14),
    color: COLORS.black,
  },
  date: {
    fontSize: h(12),
    color: COLORS.gray,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NewsList;
