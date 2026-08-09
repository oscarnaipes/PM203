import React, { useState } from "react";

import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
  Platform,
} from "react-native";

import {
  useLocalSearchParams,
  useRouter,
} from "expo-router";

import { API_BASE_URL } from "../config/api";


export default function EditarUsuarioScreen() {

  const {
    id,
    nombre: nombreInicial,
    edad: edadInicial,
  } = useLocalSearchParams();


  const router = useRouter();


  const [nombre, setNombre] = useState(
    nombreInicial || ""
  );


  const [edad, setEdad] = useState(
    String(edadInicial || "")
  );


  const [cargando, setCargando] = useState(false);


  // Dirección de tu API
  const API_URL = API_BASE_URL;


  // Mostrar mensajes
  const mostrarMensaje = (titulo, mensaje) => {

    if (Platform.OS === "web") {

      window.alert(
        `${titulo}\n\n${mensaje}`
      );

    } else {

      Alert.alert(
        titulo,
        mensaje
      );

    }

  };


  // Actualizar usuario
  const actualizarUsuario = async () => {

    // Validar campos
    if (
      nombre.trim() === "" ||
      edad.trim() === ""
    ) {

      mostrarMensaje(
        "Campos vacíos",
        "Todos los campos son obligatorios."
      );

      return;

    }


    // Convertir edad
    const edadNumero = Number(edad);


    // Validar edad
    if (
      isNaN(edadNumero) ||
      edadNumero < 0 ||
      edadNumero > 120
    ) {

      mostrarMensaje(
        "Edad inválida",
        "La edad debe ser un número entre 0 y 120."
      );

      return;

    }


    try {

      setCargando(true);


      console.log(
        "Actualizando usuario:",
        id
      );


      const respuesta = await fetch(
        `${API_URL}/v1/usuarios/${id}`,
        {

          method: "PUT",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({

            nombre: nombre.trim(),

            edad: edadNumero,

          }),

        }
      );


      const texto =
        await respuesta.text();


      console.log(
        "PUT Status:",
        respuesta.status
      );


      console.log(
        "PUT Respuesta:",
        texto
      );


      if (!respuesta.ok) {

        throw new Error(
          `Error ${respuesta.status}: ${texto}`
        );

      }


      mostrarMensaje(
        "Éxito",
        "Se actualizó el usuario correctamente."
      );


      router.replace(
        "/(tabs)/consulta"
      );


    } catch (error) {

      console.log(
        "Error API:",
        error
      );


      mostrarMensaje(
        "Error",
        "No fue posible actualizar el usuario."
      );


    } finally {

      setCargando(false);

    }

  };


  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.card}>

        <Text style={styles.titulo}>
          Editar Usuario
        </Text>


        {/* NOMBRE */}

        <TextInput
          style={styles.input}
          placeholder="Nombre del usuario"
          value={nombre}
          onChangeText={setNombre}
          editable={!cargando}
        />


        {/* EDAD */}

        <TextInput
          style={styles.input}
          placeholder="Edad del usuario"
          keyboardType="numeric"
          value={edad}
          onChangeText={setEdad}
          editable={!cargando}
        />


        {/* GUARDAR */}

        <Pressable
          style={styles.boton}
          onPress={actualizarUsuario}
          disabled={cargando}
        >

          <Text style={styles.textoBoton}>

            {cargando
              ? "Guardando..."
              : "Guardar cambios"}

          </Text>

        </Pressable>

      </View>

    </SafeAreaView>

  );

}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    padding: 20,
    justifyContent: "center",
  },


  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    padding: 25,
    borderRadius: 10,

    elevation: 5,

    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 5,

    shadowOffset: {
      width: 0,
      height: 3,
    },
  },


  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 20,
    textAlign: "center",
  },


  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 18,
    backgroundColor: "#F9FAFB",
    fontSize: 16,
  },


  boton: {
    backgroundColor: "#16A34A",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },


  textoBoton: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
  },

});