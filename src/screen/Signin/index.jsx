import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import logo from '../../assets/LGSercomp.png'
import { StatusBar } from 'expo-status-bar';

const Singin = () => {

  const [ email, setEmail ] = useState('')
  const [ senha, setSenha ] = useState('')

  return (
    <>
    <StatusBar style="light" />
      <SafeAreaView>
        <View style={Style.container}>
          <View style={Style.header}>
            <Image source={logo} style={Style.imagelogo} />
          </View>

          <View style={Style.main}>
            <View style={Style.form}>
              <Text style={Style.label}>Email:</Text>
              <TextInput style={Style.input} placeholder='Digite seu Email' onChangeText={(text) => {
                setEmail(text)
              }} />
        
              <Text style={Style.label}>Senha:</Text>
              <TextInput style={Style.input} placeholder='Digite sua Senha' secureTextEntry
              autoCorrect={false} onChangeText={(senha) => {setSenha(senha)}} />
            </View>
            
            <TouchableOpacity style={Style.button}>
              <Text style={Style.buttonText}>Entrar</Text>
            </TouchableOpacity>

          </View>  
        </View>

      </SafeAreaView>
    </>
  );
}

const Style = StyleSheet.create ({
  container: {
    backgroundColor: '#5C3BA0',
    height: '100%',
  },

  header: {
    alignItems: 'center',
    marginTop: 80,
  },

  main: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 30
  },

  imagelogo: {
    width: 200,
    height: 170,
  },

  label: {
    fontSize: 22,
    letterSpacing: 0.5,
    marginVertical: 10,
    color: '#fff'
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 40,
    width: 250,
    paddingHorizontal: 10
  },

  button: {
    backgroundColor: '#BE8E00',
    height: 40,
    width: 180,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 30
  },

  buttonText: {
    color: '#fff',
    fontSize: 20,
    letterSpacing: 0.5
  }

})

export default Singin;