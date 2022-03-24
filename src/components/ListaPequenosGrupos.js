import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomSheet, {
  BottomSheetView,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
const App = ({ data }) => {
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

  return (
    <TouchableOpacity
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
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#E8E9ED',
    padding: 15,
    marginBottom: 10,
  },
  headerArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoArea: {
    marginLeft: 15,
    flex: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
  },
  date: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#9c9db9',
  },
});

export default App;
