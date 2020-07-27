import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import 'react-native-gesture-handler';

import Info from '../screen/Info';
import Minicursos from '../screen/Minicursos';
import Palestras from '../screen/Palestra';

const Tab = createBottomTabNavigator();

export default function RoutesTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#5C3BA0',
          height: 60,
          paddingBottom: 7,
          fontSize: 10,
        },
        labelStyle: { fontSize: 11 },
      }}
    >
      <Tab.Screen
        name="Informacoes"
        component={Info}
        options={{
          tabBarLabel: 'Informações',
          tabBarIcon: ({ color, size }) => (
            <Feather name="info" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="minicurso"
        component={Minicursos}
        options={{
          tabBarLabel: 'Meus Minicursos',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="teach" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="palestras"
        component={Palestras}
        options={{
          tabBarLabel: 'Palestras',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="team" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
