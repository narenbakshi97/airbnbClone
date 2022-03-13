import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';

import feed from '../../../assets/data/feed';
import Post from '../../components/Post';

const SearchResult = props => {
  return (
    <View>
      <FlatList data={feed} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
};

export default SearchResult;
