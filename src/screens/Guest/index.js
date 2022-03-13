import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Guest = props => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infant, setInfant] = useState(0);

  const navigation = useNavigation();

  return (
    <View style={{justifyContent: 'space-between', height: '100%'}}>
      <View>
        {/* ROW 1: Adults */}
        <View style={styles.row}>
          {/* Titles */}
          <View>
            <Text style={{fontWeight: 'bold'}}>Adults</Text>
            <Text style={{color: '#8d8d8d'}}>13 or Above</Text>
          </View>
          {/* Buttons with value */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* - btn */}
            <Pressable
              onPress={() => setAdults(Math.max(0, adults - 1))}
              style={styles.btn}>
              <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
            </Pressable>
            {/* value */}
            <Text style={{marginHorizontal: 20, fontSize: 16}}>{adults}</Text>
            {/* + btn */}
            <Pressable onPress={() => setAdults(adults + 1)} style={styles.btn}>
              <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
            </Pressable>
          </View>
        </View>

        {/* Row 2 */}
        <View style={styles.row}>
          {/* Titles */}
          <View>
            <Text style={{fontWeight: 'bold'}}>Children</Text>
            <Text style={{color: '#8d8d8d'}}>Age 2-12</Text>
          </View>
          {/* Buttons with value */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* - btn */}
            <Pressable
              onPress={() => setChildren(Math.max(0, children - 1))}
              style={styles.btn}>
              <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
            </Pressable>
            {/* value */}
            <Text style={{marginHorizontal: 20, fontSize: 16}}>{children}</Text>
            {/* + btn */}
            <Pressable
              onPress={() => setChildren(children + 1)}
              style={styles.btn}>
              <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
            </Pressable>
          </View>
        </View>

        {/* Row 3 */}
        <View style={styles.row}>
          {/* Titles */}
          <View>
            <Text style={{fontWeight: 'bold'}}>Infants</Text>
            <Text style={{color: '#8d8d8d'}}>Under 2</Text>
          </View>
          {/* Buttons with value */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* - btn */}
            <Pressable
              onPress={() => setInfant(Math.max(0, infant - 1))}
              style={styles.btn}>
              <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
            </Pressable>
            {/* value */}
            <Text style={{marginHorizontal: 20, fontSize: 16}}>{infant}</Text>
            {/* + btn */}
            <Pressable onPress={() => setInfant(infant + 1)} style={styles.btn}>
              <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <Pressable
        onPress={() =>
          navigation.navigate('Home', {
            screen: 'Explore',
            params: {
              screen: 'SearchResults',
            },
          })
        }
        style={{
          marginBottom: 20,
          backgroundColor: '#f15454',
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
          marginHorizontal: 20,
          borderRadius: 10,
        }}>
        <Text
          style={{
            fontSize: 16,
            color: 'white',
            fontWeight: 'bold',
          }}>
          Search
        </Text>
      </Pressable>
    </View>
  );
};

export default Guest;
