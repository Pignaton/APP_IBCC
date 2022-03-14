import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StateProvider} from './src/contexts/StateContext';
import AuthSack from './src/stacks/AuthSatck';

import { Text, View } from 'react-native';

export default () => {
  return (
    <StateProvider>
      <NavigationContainer>
        <AuthSack />
      </NavigationContainer>
    </StateProvider>
  );
}
