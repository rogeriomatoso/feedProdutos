import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Produto extends Component{
    render(){
        return(
            <View style={styles.item}>
                <Text style ={styles.title}>{this.props.produto}</Text>
                <View>
                    <Text>Valor: {this.props.valor} </Text>
                    <Text>Marca: {this.props.marca}</Text>
                    <View>
                        <Text>{this.props.desconto}</Text>
                    </View>                      
              </View>

                <View>
                    <Text>Qtdade: {this.props.qtde}</Text>
                    <Text>Ref: {this.props.id}</Text>
                    <View>
                        <Text>{this.props.promo}</Text>
                    </View>                     
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