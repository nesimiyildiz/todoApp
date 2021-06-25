import React, { Component } from 'react'
import { SafeAreaView,Text, TextInput } from 'react-native'


export default  class Login extends Component {
    
    render() {
        return (
            
            <SafeAreaView>
            {console.log("Deneme")}
            <TextInput placeholder="Gir"/>
            <Text>Text</Text>
            </SafeAreaView>
        )
    }
}
