import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Button,View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './pages/LoginPage';
import ForgetPassword from './pages/ForgetPassword';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';

export default function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      {showLogin ? <LoginPage /> : <ForgetPassword />}
      <View style ={styles.button}>
      <Button 
        title={showLogin ? 'Esqueci a Senha' : 'Ir para Login'}
         color ="#021E73"
        onPress={() => setShowLogin(!showLogin)}
      />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
});
