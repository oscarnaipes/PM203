import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Switch,
  Platform,
} from 'react-native';

if (Platform.OS === 'web') {
  Alert.alert = (titulo, mensaje) => {
    window.alert(titulo + (mensaje ? '\n\n' + mensaje : ''));
  };
}
export default function Formulario() {
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');

  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);
    const enviarRegistro = () => {
    if (!nombreCompleto || !carrera || !semestre) {
      Alert.alert('Campos incompletos', 'Debes llenar todos los campos.');
      return;
    }

    if (isNaN(semestre)) {
      Alert.alert('Error', 'El semestre debe ser un número.');
      return;
    }

    Alert.alert(
      'Registro enviado',
      `Nombre: ${nombreCompleto}
Carrera: ${carrera}
Semestre: ${semestre}

Taller: ${taller ? 'Sí' : 'No'}
Constancia: ${constancia ? 'Sí' : 'No'}
Deportes: ${deportes ? 'Sí' : 'No'}`
    );
  };
    return (
    <View style={styles.formulario}>
      <Text style={styles.titulo}>Registro de Evento Universitario</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        value={nombreCompleto}
        onChangeText={setNombreCompleto}
      />

      <TextInput
        style={styles.input}
        placeholder="Carrera"
        value={carrera}
        onChangeText={setCarrera}
      />

      <TextInput
        style={styles.input}
        placeholder="Semestre"
        value={semestre}
        onChangeText={setSemestre}
/>

      <Text style={styles.subtitulo}>Opciones</Text>

      <View style={styles.opcion}>
        <Text>¿Asistirá al taller?</Text>
        <Switch value={taller} onValueChange={setTaller} />
      </View>

      <View style={styles.opcion}>
        <Text>¿Requiere constancia?</Text>
        <Switch value={constancia} onValueChange={setConstancia} />
      </View>

      <View style={styles.opcion}>
        <Text>¿Participará en deportes?</Text>
        <Switch value={deportes} onValueChange={setDeportes} />
      </View>

      <Button title="Enviar Registro" onPress={enviarRegistro} />
    </View>
  );
}
const styles = StyleSheet.create({
  formulario: {
    width: '90%',
    padding: 20,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 12,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  opcion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
});