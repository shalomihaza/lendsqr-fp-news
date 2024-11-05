import React from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {COLORS} from 'theme/config';
import {getLocalDateString, L} from 'utils/helpers';
import {h, w} from 'utils/responsive';

interface NewsDetailProps {
  route: any;
}

const NewsDetail: React.FC<NewsDetailProps> = ({route}) => {
  const {article} = route.params;
  L('NewsDetail article:', article);
  return (
    <ScrollView style={styles.container}>
      <FastImage
        source={{uri: article.images?.thumbnail}}
        style={styles.image}
      />
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.author}>By: {article?.publisher || 'Unknown'}</Text>
      <Text style={styles.date}>
        {getLocalDateString(parseInt(article.timestamp))}
      </Text>
      <Text style={styles.summary}>{article.snippet}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: h(200),
  },
  title: {
    fontSize: h(24),
    fontWeight: 'bold',
    color: COLORS.black,
    paddingHorizontal: w(15),
    paddingVertical: h(15),
  },
  author: {
    fontSize: 16,
    color: '#666',
    paddingHorizontal: 15,
  },
  date: {
    fontSize: h(14),
    color: '#999',
    paddingHorizontal: w(15),
    marginTop: h(5),
  },
  summary: {
    fontSize: h(16),
    lineHeight: h(24),

    paddingHorizontal: w(15),
    paddingVertical: h(15),
    color: COLORS.gray,
  },
});

export default NewsDetail;
