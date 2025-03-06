import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <Provider store={store}>
      {/* Set the status bar style and background */}
      <StatusBar barStyle="light-content" backgroundColor="#172554" />
      <AppNavigator />
    </Provider>
  );
}
