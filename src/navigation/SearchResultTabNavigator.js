import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchResult from '../screens/SearchResults';
import SearchResultsMaps from '../screens/SearchResultsMap';

const Tab = createMaterialTopTabNavigator();

const SearchResultTabNavigator = props => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#f15454',
        tabBarIndicatorStyle: {
          backgroundColor: '#f15454',
        },
      }}>
      <Tab.Screen name={'list'} component={SearchResult} />

      <Tab.Screen name={'map'} component={SearchResultsMaps} />
    </Tab.Navigator>
  );
};

export default SearchResultTabNavigator;
