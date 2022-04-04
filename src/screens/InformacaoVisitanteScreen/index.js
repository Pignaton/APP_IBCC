import React from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MapsPequenosGrupos from "./MapsPequenosGrupos";
import InfoVisitante from "./InfoVisitante";

export default function App() {

  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();

  //Não faz nada, foi colocado só ter um component na tab.screen
  const listaScreen = () => {
    return (<Text>console.log('oi')</Text>);
  };
  return (
    <Tab.Navigator initialRouteName="Informações do Visitante">
      <Tab.Screen
        name="Voltar"
        component={listaScreen}
        listeners={{
          tabPress: e => {
            navigation.navigate("ListScreen");
          },
        }}
        options={{
          headerShown: true,
          headerShadowVisible: true,
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: "Roboto-Bold",
          },
          tabBarIcon: () => (
            <Icon name="arrow-left" color="#55A1DC" size={30} />
          ),
        }} />
      <Tab.Screen
        name="Explorar"
        component={MapsPequenosGrupos}
        options={{
          headerShown: true,
          headerShadowVisible: true,
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: "Roboto-Bold",
          },
          tabBarIcon: () => (
            <Icon name="map" color="#55A1DC" size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Informações do Visitante"
        component={InfoVisitante}
        options={{
          headerShown: false,
          tabBarLabel: "Visitante",
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: "Roboto-Bold",
          },
          tabBarIcon: () => (
            <Icon name="account" color="#55A1DC" size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

