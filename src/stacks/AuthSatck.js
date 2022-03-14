import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PreloadScreen from '../screens/PreloadScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ChoosePropertyScreen from '../screens/ChoosePropertyScreen';
import MainDrawer from './MainDrawer'

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#F5F6FA',
        elevation: 0,
        shadowOpacity: 0
      }
    }}>
      <Stack.Screen
        name="PreloadScreen"
        component={PreloadScreen}
        options={{headerShown:false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown:false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{headerShown:true}}
      />
      <Stack.Screen
        name="ChoosePropertyScreen"
        component={ChoosePropertyScreen}
        options={{headerShown:true}}
      />
      <Stack.Screen
        name="MainDrawer"
        component={MainDrawer}
        options={{headerShown:false}}
      />
    </Stack.Navigator>
  );
};
