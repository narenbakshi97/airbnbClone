/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Post from './src/components/Post';
import HomeScreen from './src/screens/Home';
import feed from './assets/data/feed';
import SearchResult from './src/screens/SearchResults';
import DestinationSearch from './src/screens/DestinationSearch';

const post1 = feed[0];

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <DestinationSearch />
      </SafeAreaView>
    </>
  );
};

export default App;
