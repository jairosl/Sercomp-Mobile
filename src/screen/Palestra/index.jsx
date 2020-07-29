import React, { useState, useEffect } from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import style from './style';
import logo from '../../assets/LGReduzida.png';

import api from '../../services/api';
import Loading from '../Loading';

const Palestra = () => {
  const [palestras, setPalestras] = useState(null);

  useEffect(() => {
    api.get('/aluno/palestra').then((response) => setPalestras(response.data));
  }, []);

  return (
    <>
      {!palestras ? (
        <Loading />
      ) : (
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
              {palestras.map((palestra, i) => (
                <View key={i}>
                  <View style={style.card}>
                    <View style={style.cardContainer}>
                      <Text style={style.cardLabel}>Título</Text>
                      <Text style={style.cardData}>{palestra.titulo}</Text>
                    </View>
                    <View style={style.cardContainer}>
                      <Text style={style.cardLabel}>Palestrante</Text>
                      <Text style={style.cardData}>
                        {palestra.nome_palestrante}
                      </Text>
                    </View>
                    <View style={style.cardContainer}>
                      <Text style={style.cardLabel}>Sala</Text>
                      <Text style={style.cardData}>{palestra.sala}</Text>
                    </View>
                    <View style={style.cardDataHora}>
                      <View style={style.cardContainer}>
                        <Text style={style.cardLabel}>Data</Text>
                        <Text style={style.cardData}>{palestra.data}</Text>
                      </View>
                      <View style={style.cardContainer}>
                        <Text style={style.cardLabel}>Horário</Text>
                        <Text style={style.cardData}>{palestra.horario}</Text>
                      </View>
                    </View>
                    <View style={style.cardContainer}>
                      <Text style={style.cardLabel}>Descrição</Text>
                      <View style={style.cardData}>
                        <Text style={style.cardData}>
                          {palestra.descricao_palestrante}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              ))}
            </ScrollView>
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default Palestra;
