import react from 'react';
import { StyleSheet, TextInput, View, Text} from 'react-native';
import Button from '../../../components/Button';


export default function Login() {

    return (
        <View>
                <Text style={styles.Titulo}>Faça Seu Login!</Text>

            <TextInput placeholder=" E-mail" style={styles.InputUsuario}/> 

            <TextInput placeholder="Senha" style={styles.InputUsuario}/>

            <Button buttonText= "Cadastrar" /> 
        </View>



    );
}

const styles = StyleSheet.create( {

    InputUsuario: {

      
        borderWidth: 1,
        width: 200,
        height: 40,
        marginBottom: 7,
        borderColor: 'black',
        borderRadius: 10,

    },

    Titulo: {

        textAlign: 'center',
        marginBottom: 20,
        justifyContent: 'center'
        
    },




})
