/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Dimensions} from 'react-native';
import {AdMobNative} from 'react-native-admob';
const {width: DEVICE_WIDTH} = Dimensions.get('window');

const App: () => React$Node = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'teal'}}>
      <AdMobNative
        style={{
          width: DEVICE_WIDTH,
        }}
        adSize={"medium"}
        adUnitId={'ca-app-pub-3940256099942544/3986624511'}
        onAdLoaded={() => console.log('Ad loaded')}
        onAdFailedToLoad={() => console.log('Ad failed to loaded')}
      />
    </View>
  );
};

export default App;
