import React, { useEffect, useState } from "react";
import { StyleSheet, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import MapsPequenosGrupos from "./MapsPequenosGrupos";
import InfoVisitante from "./InfoVisitante";
import CadastroAcompanhamento from "./CadastroAcompanhamento";

export default function App({ data }) {

  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();
  const route = useRoute();

  const [mensagem, setMensagem] = useState();

  useEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: "#FFF", fontFamily: "Roboto-Bold" },
      headerTitle: "INFORMAÇÕES DO VISITANTE",
    });
  }, [data]);


  return (
    <Tab.Navigator initialRouteName="InfoVisitante">
      <Tab.Screen
        name="InfoVisitante"
        component={InfoVisitante}
        initialParams={{ cod_pessoa: route.params.codPessoa }}
        options={{
          headerShown: false,
          tabBarLabel: "Visitante",
          tabBarLabelStyle: {
            fontSize: 12,
            color: "#000",
            borderColor: "#7C04E4",
            fontFamily: "Roboto-Bold",
          },
          tabBarIcon: () => (
            <Image source={require('../../assets/icon/user-square.png')} style={styles.images} resizeMode="stretch" />
          ),
        }}
      />
      <Tab.Screen
        name="CadastroAcompanhamento"
        component={CadastroAcompanhamento}
        initialParams={{ cod_pessoa: route.params.codPessoa }}
        options={{
          headerShown: false,
          tabBarLabel: "Contato pós Visita",
          tabBarLabelStyle: {
            fontSize: 12,
            color: "#000",
            borderColor: "#7C04E4",
            fontFamily: "Roboto-Bold",
          },
          tabBarIcon: () => (
            <Image source={require('../../assets/icon/register.png')} style={styles.image} resizeMode="stretch" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 22,
    height: 22,
  },
  images: {
    width: 25,
    height: 25,
  },
});

