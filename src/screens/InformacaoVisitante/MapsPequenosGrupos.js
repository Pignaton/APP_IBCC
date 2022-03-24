import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomSheet, {
  BottomSheetTextInput,
  BottomSheetFlatList,
  BottomSheetView,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetHandle,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import Lista from "../../components/ListaPequenosGrupos";

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
  const bottomSheetModalRef = useRef(null);
  // variables
  const snapPoints = useMemo(() => ['5%', '50%'], []);
  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleDismissPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  const initialRegion = {
    latitude: -23.5908478,
    longitude: -46.5390874,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  };

  const json = [
    {
      cod_pequeno_grupo: 1,
      nom_lider: 'Fulano de tal',
      nome_grupo: " Pg Legal",
      tipo_pequeno_grupo: 'A',
      pequeno_grupo_genero: 'M',
      qtd: 9,
      latitude: -23.5920485,
      longitude: -46.5411571,
    },
    {
      cod_pequeno_grupo: 2,
      nom_lider: 'Vinicius Andrade',
      nome_grupo: " Alcáteia",
      tipo_pequeno_grupo: 'J',
      pequeno_grupo_genero: 'H',
      qtd: 6,
      latitude: -23.5890176,
      longitude: -46.5415476,
    },
  ];

  return (
    <View style={styles.container}>
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
          keyboardBehavior="fillParent"
          onChange={handleSheetChanges}>
          <View style={styles.contentContainer}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                textAlign: "center",
                paddingBottom: 5,
                color: "#000"
              }}>
              Pgs Relacionados para esse visitantes
            </Text>
          </View>

          <BottomSheetFlatList
            data={json}
            keyExtractor={(item) => item.cod_pequeno_grupo.toString()}
            renderItem={({ item }) => ( <Lista data={item} /> )}
            contentContainerStyle={styles.contentContainer}
          />
        </BottomSheet>
      </BottomSheetModalProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 10,
    backgroundColor: 'white',
  },
  map: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
