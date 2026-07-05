import React, { useState, useEffect } from 'react';

import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ImageBackground,
    Image,
    Pressable,
    FlatList,
    ActivityIndicator,
    Alert,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';

export default function Libreria() {

   
    const [fondo, setFondo] = useState(
        require('../assets/libreria.jpg')
    );

   
    const [splash, setSplash] = useState(true);

   
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [genero, setGenero] = useState('');

    
    const [libros, setLibros] = useState([]);

    
    const [cargando, setCargando] = useState(false);

    
    useEffect(() => {
        setTimeout(() => {
            setSplash(false);
        }, 2000);
    }, []);

    /* Función para agregar un libro */
    const agregarLibro = () => {

        /* Validación de campos vacíos */
        if (!titulo || !autor || !genero) {
            Alert.alert(
                'Faltan datos',
                'Por favor complete todos los campos'
            );

            return;
        }

        /* Activar indicador de carga */
        setCargando(true);

        /* Simular espera de 4 segundos */
        setTimeout(() => {

            const nuevoLibro = {
                id: Date.now().toString(),
                titulo: titulo,
                autor: autor,
                genero: genero,
            };

            /* Agregar libro a la lista */
            setLibros([
                ...libros,
                nuevoLibro
            ]);

            /* Limpiar los TextInput */
            setTitulo('');
            setAutor('');
            setGenero('');

            /* Desactivar indicador */
            setCargando(false);

            /* Mostrar alerta */
            Alert.alert(
                'Éxito',
                'Libro guardado correctamente'
            );

        }, 4000);
    };

    /* Splash Screen */
    if (splash) {
        return (
            <View style={styles.splashContainer}>

                <Image
                    source={require('../assets/Bienvenido.jpg')}
                    resizeMode="contain"
                    style={styles.logo}
                />

                <StatusBar style="auto" />

            </View>
        );
    }

    /* Pantalla principal */
    return (
        <ImageBackground
            source={fondo}
            style={styles.fondo}
            resizeMode="cover"
        >

            <View style={styles.container}>

                <Text style={styles.titulo}>
                    Registro de Libros Leídos
                </Text>

                {/* Título del libro */}
                <TextInput
                    style={styles.input}
                    placeholder="Título del libro"
                    placeholderTextColor="gray"
                    value={titulo}
                    onChangeText={(texto) => setTitulo(texto)}
                />

                {/* Autor */}
                <TextInput
                    style={styles.input}
                    placeholder="Autor"
                    placeholderTextColor="gray"
                    value={autor}
                    onChangeText={(texto) => setAutor(texto)}
                />

                {/* Género */}
                <TextInput
                    style={styles.input}
                    placeholder="Género"
                    placeholderTextColor="gray"
                    value={genero}
                    onChangeText={(texto) => setGenero(texto)}
                />

                {/* Botón Pressable */}
                <Pressable
                    style={styles.boton}
                    onPress={agregarLibro}
                    disabled={cargando}
                >
                    <Text style={styles.textoBoton}>
                        {cargando ? 'Guardando...' : 'Agregar Libro'}
                    </Text>
                </Pressable>

                {/* ActivityIndicator */}
                {cargando && (
                    <ActivityIndicator
                        animating={true}
                        size="large"
                        color="white"
                        style={styles.spinner}
                    />
                )}

                {/* Total de libros */}
                <Text style={styles.total}>
                    Total de libros: {libros.length}
                </Text>

                {/* Lista de libros */}
                <FlatList
                    data={libros}
                    keyExtractor={(item) => item.id}
                    style={styles.lista}
                    renderItem={({ item }) => (
                        <View style={styles.tarjetaLibro}>

                            <Text style={styles.nombreLibro}>
                                {item.titulo}
                            </Text>

                            <Text style={styles.datoLibro}>
                                Autor: {item.autor}
                            </Text>

                            <Text style={styles.datoLibro}>
                                Género: {item.genero}
                            </Text>

                        </View>
                    )}
                />

            </View>

            <StatusBar style="auto" />

        </ImageBackground>
    );
}

const styles = StyleSheet.create({

    fondo: {
        flex: 1,
        width: '100%',
    },

    container: {
        flex: 1,
        padding: 20,
        paddingTop: 50,
    },

    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
    },

    input: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 12,
        marginBottom: 12,
        fontSize: 16,
    },

    boton: {
        backgroundColor: '#1E88E5',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },

    textoBoton: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },

    spinner: {
        marginVertical: 10,
    },

    total: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        marginVertical: 10,
    },

    lista: {
        flex: 1,
    },

    tarjetaLibro: {
        backgroundColor: 'rgba(255,255,255,0.85)',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
    },

    nombreLibro: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },

    datoLibro: {
        fontSize: 14,
        color: 'black',
        marginTop: 3,
    },

    splashContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: '#1E88E5',
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        width: 150,
        height: 150,
    },

});