import React from 'react'
import { StatusBar } from 'react-native'
import AppNavigation from './App/Navigation/AppNavigation'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <AppNavigation />
    </>
  );
};

export default App
