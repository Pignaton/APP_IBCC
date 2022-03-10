import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import ListScreen from "../screens/ListScreen";
import api from "../services/api";

const LogoutScreen = async ({ navigation }) => {
  //await api.logout();
  navigation.reset({
    index: 1,
    routes: [{ name: "LoginScreen" }],
  });
};

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Lista" component={ListScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="Sair" component={LogoutScreen} />
    </Drawer.Navigator>
  );
}
