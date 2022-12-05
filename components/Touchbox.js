import React from 'react'
import {StyleSheet, TouchableOpacity, Text, View, Dimensions } from 'react-native'
import Touch from './Touch';

class Touchbox extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      resultText:this.props.resultText,
      calculationText: this.props.calculationText
    }
  }

    render() {
        return (
         <View style={styles.buttons}>
          <View style={styles.numbers}>
            <View style={styles.row}>
              <Touch text="7"  onPress={() => buttonPressed(7)}/>
              <Touch text="8" onPress={() => buttonPressed(8)}/>
              <Touch text="9" onPress={() => buttonPressed(9)}/>
            </View>
            <View style={styles.row}>
              <Touch text="4" onPress={() => buttonPressed(4)}/>
              <Touch text="5" onPress={() => buttonPressed(5)}/>
              <Touch text="6" onPress={() => buttonPressed(6)}/>
            </View>
            <View style={styles.row}>
              <Touch text="1" onPress={() => buttonPressed(1)}/>
              <Touch text="2" onPress={() => buttonPressed(2)}/>
              <Touch text="3" onPress={() => buttonPressed(3)}/>
            </View> 
            <View style={styles.row}>
              <Touch text="." onPress={() => buttonPressed('.')}/>
              <Touch text="0" onPress={() => buttonPressed(0)}/>
              <Touch text="=" onPress={() => buttonPressed('=')}/>
            </View> 
          </View>
          <View style={styles.operations}>
            <View style={styles.row}>
              <Touch text="C" onPress={() => operate('C')}/>
              <Touch text="E" onPress={() => operate('E')}/>
            </View>
              <Touch text="+" onPress={() => operate('+')}/>
              <Touch text="-" onPress={() => operate('-')}/>
              <Touch text="*" onPress={() => operate('*')}/>
              <Touch text="/" onPress={() => operate('/')}/>
          </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    row:{
      flex:1,
     flexDirection: 'row',
      justifyContent:'space-around',
      alignItems: 'center'
    },
    buttons: {
      flex: 7,
      flexDirection:'row'
    },
    numbers: {
      flex: 3,
      backgroundColor:'#434343'
    },
    operations: {
      flex: 1,
      justifyContent:'space-around',
      alignItems: 'stretch',
      backgroundColor:'#636363'
    },
});
  

export default Touchbox;