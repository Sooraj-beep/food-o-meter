import React from 'react';
import { Alert } from "react-native";
import AppLoading from 'expo-app-loading'
import { Container, Header, Label, Title, Form, Item, Input, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAJDJVR_xFuUR66Ki3gm7nYacg3yamB3rg",
    authDomain: "food-o-meter-f2359.firebaseapp.com",
    projectId: "food-o-meter-f2359",
    storageBucket: "food-o-meter-f2359.appspot.com",
    databaseURL: "https://food-o-meter-f2359-default-rtdb.firebaseio.com"
  }

  firebase.initializeApp(firebaseConfig);
  

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      email: '',
      password: '',
      alertMsg: '',

    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  signUpUser = (email, password) => {
    try{
      if(this.state.password.length<6){
        alert("please enter atleast 6 characters")
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password)
      this.createAlert("Successful sign up!")
    }
    catch(error){
      console.log(error.toString())
    }
  }

  loginUser = (email, password) => {

    try{
      firebase.auth().signInWithEmailAndPassword(email, password).then(this.props.navigation.replace('Home'))
    }
    catch(error){
      console.log(error.toString())
    }
  }

  createAlert = (alertMsg) =>
  Alert.alert(
    "",
    alertMsg,
    [
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );


  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
      <Content>
        <Form>
            <Item floatingLabel>
                <Label>Email</Label>
                <Input
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={email => this.setState({email})}

                />
            </Item>

            <Item floatingLabel>
                <Label>Password</Label>
                <Input
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText= {password => this.setState({password})}

                />
            </Item>

            <Button style={{marginTop: 10}}
                full
                rounded
                success
                onPress= {() => this.loginUser(this.state.email, this.state.password)}

            >
                <Text> Login</Text>
            </Button>

            <Button style={{marginTop: 10}}
                full
                rounded
                primary
                onPress= {() => this.signUpUser(this.state.email, this.state.password)}

            >
                <Text style={{color: "white"}}> Sign up</Text>
            </Button>

            </Form>

      </Content>
      <Footer>
        <FooterTab>
          <Button full>
            <Text>food-o-meter 2021™</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
    );
  }
}