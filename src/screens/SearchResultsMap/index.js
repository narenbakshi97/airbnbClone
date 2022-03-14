import React from 'react';
import {View, Text} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import styles from './styles';
import places from '../../../assets/data/feed';
import CustomMarker from '../../components/CustomMarker';

const SearchResultsMaps = props => {
  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.512487,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}>
        {places.map(place => (
          <CustomMarker coordinate={place.coordinate} price={place.newPrice} />
        ))}
      </MapView>
    </View>
  );
};

export default SearchResultsMaps;
