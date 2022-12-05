import React from 'react'
import {StyleSheet, SafeAreaView, View} from 'react-native'
import Screen from './screen'
import Touchbox from './Touchbox'
import Touch from './Touch'


class Wrapper extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      resultText:'',
      calculationText: ''
    }
    this.operations = ['del','+','-','*','/']
  

  global.calculateResult = () => {
    const text = this.state.resultText
    console.log(text, eval(text))
    this.setState({
      calculationText: eval(text)
    })
  }

  global.operate = (operation) => {
    switch(operation) {
      case 'E': 
          let text = this.state.resultText.split('')
          text.pop()
          this.setState({
            resultText: text.join('')
          })
          break
      case 'C':
          this.setState({
            resultText: ''
          })
          this.setState({
            calculationText: ''
          })
          break
      case '+':
      case '*':
      case '/':
        if(this.state.resultText == '') return
      case '-':  
        const lastChar = this.state.resultText.split('').pop()      
        if(this.operations.indexOf(lastChar) > 0)  return

        this.setState({
          resultText: this.state.resultText + operation
        })
    }
  }


  global.validate = () => {
    const text = this.state.resultText
    switch(text.slice(-1)) {
      case '+':
      case '-':
      case '*':
      case '/':
        return false
    }
    return true
  }

 global.buttonPressed = (text) =>{
    console.log(text)

    if(text == '=') {
      return validate() && calculateResult(this.state.resultText)
    }

    this.setState({
      resultText: this.state.resultText + text
    })
  }

}

  render(){
    return (
    
      <SafeAreaView style={styles.container}>
        <Screen 
          resultText={this.state.resultText}
          calculationText={this.state.calculationText}
        />
        <Touchbox 
            buttonPressed={this.buttonPressed}
            operate={this.operate}
        />
          
       </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#434343'
  },
  row:{
    flex:1,
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center'
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
  buttons: {
    flex: 7,
    flexDirection:'row'
  }
});

export default Wrapper;