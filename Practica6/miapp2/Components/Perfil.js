/*Pefil usando desestructuración, es decir, se le pasan los datos desde el componente padre (App.js)
 y se muestran en el componente hijo (Perfil.js) a través de las props. 
 En este caso, se le pasan el nombre, carrera, materia y cuatrimestre del estudiante.*/

import{View, Text, Button, StyleSheet} from 'react-native'
import React, {useState} from 'react'

export const Perfil = ({nombre, carrera, materia, cuatri,estiloExt}) => {

    const [mostrar, setMostrar] = useState(false);
    return (
        <View style={[styles.tarjeta, estiloExt]}>
            <Text style={styles.nombre}>{nombre}</Text>

            {/*Renderizado condicional, es decir, se muestra un botón para mostrar u ocultar los datos del estudiante.*/}
            { mostrar && 
                <>

                    <Text style={styles.carrera}>{carrera}</Text>
                    <Text style={styles.otroTexto}>{materia}</Text>
                    <Text style={styles.otroTexto}>{cuatri}</Text>
                </>
            }
            <Button title="Mostrar perfil" onPress={() => setMostrar(!mostrar)} />
        </View>
    );
};

const styles = StyleSheet.create({
    nombre: {
        fontSize: 24,
        fontWeight: 600,
        textTransform: 'uppercase',
    },
    carrera: {
        fontSize: 18,
        color: 'blue',
        fontFamily: 'Roboto',
    },
    otroTexto: {
        fontSize: 12,
        fontFamily: 'Courier',
        fontStyle: 'italic',
    },
    tarjeta: {
        borderWidth: 2,
        padding: 25,
        margin: 15,
    },
})



/*Pefil usando props, es decir, se le pasan los datos desde el componente padre
 (App.js) y se muestran en el componente hijo (Perfil.js) a través de las props. 
 En este caso, se le pasan el nombre, carrera, materia y cuatrimestre del estudiante.*/

/* import{View, Text} from 'react-native'

export const Perfil = (props) => {
    return (
        <View>
            <Text>{props.nombre}</Text>
            <Text>{props.carrera}</Text>
            <Text>{props.materia}</Text>
            <Text>{props.cuatri}</Text>
        </View>
    );
}; */