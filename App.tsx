import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import Face from './src/assets/facebook.png';
import Google from './src/assets/google.png';

const App: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleEntrar= () => {
    
    console.log('Email:', email);
    console.log('Senha:', senha);
  };

  return (
    <View style={styles.container}>
      <View style={styles.Inicio}>
      <Text style={styles.Inicio}> ENTRAR </Text>
      <Text style={styles.Inicio}> CADASTRAR </Text>
      </View>


    <View style={styles.containerDois}>
      <Text style={styles.text} >Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
     <Text style={styles.text} >Senha</Text>
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      
<Text style={styles.label}>Esqueceu sua senha?</Text>
      </View>
     

<TouchableOpacity style={styles.buttonRede}>
 <Image source ={Face} style={styles.imageFace} />
<Text>Entrar com Facebook</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.buttonRede}>
 <Image source ={Google} style={styles.imageFace} />
<Text>Entrar com Google</Text>
</TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleEntrar}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
