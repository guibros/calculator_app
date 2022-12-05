import React from 'react'
import {StyleSheet, TouchableOpacity, Text, Switch, View, Dimensions } from 'react-native'

class Switchy extends React.Component {
    
    
    render() { 
        
        const [isEnabled, setIsEnabled] = useState(false);
        const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
        return (
            <View style={styles.container}>
                <Text style={styles.btnText}>{this.props.text}</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
         );
        
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
  

export default Switchy;