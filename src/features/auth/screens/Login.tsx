import React from 'react';
import {View, Button, Text, TouchableOpacity} from 'react-native';

import {signInWithGoogle} from 'store/authSlice';
import {globalStyles} from 'theme/config';
import {SIGNUP_SCREEN} from 'utils/constants/screenNames';
import {L} from 'utils/helpers';

interface LoginProps {
  navigation: any;
}

const Login: React.FC<LoginProps> = ({navigation}) => {
  // const dispatch = useAppDispatch();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      L('Google Sign In Error:', error);
    }
  };
  const handleGoToSignUp = () => {
    navigation.navigate(SIGNUP_SCREEN);
  };

  return (
    <View style={globalStyles.ceteredContainer}>
      <Button title="Sign In with Google" onPress={handleGoogleSignIn} />
      {/* <Button title="Sign Up" onPress={handleGoToSignUp} /> */}
      <View style={globalStyles.footer}>
        <Text style={globalStyles.txt}>Don't have an account?</Text>
        <TouchableOpacity onPress={handleGoToSignUp}>
          <Text style={globalStyles.linkTxt}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
// });

export default Login;
