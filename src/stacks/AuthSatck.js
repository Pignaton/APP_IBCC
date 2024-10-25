import * as React from "react";
import Icon from "react-native-vector-icons/dist/FontAwesome";
//import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PreloadScreen from "../screens/PreloadScreen";
import LoginScreen from "../screens/LoginScreen";
import RecuperaSenhaScreen from "../screens/LoginScreen/recuperar-senha";
import CadastroScreen from "../screens/CadastroScreen";
import CriaContaScreen from "../screens/CriaContaScreen";
import HomeScreen from "../screens/HomeScreen";
import IndexScreen from "../screens/InformacaoVisitanteScreen/";
import MainDrawer from "./MainDrawer";

const Stack = createNativeStackNavigator();

//const navigation = useNavigation();
export default () => {
  return (
    <Stack.Navigator
      initialRouteName='Prelaod'
      screenOptions={({navigation}) => ({
        headerStyle: {
          backgroundColor: '#FFF',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
       /*headerLeft: () => (
          <Icon name="angle-left" size={45} color="#55A1DC" onPress={() => navigation.goBack()} />
        ),*/
      })}>
      <Stack.Screen
        name="PreloadScreen"
        component={PreloadScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false, headerShadowVisible: false }}
      />
      <Stack.Screen
        name="RecuperaSenhaScreen"
        component={RecuperaSenhaScreen}
        options={{ headerShown: true, headerShadowVisible: false }}
      />
      <Stack.Screen
        name="CriaContaScreen"
        component={CriaContaScreen}
        options={{ headerShown: true, headerShadowVisible: false }}
      />
      <Stack.Screen
        name="CadastroScreen"
        component={CadastroScreen}
        options={{ headerShown: true, headerShadowVisible: false }}
      />
      <Stack.Screen
        name="MainDrawer"
        component={MainDrawer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="IndexScreen"
        component={IndexScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};
