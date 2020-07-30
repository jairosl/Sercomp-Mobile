import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import logo from '../../assets/LGSercomp.png';
import api from '../../services/api';

const windowWidth = Dimensions.get('window').width;

const Singin = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function handleSubmit() {
    try {
      const { data } = await api.post('/aluno', { email, senha });
      navigation.navigate('Main', { dados: data });
    } catch (Error) {
      console.log(Error.response.data.error);
    }
  }

  return (
    <>
      <SafeAreaView>
        <StatusBar style="light" hidden />

        <View style={Style.container}>
          <View style={Style.header}>
            <Image source={logo} style={Style.imagelogo} />
          </View>
          <KeyboardAvoidingView
            behavior="position"
            style={{ marginBottom: 40 }}
          >
            <View style={Style.main}>
              <View style={Style.form}>
                <Text style={Style.label}>Email:</Text>
                <TextInput
                  style={Style.input}
                  placeholder="Digite seu Email"
                  onChangeText={(text) => {
                    setEmail(text);
                  }}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCompleteType="email"
                />

                <Text style={Style.label}>Senha:</Text>
                <TextInput
                  style={Style.input}
                  placeholder="Digite sua Senha"
                  secureTextEntry
                  autoCorrect={false}
                  onChangeText={(text) => {
                    setSenha(text);
                  }}
                  autoCapitalize="none"
                  autoCompleteType="password"
                  returnKeyType="send"
                />
              </View>
            </View>
            <View style={Style.ContainerButton}>
              <TouchableOpacity style={Style.button} onPress={handleSubmit}>
                <Text style={Style.buttonText}>Entrar</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </SafeAreaView>
    </>
  );
};

const Style = StyleSheet.create({
  container: {
    backgroundColor: '#5C3BA0',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  header: {
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 20,
  },

  main: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 30,
  },

  imagelogo: {
    width: 220,
    height: 190,
  },

  label: {
    fontSize: 22,
    letterSpacing: 0.5,
    marginVertical: 10,
    color: '#fff',
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 45,
    width: windowWidth - 80,
    padding: 10,
    fontSize: 18,
  },

  ContainerButton: {
    width: '100%',
    alignItems: 'flex-end',
  },

  button: {
    backgroundColor: '#BE8E00',
    height: 40,
    width: 140,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 40,
  },

  buttonText: {
    color: '#fff',
    fontSize: 20,
    letterSpacing: 0.5,
  },
});

export default Singin;
