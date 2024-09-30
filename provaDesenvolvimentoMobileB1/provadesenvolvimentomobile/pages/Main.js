import { Text, SafeAreaView, StyleSheet, Button, ImageBackground, View } from 'react-native';
import { Card } from 'react-native-paper';
import medicImage from '../assets/medicImage.jpg'; 

export default function MainPage({navigation}) {
  return (
    <ImageBackground style={styles.background} source={medicImage}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Atendimento Eletrônico</Text>
        <Card style={styles.card}>
          <Text style={styles.cardText}>Como podemos ajudá-lo hoje?</Text>
        </Card>
        
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button 
              title="Agendar Consulta" 
              color="#4E94BF" 
            />
          </View>
          
          <View style={styles.button}>
            <Button 
              title="Falar com um Especialista" 
              color="#4E94BF" 
             />
          </View>
          
          <View style={styles.button}>
            <Button 
              title="Visualizar Histórico" 
              color="#4E94BF" 
               />
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
    width: '100%',
    height: '100%',
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
  title: {
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  cardText: {
    fontSize: 18,
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
});
