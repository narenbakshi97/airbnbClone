import React from 'react';
import {View, Text, Image, useWindowDimensions, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const PostCarouselItem = props => {
  const post = props.post;
  const width = useWindowDimensions().width;

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate('Post', {postId: post.id});
  };

  return (
    <Pressable
      onPress={goToPostPage}
      style={[styles.container, {width: width - 60}]}>
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
    </Pressable>
  );
};

export default PostCarouselItem;
