/*zona1: importaciones de componentes y archivos*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,} from 'react-native';
import {Saludo} from './Components/Saludo';
import {Saludo2} from './Components/Saludo2';
import {Perfil} from './Components/Perfil';

/* Zona2: Main - Hogar de los componentes */
export default function App() {
  return (
    <View style={styles.container}>
      
      <Perfil
      nombre="Oscar Barajas"
      carrera= "Sistemas"
      materia = "Programación Movil"
      cuatri = "6"></Perfil>
      
      <StatusBar style="auto" />
    </View>
  );
}

/* Zona3: Estilos y Posicionamientos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
