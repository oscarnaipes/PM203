/*zona1: importaciones de componentes y archivos*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,} from 'react-native';
import {Perfil} from '../Components/Perfil';
/* Zona2: Main - Hogar de los componentes */
export default function TarjetasScreen() {
  return (
    <View style={styles.container}>
      
      <Perfil
      estiloExt={styles.tarjetaRoja}
      nombre="Oscar Barajas"
      carrera= "Sistemas"
      materia = "Programación Movil"
      cuatri = "6"></Perfil>

      <Perfil estiloExt={styles.tarjetaVerde}nombre="Alejandro Batres" carrera= "Mecatronica" materia = "Base de Datos" cuatri = "9"></Perfil>

      <Perfil
      estiloExt={styles.tarjetaRoja}
      nombre="Matias Monroy"
      carrera= "Automotriz"
      materia = "Redes"
      cuatri = "2"></Perfil>
      
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
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },

  tarjetaRoja:{backgroundColor: '#ff6b6b'},
  tarjetaVerde:{backgroundColor: '#6bcb77'},
});
