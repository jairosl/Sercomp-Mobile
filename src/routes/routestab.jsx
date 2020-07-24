import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import Info from '../screen/Info';

const Tab = createBottomTabNavigator();

export default function RoutesTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
        activeBackgroundColor: '#5C3BA0',
        inactiveBackgroundColor: '#5C3BA0',
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
        component={Info}
        options={{
          tabBarLabel: 'Seus Minicursos',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="teach" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="palestras"
        component={Info}
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
