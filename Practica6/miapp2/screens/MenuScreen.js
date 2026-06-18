/*zona1: importaciones de componentes y archivos*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import React,{useState} from 'react';
import TarjetasScreen from './TarjetasScreen';
import SafeAreaScreen from './SafeAreaScreen';
import PressableArea from './PressableArea';
import TextInput from './TextInput';
import FlatList from './FlatList';
import ImageBackground from './ImageBackground';
import ActivityIndicator from './ActivityIndicator';
import Modal from './Modal';

/* Zona2: Main - Hogar de los componentes */
export default function MenuScreen() {

    const [screen, setScreen] = useState('menu');

    switch(screen){
        case 'tarjetas':
            return <TarjetasScreen/>;
        case 'safeArea':
            return <SafeAreaScreen/>;
        case 'Pressable & Switch':
            return <PressableArea/>;
        case 'TextInput & Alert':
            return <TextInput/>;
        case 'FlatList':
            return <FlatList/>;
        case 'ImageBackground':
            return <ImageBackground/>;
        case 'ActivityIndicator':
            return <ActivityIndicator/>;
        case 'Modal':
            return <Modal/>;
        case 'menu':
            default:
            return (
                <View style={styles.container}>

                    <Text> Menu de Practicas: </Text>

                    <Button onPress={() => setScreen('tarjetas')} title="Practica:  Tarjetas" />
                    <Button onPress={() => setScreen('safeArea')} title="Practica:  Safe Area" />
                    <Button onPress={() => setScreen('Pressable & Switch')} title="Practica:  Pressable & Switch" />
                    <Button onPress={() => setScreen('TextInput & Alert')} title="Practica:  TextInput & Alert" />    
                    <Button onPress={() => setScreen('FlatList')} title="Practica:  FlatList" />
                    <Button onPress={() => setScreen('ImageBackground')} title="Practica:  ImageBackground" />
                    <Button onPress={() => setScreen('ActivityIndicator')} title="Practica:  ActivityIndicator" />
                    <Button onPress={() => setScreen('Modal')} title="Practica:  Modal" />
                    <StatusBar style="auto" />
                 </View>
            );
    }
}

/* Zona3: Estilos y Posicionamientos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  tarjetaRoja:{backgroundColor: '#ff6b6b'},
  tarjetaVerde:{backgroundColor: '#6bcb77'},
});
