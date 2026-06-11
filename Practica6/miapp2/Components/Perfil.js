/*Pefil usando desestructuración, es decir, se le pasan los datos desde el componente padre (App.js)
 y se muestran en el componente hijo (Perfil.js) a través de las props. 
 En este caso, se le pasan el nombre, carrera, materia y cuatrimestre del estudiante.*/

import{View, Text, Button} from 'react-native'
import React, {useState} from 'react'

export const Perfil = ({nombre, carrera, materia, cuatri}) => {

    const [mostrar, setMostrar] = useState(false);
    return (
        <View>
            <Text>{nombre}</Text>

            {/*Renderizado condicional, es decir, se muestra un botón para mostrar u ocultar los datos del estudiante.*/}
            { mostrar && 
                <>

                    <Text>{carrera}</Text>
                    <Text>{materia}</Text>
                    <Text>{cuatri}</Text>
                </>
            }
            <Button title="Mostrar perfil" onPress={() => setMostrar(!mostrar)} />
        </View>
    );
};


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