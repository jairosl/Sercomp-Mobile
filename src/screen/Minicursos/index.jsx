import React, { useEffect, useState } from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import styles from './style';
import logo from '../../assets/LGReduzida.png';

import api from '../../services/api';
import Loading from '../Loading';

const Minicursos = ({ route }) => {
  const [minicursos, setMinicursos] = useState(null);

  useEffect(() => {
    api
      .get(`/aluno/${route.params.id}/minicurso`)
      .then((response) => setMinicursos(response.data))
      .catch((Error) => console.log(Error));
  }, []);

  return (
    <>
      {!minicursos ? (
        <Loading />
      ) : (
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
              {minicursos.map((minicurso, i) => (
                <View key={i}>
                  <View style={styles.card}>
                    <View style={styles.cardContainer}>
                      <Text style={styles.cardLabel}>Título</Text>
                      <Text style={styles.cardData}>{minicurso.titulo}</Text>
                    </View>
                    <View style={styles.cardContainer}>
                      <Text style={styles.cardLabel}>Professor</Text>
                      <Text style={styles.cardData}>
                        {minicurso.nome_professor}
                      </Text>
                    </View>
                    <View style={styles.cardContainer}>
                      <Text style={styles.cardLabel}>Sala</Text>
                      <Text style={styles.cardData}>{minicurso.sala}</Text>
                    </View>
                    <View style={styles.cardDataHora}>
                      <View style={styles.cardContainer}>
                        <Text style={styles.cardLabel}>Data</Text>
                        <Text style={styles.cardData}>{minicurso.data}</Text>
                      </View>
                      <View style={styles.cardContainer}>
                        <Text style={styles.cardLabel}>Horário</Text>
                        <Text style={styles.cardData}>{minicurso.horario}</Text>
                      </View>
                    </View>
                    <View style={styles.cardContainer}>
                      <Text style={styles.cardLabel}>Descrição</Text>
                      <View style={styles.cardData}>
                        <Text style={styles.cardData}>
                          {minicurso.descricao_professor}
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

export default Minicursos;
