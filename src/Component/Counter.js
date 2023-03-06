import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {incNumber, decNumber} from '../Action/action';
import styles from '../Style /style';
export default function Counter() {
  const myState = useSelector(state => state.changeTheNumber);
  console.log(myState);
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Counter</Text>
        <TextInput>{myState}</TextInput>
        <TouchableOpacity
          style={styles.ButtonTouch}
          onPress={() => dispatch(decNumber())}>
          <Text>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(incNumber())}>
          <Text> + </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
