import React, { useState, useCallback } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  StyleSheet,
  Modal,
  Platform,
  Alert,
} from "react-native";

import {
  useLocalSearchParams,
  useRouter,
  useFocusEffect,
} from "expo-router";


export default function DetalleUsuarioScreen() {

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

  const [modalVisible, setModalVisible] = useState(false);

  const [cargando, setCargando] = useState(false);


  // Dirección de tu API
  const API_URL =
    Platform.OS === "web"
      ? "http://localhost:5000"
      : "http://172.20.10.4:5000";


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


  // Obtener nuevamente los usuarios
  const obtenerUsuario = async () => {

    try {

      const respuesta = await fetch(
        `${API_URL}/v1/usuarios/`
      );


      if (!respuesta.ok) {

        throw new Error(
          `Error HTTP: ${respuesta.status}`
        );

      }


      const datos = await respuesta.json();

      console.log(
        "Respuesta API:",
        datos
      );


      const encontrado =
        datos.usuarios?.find(
          (usuario) =>
            String(usuario.id) === String(id)
        );


      if (encontrado) {

        setNombre(
          encontrado.nombre
        );

        setEdad(
          String(encontrado.edad)
        );

      }

    } catch (error) {

      console.log(
        "Error al obtener usuario:",
        error
      );

    }

  };


  // Actualizar información cuando regresamos
  useFocusEffect(
    useCallback(() => {

      obtenerUsuario();

    }, [id])
  );


  // Ir a editar
  const irEditar = () => {

    router.push({
      pathname: "/editar",

      params: {
        id: String(id),
        nombre: nombre,
        edad: String(edad),
      },

    });

  };


  // Eliminar usuario
  const ejecutarEliminacion = async () => {

    try {

      setCargando(true);


      const respuesta = await fetch(
        `${API_URL}/v1/usuarios/${id}`,
        {
          method: "DELETE",

          headers: {
            "Content-Type": "application/json",
          },
        }
      );


      const texto =
        await respuesta.text();


      console.log(
        "DELETE Status:",
        respuesta.status
      );

      console.log(
        "DELETE Respuesta:",
        texto
      );


      if (!respuesta.ok) {

        throw new Error(
          `Error ${respuesta.status}: ${texto}`
        );

      }


      setModalVisible(false);


      mostrarMensaje(
        "Éxito",
        "Usuario eliminado correctamente."
      );


      router.replace(
        "/(tabs)/consulta"
      );


    } catch (error) {

      console.log(
        "Error al eliminar:",
        error
      );


      mostrarMensaje(
        "Error",
        "No fue posible eliminar el usuario."
      );


    } finally {

      setCargando(false);

    }

  };


  return (

    <SafeAreaView style={styles.container}>

      <Text style={styles.titulo}>
        Detalles del Usuario
      </Text>


      <View style={styles.card}>

        <Text style={styles.label}>
          Nombre
        </Text>

        <Text style={styles.valor}>
          {nombre}
        </Text>


        <View style={styles.linea} />


        <Text style={styles.label}>
          Edad
        </Text>

        <Text style={styles.valor}>
          {edad} años
        </Text>

      </View>


      {/* BOTÓN ACTUALIZAR */}

      <Pressable
        style={styles.botonActualizar}
        onPress={irEditar}
      >

        <Text style={styles.textoBoton}>
          Actualizar
        </Text>

      </Pressable>


      {/* BOTÓN ELIMINAR */}

      <Pressable
        style={styles.botonEliminar}
        onPress={() => setModalVisible(true)}
      >

        <Text style={styles.textoBoton}>
          Eliminar
        </Text>

      </Pressable>


      {/* MODAL */}

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() =>
          setModalVisible(false)
        }
      >

        <View style={styles.overlay}>

          <View style={styles.modalCard}>

            <Text style={styles.modalTitulo}>
              Confirmar eliminación
            </Text>


            <Text style={styles.modalMensaje}>
              ¿Estás seguro de que deseas
              eliminar al usuario {nombre}?
            </Text>


            <View style={styles.modalBotones}>

              {/* CANCELAR */}

              <Pressable
                style={styles.botonCancelar}
                onPress={() =>
                  setModalVisible(false)
                }
                disabled={cargando}
              >

                <Text style={styles.textoCancelar}>
                  Cancelar
                </Text>

              </Pressable>


              {/* CONFIRMAR */}

              <Pressable
                style={styles.botonConfirmar}
                onPress={ejecutarEliminacion}
                disabled={cargando}
              >

                <Text style={styles.textoBoton}>
                  {cargando
                    ? "Eliminando..."
                    : "Sí, eliminar"}
                </Text>

              </Pressable>

            </View>

          </View>

        </View>

      </Modal>

    </SafeAreaView>

  );

}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    paddingHorizontal: 32,
    paddingTop: 24,
  },


  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 20,
    paddingHorizontal: 7,
  },


  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 18,
    marginBottom: 20,
  },


  label: {
    fontSize: 13,
    color: "#9CA3AF",
    marginBottom: 2,
  },


  valor: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1F2937",
  },


  linea: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 12,
  },


  botonActualizar: {
    backgroundColor: "#2563EB",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 12,
    marginHorizontal: 8,
  },


  botonEliminar: {
    backgroundColor: "#DC2626",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 8,
  },


  textoBoton: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },


  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },


  modalCard: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 22,
    alignItems: "center",
  },


  modalTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 10,
  },


  modalMensaje: {
    fontSize: 14,
    color: "#4B5563",
    textAlign: "center",
    marginBottom: 20,
  },


  modalBotones: {
    flexDirection: "row",
    width: "100%",
  },


  botonCancelar: {
    flex: 1,
    backgroundColor: "#E5E7EB",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginRight: 5,
  },


  botonConfirmar: {
    flex: 1,
    backgroundColor: "#DC2626",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginLeft: 5,
  },


  textoCancelar: {
    color: "#1F2937",
    fontWeight: "bold",
  },

});