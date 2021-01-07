import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './components/Home'
import Login from './components/Login'

const RootStack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return(
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Login">
          <RootStack.Screen name = "Login" component={Login} />          
          <RootStack.Screen name = "Home" component={Home} />
        </RootStack.Navigator>
      </NavigationContainer>
    );
  }
}