import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { API_BASE_URL } from "../config/api";

export default function ConsultaUsuariosScreen() {

  const router = useRouter();
  const [usuarios, setUsuarios] = useState([]);

  const API_URL = `${API_BASE_URL}/v1/usuarios/`;

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  const obtenerUsuarios = async () => {
    try {
      const respuesta = await fetch(API_URL);
      const datos = await respuesta.json();

      console.log("Respuesta API:", datos);

      setUsuarios(datos.usuarios || datos);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const verDetalles = (usuario) => {
    router.push({
      pathname: "/detalle",
      params: {
        id: usuario.id,
        nombre: usuario.nombre,
        edad: usuario.edad,
      },
    });
  };

  const renderTarjeta = ({ item }) => (
    <View style={styles.card}>

      <Text style={styles.nombre}>
        {item.nombre}
      </Text>

      <View style={styles.linea} />

      <Text style={styles.info}>
        Edad: {item.edad} años
      </Text>

      <Pressable
        style={styles.boton}
        onPress={() => verDetalles(item)}
      >
        <Text style={styles.textoBoton}>
          Ver Detalles
        </Text>
      </Pressable>

    </View>
  );

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.titulo}>
        Lista de Usuarios
      </Text>

      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTarjeta}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1F2937",
    textAlign: "center",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 18,
    marginBottom: 15,

    elevation: 4,

    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  nombre: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2563EB",
  },

  linea: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 10,
  },

  info: {
    fontSize: 16,
    color: "#4B5563",
  },

  boton: {
    marginTop: 15,
    backgroundColor: "#2563EB",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignSelf: "flex-start",
  },

  textoBoton: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15,
  },

});