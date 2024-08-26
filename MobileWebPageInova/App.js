import React from 'react';
import { Text, SafeAreaView, StyleSheet, Button, ImageBackground, View } from 'react-native';
import { Card } from 'react-native-paper';
import AssetExample from './components/AssetExample';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgetPassword from './pages/ForgetPassword';
import MainPage from './pages/MainPage';

const oceanoImage = require('./assets/Oceano');

export default function App() {
  return (
    <LoginPage/>,
    <ForgetPassword/>
  );
}

