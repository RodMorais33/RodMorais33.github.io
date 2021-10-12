import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import index from './pages/Home';
import Q1 from './pages/Question1';
import Q2 from './pages/Question2';
import Q3 from './pages/Question3';
import Resp from './pages/Result';
import indexHOME from './pages/Home';


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name= "home" component={index} options={{ title: 'Vamos lá?' }} />
        <Stack.Screen name= "Q1" component={Q1} options={{ title: 'PRIMEIRA PERGUNTA' }} />
        <Stack.Screen name= "Q2" component={Q2} options={{title: 'SEGUNDA PERGUNTA' }} />
        <Stack.Screen name= "Q3" component={Q3} options={{title: 'TERCEIRA PERGUNTA'}} />
        <Stack.Screen name= "Resp" component={Resp} options={{title: 'RESPOSTAS'}} />
        <Stack.Screen name= "indexHOME" component={index} />
      </Stack.Navigator>
    </NavigationContainer>
  )};