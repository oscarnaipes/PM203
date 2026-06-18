/*zona1: importaciones de componentes y archivos*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,} from 'react-native';
/* Zona2: Main - Hogar de los componentes */
export default function ImageBackground() {
  return (
    <View style={styles.container}>
        <Text>Aqui va la practica de Ines</Text>
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
