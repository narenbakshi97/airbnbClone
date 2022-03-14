import React from 'react';
import {View, Text, Image} from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import styles from './styles';

const PostCarouselItem = props => {
  const post = props.post;
  const width = useWindowDimensions().width;

  return (
    <View style={[styles.container, {width: width - 60}]}>
      <View style={styles.innerContainer}>
        {/* Image */}
        <Image style={styles.image} source={{uri: post.image}} />

        <View style={{flex: 1, marginHorizontal: 10}}>
          {/* Bed & Bedroom text */}
          <Text style={styles.bedrooms}>
            {post.bed} bed {post.bedroom} bedroom
          </Text>

          {/* Type and description */}
          <Text style={styles.description} numberOfLines={2}>
            {post.type}. {post.title}
          </Text>

          {/* old price & new price */}
          <Text style={styles.prices}>
            <Text style={styles.newPrice}> ${post.newPrice}</Text> / night
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PostCarouselItem;
