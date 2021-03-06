import React, {Component}from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ImagemGenerica from './src/components/ImagemGenerica';
import TituloGenerico from './src/components/TituloGenerico';
import TextoGenerico from './src/components/TextoGenerico';
import Produto from './src/components/Produto';

export default class App extends Component{

constructor (props){
  super(props);
  this.state = {
    feed: [
      {
        id: 1,
        produto: 'Arroz',
        marca: 'Fufu Legal',
        valor: 'R$15,90',
        qtde: 23,
        ref: 1023
      },

      {
        id: 2,
        produto: 'Farinha',
        marca: 'D Rosa',
        valor: 'R$4,50',
        qtde: 83,
        ref: 1048
      },

      {
        id: 3,
        produto: 'Detergente',
        marca: 'Ype',
        valor: 'R$5,90',
        qtde: 323,
        ref: 903
      },

      {
        id: 4,
        produto: 'Feijão',
        marca: 'Fufu Legal',
        valor: 'R$12,90',
        qtde: 253,
        ref: 3452
      },

      {
        id: 5,
        produto: 'Bolacha Agua & Sal',
        marca: 'Mabel',
        valor: 'R$3,40',
        qtde: 123,
        ref: 4323
      },

      {
        id: 6,
        produto: 'Oleo Vegetal',
        marca: 'ABC',
        valor: 'R$10,45',
        qtde: 235,
        ref: 100
      },

      {
        id: 7,
        produto: 'Açucar',
        marca: 'Delta',
        valor: 'R$11,30',
        qtde: 443,
        ref: 1045
      },
   ]
  }
}

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
          <Text style ={{color: 'rgb(29,161,242)', fontSize: 32}}>
          <TituloGenerico                                
          meuTitulo = {<b>Lista de Produtos</b>}       
          />
          </Text>
          <FlatList
        data = {this.state.feed}
        keyExtractor = {(item) => item.id}
        renderItem = {({item}) =>
        <Produto
          produto = {item.produto}
          marca = {item.marca}  
          qtde = {item.qtde} 
          valor = {item.valor} 
          ref = {item.ref}
        />      
      }        
        />
        
        </View>

        <View style={styles.footer}>
          <Text style={{ color: 'rgb(255,255,255)', fontSize: 18, textAlign: 'center',
                         marginTop: 20
                        }}>
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
    backgroundColor: 'rgb(255,255,255)',   
   // flexDirection: 'row',   
  },

  header:{
    flex: 1,
    backgroundColor: 'rgb(61,138,247)',     
  },

  body:{
    flex: 8,
    //backgroundColor: 'white',
  }, 

  footer:{
    flex: 1, 
    backgroundColor: 'rgb(96,96,96)',
    //color: '#fOfc'
  }
})
