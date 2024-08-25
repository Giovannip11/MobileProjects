import { Text, SafeAreaView, StyleSheet, Button, ImageBackground } from 'react-native';
import { Card } from 'react-native-paper';
import AssetExample from './components/AssetExample';

// Importar a imagem de fundo
const oceanoImage = require('./assets/Oceano');

export default function App() {
  return (
    <ImageBackground style={styles.background} source={oceanoImage}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.paragraph}></Text>
        <Card>
          <AssetExample />
        </Card>
        
        <Button 
          title="Login" 
          color="#04B2D9" 
          onPress={() => {}} 
        />
        
        <Button 
          title="Register" 
          color="#04B2D9" 
          onPress={() => {}} 
          style={styles.button}
        />
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
    width: '80%',  // Ajusta a largura do container
    maxWidth: 400, // Limite máximo de largura
    padding: 20,   // Espaçamento interno do container
    backgroundColor: '#fff',
    borderRadius: 10, // Bordas arredondadas
    alignItems: 'center', // Centraliza os itens horizontalmente
    justifyContent: 'center', // Centraliza os itens verticalmente
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    marginTop: 10, // Espaçamento entre os botões
  },
});
