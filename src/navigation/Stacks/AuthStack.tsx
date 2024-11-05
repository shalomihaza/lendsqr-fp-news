import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  LOGIN_SCREEN,
  SIGNUP_SCREEN,
  SIGNUP_WITH_GOOGLE_SCREEN,
} from 'utils/constants/screenNames';
import SignUp from 'features/auth/screens/SignUp';
import SignUpWithGoogle from 'features/auth/screens/SignUpWithGoogle';
import Login from 'features/auth/screens/Login';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={SIGNUP_SCREEN}>
      <Stack.Screen name={SIGNUP_SCREEN} component={SignUp} />

      <Stack.Screen
        name={SIGNUP_WITH_GOOGLE_SCREEN}
        component={SignUpWithGoogle}
      />
      <Stack.Screen name={LOGIN_SCREEN} component={Login} />
    </Stack.Navigator>
  );
};

export default AppStack;
