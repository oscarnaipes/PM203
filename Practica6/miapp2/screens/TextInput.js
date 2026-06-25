/* zona1: importaciones de componentes y archivos */
import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  Alert,
  Button,
  StyleSheet,
  Platform,
} from 'react-native';

/* Adaptación de Alert para web */
if (Platform.OS === 'web') {
  Alert.alert = (titulo, mensaje, botones) => {
    if (Array.isArray(botones)) {
      if (window.confirm(titulo + (mensaje ? "\n" + mensaje : ""))) {
        botones.find((b) => b.onPress)?.onPress();
      }
    } else {
      window.alert(titulo + (mensaje ? "\n" + mensaje : ""));
    }
  };
}

/* Zona2: Main - Hogar de los componentes */
export default function FormularioRegistro() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [numero, setNumero] = useState("");
  const [bio, setBio] = useState("");

  const registro = () => {
    if (!nombre || !correo || !contraseña || !numero) {
      Alert.alert("Faltan datos", "Por favor complete todos los campos faltantes");
      return;
    }

    if (!correo.includes("@") || !correo.includes(".com")) {
      Alert.alert("Correo inválido", "Por favor ingrese un correo válido");
      return;
    }

    if (contraseña.length < 6) {
      Alert.alert("Contraseña inválida", "La contraseña debe tener mínimo 6 caracteres");
      return;
    }

    if (!numero.match(/^[0-9+ ]+$/)) {
      Alert.alert("Número inválido", "El número solo debe contener números");
      setNumero("");
      return;
    }

    Alert.alert(
      `Registrar ${nombre}`,
      "¿Deseas registrar este usuario?",
      [
        {
          text: "No",
          style: "cancel",
        },
        {
          text: "Sí",
          onPress: () => Alert.alert("Éxito", "Usuario registrado correctamente"),
        },
      ]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formulario}>
        <Text style={styles.titulo}>Formulario de Registro de Usuario</Text>

        <TextInput
          style={styles.input}
          placeholder="Ingrese su nombre"
          placeholderTextColor="black"
          autoCapitalize="words"
          value={nombre}
          onChangeText={(text) => setNombre(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Ingrese su correo electrónico"
          placeholderTextColor="black"
          keyboardType="email-address"
          autoCapitalize="none"
          value={correo}
          onChangeText={(texto) => setCorreo(texto)}
        />

        <TextInput
          style={styles.input}
          placeholder="Ingrese su contraseña mínimo de 6 caracteres"
          placeholderTextColor="black"
          secureTextEntry={true}
          value={contraseña}
          onChangeText={(texto) => setContraseña(texto)}
        />

        <TextInput
          style={styles.input}
          placeholder="Ingrese su número de teléfono"
          placeholderTextColor="black"
          keyboardType="number-pad"
          maxLength={12}
          value={numero}
          onChangeText={(texto) => setNumero(texto)}
        />

        <TextInput
          style={[styles.input, styles.bio]}
          placeholder="Cuéntanos un poco de ti (opcional)"
          placeholderTextColor="black"
          multiline={true}
          numberOfLines={4}
          maxLength={200}
          value={bio}
          onChangeText={(texto) => setBio(texto)}
        />

        <Button title="Registrar" color="red" onPress={registro} />
      </View>
    </ScrollView>
  );
}

/* Zona3: Estilos y Posicionamientos */
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },

  formulario: {
    width: "100%",
    maxWidth: 400,
    gap: 12,
  },

  titulo: {
    padding: 20,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },

  input: {
    borderWidth: 3,
    borderColor: "#e6e6e6",
    borderRadius: 5,
    padding: 10,
    fontSize: 15,
    backgroundColor: "#ffffff",
  },

  bio: {
    height: 100,
    textAlignVertical: "top",
  },
});