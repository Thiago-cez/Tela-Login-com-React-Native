import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
<KeyboardAvoidingView style={styles.background}>
  <View style={styles.containerLogo}>
    <Image 
        style={styles.img}
        source={require('./src/assets/logo_trad1.png')}
    />
  </View>

    <View style={styles.container}>
      <TextInput 
      style={styles.input}
      placeholder="Email"
      autoCorrect={false}
      onChangeText={()=>{}}
    />

      <TextInput 
      style={styles.input}
      placeholder="Senha"
      autoCorrect={false}
      onChangeText={()=> {}}
    />
      
      <TouchableOpacity style={styles.btnSubmit}>
         <Text style={styles.submitText}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnRegister}>
         <Text style={styles.registerText}>Criar Conta</Text>
      </TouchableOpacity>

     </View>
</KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  
  img: {
       marginTop:'20%',
       maxWidth: 280,
       maxHeight:60
  },

  background:{
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#191237'


  },

  containerLogo: {
    flex: 1,
     justifyContent: 'center'
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    paddingBottom: 185,
  },

   input: {
     backgroundColor:'#fff',
     width: '90%',
     marginBottom: 15,
     color: '#222',
     fontSize: 17,
     borderRadius: 7,
     padding:10,
   },

   btnSubmit: {
     marginTop: '5%',
     backgroundColor: '#39AA87',
     width:'90%',
     height:45,
     alignItems: 'center',
     justifyContent: 'center',
     borderRadius:7
   },
   

   submitText: {
     color: '#fff',
     fontSize:18
   },

   btnRegister: {
     marginTop: 13,
   },

   registerText: {
     color:'#fff'
   }
});