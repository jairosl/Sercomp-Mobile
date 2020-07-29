import React from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import logo from '../../assets/LGReduzida.png';

import styles from './style';

const Info = ({ navigation, route }) => {
  function handleSubmit() {
    navigation.navigate('SignIn');
  }

  const nome = route.params.nome.split(' ');

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image source={logo} style={styles.logo} />
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>Olá {nome[0]}</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardContainer}>
            <Text style={styles.cardLabel}>Nome</Text>
            <Text style={styles.cardData}>{route.params.nome}</Text>
          </View>
          <View style={styles.cardContainer}>
            <Text style={styles.cardLabel}>Email</Text>
            <Text style={styles.cardData}>{route.params.email}</Text>
          </View>
          <View style={styles.cardContainer}>
            <Text style={styles.cardLabel}>Curso</Text>
            <Text style={styles.cardData}>{route.params.curso}</Text>
          </View>
          <View style={styles.cardContainer}>
            <Text style={styles.cardLabel}>Universidade</Text>
            <Text style={styles.cardData}>{route.params.universidade}</Text>
          </View>
          <View style={styles.cardContainer}>
            <Text style={styles.cardLabel}>Minicursos</Text>
            <Text style={styles.cardData}>2</Text>
          </View>
        </View>

        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Sair</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Info;
