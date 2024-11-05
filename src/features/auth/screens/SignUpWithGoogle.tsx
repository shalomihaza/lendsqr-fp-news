import React from 'react';
import {View, Button, Text, TouchableOpacity} from 'react-native';

import {signInWithGoogle} from 'store/authSlice';
import {globalStyles} from 'theme/config';
import {LOGIN_SCREEN} from 'utils/constants/screenNames';
import {L} from 'utils/helpers';

interface SignUpWithGoogleProps {
  route: any;
  navigation: any;
}
const SignUpWithGoogle: React.FC<SignUpWithGoogleProps> = ({navigation}) => {
  // const dispatch = useAppDispatch();
  //   const {userData} = route.params;

  const handleGoogleSignUp = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      L('Google Sign Up Error:', error);
    }
  };
  const handleGoToLogin = () => {
    navigation.navigate(LOGIN_SCREEN);
  };
  return (
    <View style={globalStyles.ceteredContainer}>
      <Button title="Sign Up with Google" onPress={handleGoogleSignUp} />
      <View style={globalStyles.footer}>
        <Text style={globalStyles.txt}>Already have an account</Text>
        <TouchableOpacity onPress={handleGoToLogin}>
          <Text style={globalStyles.linkTxt}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
// });

export default SignUpWithGoogle;
