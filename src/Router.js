import React from 'react';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


/*Loading */

import Loading from '../src/screens/Loading/Index';

/*Auh */

import Login from '../src/screens/Authenticate/Login';
import Register from '../src/screens/Authenticate/Register';

/*Home*/

import HomeIndex from '../src/screens/Home/Index';

const AuthenticateStack=createStackNavigator({
    Login:{
        screen:Login
    },
    Register:{
        screen:Register
    }
});

const HomeStack=createStackNavigator({
    Home:{
        screen:HomeIndex
        
    }
});

const SwitchNavigator = createSwitchNavigator({
    Loading,
    App:HomeStack,
    Auth:AuthenticateStack
},{
    initialRouteName:'Loading'
});

export default createAppContainer(SwitchNavigator);




