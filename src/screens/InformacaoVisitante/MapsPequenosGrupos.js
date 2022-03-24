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
      headerTitle: "Informações do Visitante",
    });
  });

  const bottomSheetRef = useRef(null);
  const bottomSheetModalRef = useRef(null);
  // variables
  const snapPoints = useMemo(() => ["5%", "50%"], []);
  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
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
      nome_grupo: " Pg Legal",
      qtd: 9,
      latitude: -23.5920485,
      longitude: -46.5411571,
      cep: "03283060",
    },
    {
      cod_pequeno_grupo: 2,
      nome_grupo: " Alcáteia",
      qtd: 6,
      latitude: -23.5890176,
      longitude: -46.5415476,
      cep: "03008030",
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
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <Text>Nome do PG</Text>
          <Text>Nome do Lider</Text>
          <View style={styles.close}>
            <Icon
              name="times"
              size={20}
              color="#fff"
              onPress={handleDismissPress}
            />
          </View>
        </BottomSheetModal>
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
              }}>
              Pgs Relacionados para esse visitantes
            </Text>
          </View>
          <BottomSheetView>
            <Button title="Press me" onPress={handlePresentModalPress} />
          </BottomSheetView>

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
    backgroundColor: "white",
  },
  close: {
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    border: 1,
    backgroundColor: "#CCC",
  },
  map: {
    flex: 1, //the container will fill the whole screen.
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
