import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import styles from './style';
import logo from '../../assets/LGReduzida.png';

const Minicursos = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image source={logo} style={styles.logo} />
        </View>

        <View style={styles.title}>
          <Text style={styles.titleText}>Meus Minicursos</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          <View style={styles.card}>
            <View style={styles.cardContainer}>
              <Text style={styles.cardLabel}>Título</Text>
              <Text style={styles.cardData}>
                Inteligência Artificial com APT-3
              </Text>
            </View>
            <View style={styles.cardContainer}>
              <Text style={styles.cardLabel}>Professor</Text>
              <Text style={styles.cardData}>Jairo Soares de Lima</Text>
            </View>
            <View style={styles.cardContainer}>
              <Text style={styles.cardLabel}>Sala</Text>
              <Text style={styles.cardData}>408</Text>
            </View>
            <View style={styles.cardDataHora}>
              <View style={styles.cardContainer}>
                <Text style={styles.cardLabel}>Data</Text>
                <Text style={styles.cardData}>27/07/2000</Text>
              </View>
              <View style={styles.cardContainer}>
                <Text style={styles.cardLabel}>Horário</Text>
                <Text style={styles.cardData}>19:00</Text>
              </View>
            </View>
            <View style={styles.cardContainer}>
              <Text style={styles.cardLabel}>Descrição</Text>
              <View style={styles.cardData}>
                <Text style={styles.cardData}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default Minicursos;
