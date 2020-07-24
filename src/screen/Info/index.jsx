import React from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import logo from '../../assets/LGReduzida.png';

import styles from './style';

const Info = ({ navigation }) => {
  function handleSubmit() {
    navigation.navigate('SignIn');
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image source={logo} style={styles.logo} />
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>Olá Usuário</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardContainer}>
            <Text style={styles.cardLabel}>Nome</Text>
            <Text style={styles.cardData}>Márcio Bizerra Wanderley Filho</Text>
          </View>
          <View style={styles.cardContainer}>
            <Text style={styles.cardLabel}>Email</Text>
            <Text style={styles.cardData}>marciobwfilho98@gmail.com</Text>
          </View>
          <View style={styles.cardContainer}>
            <Text style={styles.cardLabel}>Curso</Text>
            <Text style={styles.cardData}>Ciência da Computação</Text>
          </View>
          <View style={styles.cardContainer}>
            <Text style={styles.cardLabel}>Universidade</Text>
            <Text style={styles.cardData}>UEPB</Text>
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
