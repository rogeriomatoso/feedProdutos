import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class TituloGenerico extends Component{
    render(){
       
        return(
            <View style={styles.container}>
                <Text>
                    {this.props.meuTitulo}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        margin: 40,                      
    },    
    
})