import React from 'react';
import LoginScreen from './screens/LoginScreen';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {AppTabNavigator} from './components/AppTabNavigator';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const SwitchNavigator = createSwitchNavigator({
  LoginScreen: {screen:LoginScreen},
  BottomTab: {screen:AppTabNavigator}
});

const AppContainer = createAppContainer(SwitchNavigator);