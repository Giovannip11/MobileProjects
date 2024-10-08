import { Text, SafeAreaView, StyleSheet, Button, ImageBackground, View } from 'react-native';
import { Card } from 'react-native-paper';
import AssetExample from '../components/AssetExample';
import medicImage from '../assets/medicImage.jpg'; 

export default function LoginPage({ navigation}) {
  return (
    <ImageBackground style={styles.background} source={medicImage}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.paragraph}></Text>
        <Card>
          <AssetExample />
        </Card>
        
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button 
              title="Login" 
              color="#4E94BF" 
              onPress={() => navigation.navigate('Main')} 
            />
          </View>
          
          <View style={styles.button}>
            <Button 
              title="Register" 
              color="#4E94BF" 
              onPress={() => navigation.navigate('Register')} 
            />
          </View>
          
          <View style={styles.button}>
            <Button 
              title="Esqueci a Senha" 
              color="#4E94BF" 
              onPress={() => navigation.navigate('ForgetPassword')} 
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
});
