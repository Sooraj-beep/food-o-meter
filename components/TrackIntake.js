import React from 'react';
import { View, Alert } from 'react-native';
import AppLoading from 'expo-app-loading'
import { Container, Header, Title, Form, Item, Input, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,} from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default class TrackIntake extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      
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

  calcCalories = () => {
    this.setState({
      ans: 1.3* (
        10*Number(this.state.wt) + 6.25*Number(this.state.ht) - 5*Number(this.state.age) + 5
      )
        })
  }

  createAlert = () =>
  Alert.alert(
    "Alert Title",
    "My Alert Msg",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );


  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
      <Header>
        <Left>
          <Button transparent
            onPress={() => this.props.navigation.openDrawer()}
          >
            <Icon name='menu' />
          </Button>
        </Left>
        <Body style={{flex:3}}>
          <Title>Calorie Calculator </Title>
        </Body>
        <Right />
      </Header>
      <Content>
      <Form>
        <Item>
          <Input placeholder="Height" 
          onChangeText={ht => this.setState({ht})}
          />
        </Item>
        <Item>
          <Input placeholder="Weight" 
          onChangeText={wt => this.setState({wt})}
          />
        </Item>
        <Item last>
          <Input placeholder="Age" 
          onChangeText={age => this.setState({age})}
          />
        </Item>
        <Button style={{marginTop: 10}}
          full
          rounded
          primary
          onPress={this.calcCalories}
        >
          <Text style={{color: "white"}}> Calculate</Text>
        </Button>
      </Form>

      <Button disabled block style={{marginTop: 200, height: 200}}>
              <Text style={{fontSize: 25}}>Calories per day: {this.state.ans}</Text>
      </Button>

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