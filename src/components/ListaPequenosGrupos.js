import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import BottomSheet, {
  BottomSheetView,
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

const App = ({ data }) => {
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
  return (
    <>
      <TouchableOpacity onPress={handlePresentModalPress}
                        style={styles.box}
                        key={data}>
        <View style={styles.headerArea}>
          <Icon name="users" size={15} color="#8863e7" />
          <View style={styles.infoArea}>
            <Text style={styles.title}>{data.nome_grupo}</Text>
            <Text style={styles.date}>{data.qtd} integrantes</Text>
          </View>
        </View>
      </TouchableOpacity>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <View style={styles.headerSheet}>
          <View style={styles.headerSheetBox}>
            <Text style={styles.title}>{data.nome_grupo}</Text>
            <Text style={styles.date}>{data.nom_lider}</Text>
          </View>
          <View style={styles.close}>
            <Icon
              name="times"
              size={20}
              color="#fff"
              onPress={handleDismissPress}
            />
          </View>
        </View>
        <View style={styles.body}>
          <Text style={styles.texto}>Tipo: {data.tipo_pequeno_grupo}</Text>
          <Text style={styles.texto}>Pequeno grupo de: {data.pequeno_grupo_genero}</Text>
          <Text style={styles.texto}>{data.qtd} integrantes</Text>
        </View>
      </BottomSheetModal>
    </>
  );
};

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
    marginRight: 15,
  },
  box: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#E8E9ED",
    padding: 15,
    marginBottom: 10,
  },
  headerArea: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoArea: {
    marginLeft: 15,
    flex: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#000",
  },
  date: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#9c9db9",
  },
  headerSheet: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  headerSheetBox: {
    marginLeft: 25,
  },
  body: {
    alignItems:'center',
    justifyContent:'center',
    padding: 15
  },
  texto: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#9c9db9",
    padding: 10
  }
});

export default App;
