import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class ImagemGenerica extends Component{
    render(){
        let logo ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj8P1-ikDouBNribtWcdM-2qWbzxV7P_rh-g&usqp=CAU';
        return(
            <View style={styles.container}>
               <Image
               source = {{uri: logo }}
               style = {{height: this.props.altura, width: this.props.largura}}                             
               />
            </View>
        )
    }
}

const styles = StyleSheet.create({
container:{
    margin: 20,   
    
},

})

