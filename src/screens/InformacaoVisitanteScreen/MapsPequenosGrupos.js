import React, { useEffect, useRef, useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomSheet, { BottomSheetFlatList, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import Lista from "../../components/ListaPequenosGrupos";
import C from './style';

export default function App() {

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Mapa dos PGs",
      headerShown: false,
      headerShadowVisible: false,
    });
  });

  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["5%", "40%"], []);

  //Dados para teste
  const initialRegion = {
    latitude: -23.5908478,
    longitude: -46.5390874,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  };

  const json = [
    {
      cod_pequeno_grupo: 1,
      nom_lider: "Fulano de tal",
      nome_grupo: "Pg Legal",
      tipo_pequeno_grupo: "A",
      pequeno_grupo_genero: "M",
      qtd: 9,
      latitude: -23.5920485,
      longitude: -46.5411571,
    },
    {
      cod_pequeno_grupo: 2,
      nom_lider: "Vinicius Andrade",
      nome_grupo: "Alcáteia",
      tipo_pequeno_grupo: "B",
      pequeno_grupo_genero: "H",
      qtd: 6,
      latitude: -23.5890176,
      longitude: -46.5415476,
    },
  ];

  return (
    <C.Container >
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={initialRegion}>
        {json.map((dev) => (
          <Marker
            key={dev.cod_pequeno_grupo}
            coordinate={{
              latitude: Number(dev.latitude),
              longitude: Number(dev.longitude),
            }}>
            <Callout>
              <View>
                <Text>{dev.nome_grupo}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <BottomSheetModalProvider>

        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          keyboardBehavior="fillParent">
          <C.ContentContainer style={styles.contentContainer}>
            <C.Titulo>
              Pgs Relacionados para esse visitantes
            </C.Titulo>
          </C.ContentContainer>

          <BottomSheetFlatList
            data={json}
            keyExtractor={(item) => item.cod_pequeno_grupo.toString()}
            renderItem={({ item }) => (<Lista data={item} />)}
            contentContainerStyle={styles.contentContainer}
          />
        </BottomSheet>
      </BottomSheetModalProvider>
    </C.Container>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
