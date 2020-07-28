import React from 'react';
import { View, Image, Text, ActivityIndicator } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import styles from './style';
import logo from '../../assets/LGSercomp.png';

const Loading = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#fff" animating />
        <Text style={styles.loadingText}>Carregando</Text>
      </View>
      <View style={styles.Footer}>
        <FontAwesome5 name="copyright" size={20} color="#fff" />
        <Text style={styles.FooterText}>2020 V1.0.1</Text>
      </View>
    </View>
  );
};

export default Loading;
