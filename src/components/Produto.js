import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Produto extends Component{
    render(){
        return(
            <View style={styles.item}>
                <Text style ={styles.title}>{this.props.produto}</Text>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'flex-start',                    
                    
                }}>
                    <View><Text>Valor: {this.props.valor} </Text></View>
                    <View><Text>Marca: {this.props.marca}</Text></View>
                      
              </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems:'flex-start',                    
                }}>
                    <View><Text>Qtdade: {this.props.qtde}</Text></View>
                    <View><Text>Ref: {this.props.ref}</Text></View>   
                    
                </View>
            </View>
        )
    }
}

    const styles = StyleSheet.create({
        container:{
            color: 'rgb(255,255,255)'
        },

        item:{
           backgroundColor: 'rgb(194,194,194)',           
           padding: 20,
           height: 200,
           width: 400,           
           marginVertical: 20,
           marginHorizontal: 40
        },

        title:{
            fontSize: 32,
        }
    })