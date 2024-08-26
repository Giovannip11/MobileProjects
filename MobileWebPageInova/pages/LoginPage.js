import React from 'react';
import { Text, SafeAreaView, StyleSheet, Button, ImageBackground, View } from 'react-native';
import { Card } from 'react-native-paper'; 
import AssetExample from '../components/AssetExample'; 

const oceanoImage = require('../assets/Oceano');

export default function LoginPage() {
  return (
    <ImageBackground style={styles.background} source={oceanoImage}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.paragraph}></Text>
        <Card>
          <AssetExample />
        </Card>
        
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button 
              title="Login" 
              color="#04B2D9" 
              onPress={() => {}} 
            />
          </View>
          
          <View style={styles.button}>
            <Button 
              title="Register" 
              color="#04B2D9" 
              onPress={() => {}} 
            />
            <Text style={styles.esqueciSenha}>
              Esqueci a senha
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    maxWidth: 400,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    marginVertical: 10, 
    width: '50%',      
  },
  esqueciSenha: {
    color: '#04B2D9',
  },
});
