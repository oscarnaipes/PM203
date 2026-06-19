/* zona1: importaciones de componentes y archivos */
import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, Pressable, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';

/* Zona2: Main - Hogar de los componentes */
export default function PressableArea() {

  /*1*/
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSwitch = () => {
    setIsDarkMode(previousState => !previousState);
  };

  return (
    <View style={[styles.container, isDarkMode ? styles.bgDark : styles.bgLight]}>

      <Text style={[styles.title, isDarkMode ? styles.textDark : styles.textLight]}>
        Ajustes del Sistema
      </Text>

      <View style={styles.row}>
        <Text style={[styles.label, isDarkMode ? styles.textDark : styles.textLight]}>
          Modo Oscuro: {isDarkMode ? "Activado" : "Desactivado"}
        </Text>

        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isDarkMode}
        />
      </View>

      <Pressable
        onPress={() => Alert.alert('Éxito', 'Configuración guardada correctamente')}

  /*2 */
        onLongPress={() => Alert.alert('Info', 'Mantuviste presionado el botón')}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? '#0056b3' : '#007BFF' }
        ]}
      >


  {/*3*/}
        <Text style={styles.buttonText}>Guardar Cambios</Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

/* Zona3: Estilos y Posicionamientos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  bgLight: {
    backgroundColor: '#f5f5f5',
  },

  bgDark: {
    backgroundColor: '#121212',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },

  textLight: {
    color: '#000',
  },

  textDark: {
    color: '#fff',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 40,
    paddingHorizontal: 20,
  },

  label: {
    fontSize: 18,
  },

  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 3,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});