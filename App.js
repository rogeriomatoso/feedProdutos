import React, {Component}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImagemGenerica from './src/components/ImagemGenerica';
import TituloGenerico from './src/components/TituloGenerico';
import TextoGenerico from './src/components/TextoGenerico';

export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>

        <View style={styles.header}>
        <ImagemGenerica
        altura={50}
        largura={80}                
        />
        </View>

        <View style={styles.body}>
          <Text style ={{color: '#1DA1F2', fontSize: 32}}>
          <TituloGenerico                                
          meuTitulo = {<b>Lista de Produtos</b>}       
          />
          </Text>
          
        
        </View>

        <View style={styles.footer}>
          <Text style={{ color: 'white', fontSize: 18, textAlign: 'center',
                         marginTop: 30 }}>
          <TextoGenerico
          meuTexto = {'Products Pão de Açucar - 2021'}          
          />
          </Text>
        </View>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFF',   
   // flexDirection: 'row',   
  },
  header:{
    flex: 1.1,
    backgroundColor: '#3D8AF7',
    
    
  },
  body:{
    flex: 8,
    //backgroundColor: 'white',
  },  
  footer:{
    flex: 1, 
    backgroundColor: '#606060',
    color: '#FFFFF'
  }
})
