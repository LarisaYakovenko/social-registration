import { useFonts } from 'expo-font';
import React from 'react';
import 'react-native-gesture-handler';

import AppNavigation from './components/AppNavigation';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return <AppNavigation />;
}
