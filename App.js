import React from "react";
import {View,Text,SafeAreaView} from 'react-native';
import Router from './src/Router'

export default class App extends React.Component
{
  render(){
    return <SafeAreaView>
       <Router/>
     </SafeAreaView>
    
  }
}
