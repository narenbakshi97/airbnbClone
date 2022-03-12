import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

const HomeScreen = props => {
  return (
    <View>
      {/* Search bar component */}
      <Pressable
        style={styles.searchBtn}
        onPress={() => console.warn('Search button pressed!')}>
        <Fontisto name="search" size={25} color={'#f15454'} />
        <Text style={styles.searchBtnText}>Where are you going?</Text>
      </Pressable>

      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        {/* Title  */}
        <Text style={styles.title}>Go Near</Text>

        {/* Button */}
        <Pressable
          style={styles.btn}
          onPress={() => console.warn('Nearby stays pressed!')}>
          <Text style={styles.btnText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
