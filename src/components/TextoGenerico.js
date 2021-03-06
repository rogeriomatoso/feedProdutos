import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class TextoGenerico extends Component{
    render(){
       
        return(
            <View style={styles.container}>
                <Text>
                    {this.props.meuTexto}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{         
        //alignItems: 'center', 
        marginHorizontal: 'center',
        marginVertical: 'center'          
    },    
    
})