import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RootNavigator from './src/navigation/RootNavigator';

import { MovieProvider } from './src/context/MovieContext';

export default function App() {
  return (
    <MovieProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </MovieProvider>
  );
}