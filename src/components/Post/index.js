import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Post = props => {
  return (
    <View style={styles.container}>
      {/* Image */}
      {/* <Image
        style={styles.image}
        source={require('../../../assets/images/wallpaper.jpg')}
      /> */}

      {/* Bed & Bedroom text */}
      <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>

      {/* Type and description */}
      <Text style={styles.description} numberOfLines={2}>
        addsdasdasdasdasdnasdndasbd dasd dsad sdaad dasjdasd asdasjdas dasda
        dawdada
      </Text>

      {/* old price & new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$42</Text>
        <Text style={styles.newPrice}> $30</Text> / night
      </Text>

      {/* Total price */}
      <Text style={styles.totalPrice}>$230 total</Text>
    </View>
  );
};

export default Post;
