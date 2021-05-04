import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './components/Home';
import Login from './components/Login';
import TrackIntake from './components/TrackIntake';
import Profile from './components/Profile';
const RootStack = createStackNavigator();
const DrawerStack = createDrawerNavigator();

function DrawerRoutes() {
  return (    
      <DrawerStack.Navigator initialRouteName="Home">
        <DrawerStack.Screen name="Home" component={Home} />
        <DrawerStack.Screen name="Track your intake" component={TrackIntake} />
        <DrawerStack.Screen name="My Profile" component={Profile} />

      </DrawerStack.Navigator>
  );
}

export default class App extends React.Component {
  render() {
    return(
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Login"
          screenOptions = {{
            headerShown: false
          }}
        >
          <RootStack.Screen name = "Login" component={Login} />          
          <RootStack.Screen name = "Home" component={DrawerRoutes} />
        </RootStack.Navigator>
      </NavigationContainer>
    );
  }
}