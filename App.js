import {Text, SafeAreaView} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/Store/store';
import Counter from './src/Component/Counter';
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex:1}}>
        <Text>App</Text>
        <Counter />
      </SafeAreaView>
    </Provider>
  );
}
