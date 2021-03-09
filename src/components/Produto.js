import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Produto extends Component{
    render(){
        return(

            <View style={styles.item}>        
                <Text style = {styles.title,{fontWeight: 'bold', fontSize: 30, color:'#FFF'}}>{this.props.produto}</Text>

             <View style={{flexDirection:'row', color: '#FFF'}}>
                    <View style={{ marginRight: 35, alignItems:'flex-start'}}>
                        <Text style={{color: '#FFF'}}>Valor: {this.props.valor}</Text>
                        <Text style={{color: '#FFF'}}>Qtdade: {this.props.qtde}</Text>
                        <Text style={{color: '#FFF', backgroundColor:'#72BB53'}}> {this.props.desconto} de Descoonto</Text>
                    </View>

                    <View style={{ alignItems:'flex-start'}}>
                    <Text style={{color: '#FFF'}}> Marca: {this.props.marca}</Text>
                    <Text style={{color: '#FFF'}}> Ref: {this.props.id}</Text>
                    <Text style={{color: '#FFF', backgroundColor: '#FF8351'}}> {this.props.promo}</Text>
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
           marginVertical: 15,
           marginHorizontal: 40,          
        },
        title:{
            fontSize: 32,
        },

        textoCard:{                    
            fontSize: 24
        },       
    })