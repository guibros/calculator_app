import React from 'react'
import {StyleSheet, TouchableOpacity, Text, View, Dimensions } from 'react-native'

class Touch extends React.Component {

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={[styles.btn, { backgroundColor: this.props.backgroundColor }]}>
                <Text style={styles.btnText}>{this.props.text}</Text>
            </TouchableOpacity >
        )
    }
}

const styles = StyleSheet.create({
    btn:{
      flex:1,
      alignItems: 'center',
      alignSelf: 'stretch',
      justifyContent:'center',
      elevation: 8,
      borderRadius: 88, 
      margin: 5, 
      padding:20
    },
    btnText:{
      fontSize:45,
      color:'white',
      fontWeight: 'bold'
    },
});
  

export default Touch;