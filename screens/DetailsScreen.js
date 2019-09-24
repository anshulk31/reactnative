import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {  createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StackActions, NavigationActions } from 'react-navigation';

class DetailsScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // this.state = this.initialState;
      name : this.props.navigation.state.params.name.value,
      contact: this.props.navigation.state.params.name.Contact
    }
  }

  componetWillMount(){
    this.getInitialState();
  }

  // componentWillUnmount() {
  //   this.willFocusSubscription.remove();
  // }

  // componentWillMount(){
  //   const resetAction = StackActions.reset({
  //     index: 1,
  //     actions: [NavigationActions.navigate({ routeName: 'Details' })],
  //   });
  //   this.props.navigation.dispatch(resetAction);
  // }

  render() {
    debugger
    //this.props.navigation.dispatch(StackActions.popToTop());
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>{this.state.name}</Text>
        <Text>{this.state.contact}</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

export default DetailsScreen;