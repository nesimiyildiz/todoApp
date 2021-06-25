import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Index extends Component {
    componentDidMount() {
        this.props.navigation.navigate('Auth')
    }
    
    render() {
        
        return (
            <View>
                <Text>Loading</Text>
            </View>
        )
    }
}
