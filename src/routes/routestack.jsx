import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screen/Signin'

const Stack = createStackNavigator();

const routes = () => {    
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default routes;