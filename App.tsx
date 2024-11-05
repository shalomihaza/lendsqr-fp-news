import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {ToastProvider} from 'react-native-toast-notifications';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Provider} from 'react-redux';
import {store} from 'store/store';

import Router from 'navigation/Router';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import {
  REACT_APP_CODE_PUSH_DEPLOYMENT_KEY,
  REACT_APP_GOOGLE_SIGN_IN_WEB_CLIENT_ID, //@ts-ignore
} from '@env'; // typescript shows a false warning here. Env has been configured properly

import CodePush, {CodePushOptions} from 'react-native-code-push';
// Initialize Google Sign In
GoogleSignin.configure({
  webClientId: REACT_APP_GOOGLE_SIGN_IN_WEB_CLIENT_ID, // Get this from Firebase Console
});
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <ToastProvider>
        <SafeAreaProvider>
          <NavigationContainer theme={MyTheme}>
            <Router />
          </NavigationContainer>
        </SafeAreaProvider>
      </ToastProvider>
    </Provider>
  );
};

const codePushOptions: CodePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
  installMode: CodePush.InstallMode.IMMEDIATE,
  deploymentKey: REACT_APP_CODE_PUSH_DEPLOYMENT_KEY,
};

export default CodePush(codePushOptions)(App);
