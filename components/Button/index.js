import react from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';


export default function Button(props) {

    return (<TouchableOpacity style={styles.button}>
        <Text style= {styles.textButton}> {props.buttonText} </Text> 
    
    </TouchableOpacity>)
}

const styles = StyleSheet.create({


    button: {

        backgroundColor: 'black',
        borderRadius: 10,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textButton: {

        fontSize: 22,
        color: '#ffff',
        textAlign: 'center',
    }

})
