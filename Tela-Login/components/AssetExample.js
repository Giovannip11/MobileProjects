import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, SafeAreaView, Image } from 'react-native';

export default function AssetExample() {
  const [text, onChangeText] = useState('');
  const [number, onChangeNumber] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('../assets/react-native-1.png')} />
      <Text style={styles.label}></Text>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeText}
        value={text}
        placeholder="Username"
      />
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeNumber}
        value={number}
        keyboardType="numeric"
        placeholder="Password"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '100%',  // Ocupa 100% da largura do container principal
  },
  logo: {
    width: 100,  // Ajusta o tamanho do logo
    height: 100,
    marginBottom: 20,  // Adiciona espaço abaixo do logo
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',  // Ajusta a largura dos campos de entrada para 80% do container
    paddingHorizontal: 10,
    marginBottom: 20,  // Adiciona espaçamento entre os inputs
    borderRadius: 5,   // Adiciona bordas arredondadas nos inputs
  },
});
