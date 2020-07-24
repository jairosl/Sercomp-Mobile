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

const windowWidth = Dimensions.get('window').width;

const Singin = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleSubmit() {
    console.log(email, senha);
  }

  return (
    <>
      <SafeAreaView>
        <StatusBar style="light" hidden />

        <View style={Style.container}>
          <KeyboardAvoidingView behavior="position" style={{ flex: 1 }}>
            <View style={Style.header}>
              <Image source={logo} style={Style.imagelogo} />
            </View>

            <View style={Style.main}>
              <View style={Style.form}>
                <Text style={Style.label}>Email:</Text>
                <TextInput
                  style={Style.input}
                  placeholder="Digite seu Email"
                  onChangeText={(text) => {
                    setEmail(text);
                  }}
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
                />
              </View>

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
  },

  header: {
    alignItems: 'center',
    marginTop: 60,
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
    height: 40,
    width: windowWidth - 80,
    padding: 5,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#BE8E00',
    height: 40,
    width: 180,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 30,
  },

  buttonText: {
    color: '#fff',
    fontSize: 20,
    letterSpacing: 0.5,
  },
});

export default Singin;
