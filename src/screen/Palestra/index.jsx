import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import style from './style';
import logo from '../../assets/LGReduzida.png';

const Palestra = () => {
  return (
    <View style={style.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <Image source={logo} style={style.logo} />
        </View>

        <View style={style.title}>
          <Text style={style.titleText}>Palestras</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          <View style={style.card}>
            <View style={style.cardContainer}>
              <Text style={style.cardLabel}>Título</Text>
              <Text style={style.cardData}>
                Desenvolvimento WEB com React e React-Native
              </Text>
            </View>
            <View style={style.cardContainer}>
              <Text style={style.cardLabel}>Palestrante</Text>
              <Text style={style.cardData}>Jairo Soares de Lima</Text>
            </View>
            <View style={style.cardContainer}>
              <Text style={style.cardLabel}>Sala</Text>
              <Text style={style.cardData}>202</Text>
            </View>
            <View style={style.cardDataHora}>
              <View style={style.cardContainer}>
                <Text style={style.cardLabel}>Data</Text>
                <Text style={style.cardData}>28/07/2020</Text>
              </View>
              <View style={style.cardContainer}>
                <Text style={style.cardLabel}>Horário</Text>
                <Text style={style.cardData}>20:30</Text>
              </View>
            </View>
            <View style={style.cardContainer}>
              <Text style={style.cardLabel}>Descrição</Text>
              <View style={style.cardData}>
                <Text style={style.cardData}>
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

export default Palestra;
