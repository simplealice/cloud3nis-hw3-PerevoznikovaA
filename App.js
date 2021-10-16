import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigator from './src/navigation/index'


export default function App() {
  return (
    <PaperProvider>
      <AppNavigator/>
    </PaperProvider>
  );
}
