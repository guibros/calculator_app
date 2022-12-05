import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


class Screen extends React.Component {
  
    render() {
        return (
            <View style={styles.container}>           
                <View style={styles.result}>
                    <Text style={styles.resultText}>{this.props.resultText}</Text>
                </View>   
                <View style={styles.calculation}>
                    <Text style={styles.calculationText}>{this.props.calculationText}</Text>
                </View>
            </View> 
       )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 3,
    },
    calculationText:{
      fontSize:50,
      color:'black',
      paddingRight:20,
      fontWeight: 'bold'
    },
    resultText:{
      fontSize:60,
      color:'#444444',
      paddingRight:20
    },
    result: {
      flex: 2,
      backgroundColor:'#eeeeee',
      justifyContent:'center',
      alignItems: 'flex-end'
    },
    calculation: {
      flex: 1,
      backgroundColor:'white',
      justifyContent:'center',
      alignItems: 'flex-end'
    },
});
  
export default Screen;

