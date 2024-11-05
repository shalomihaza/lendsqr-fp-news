import React, {useState} from 'react';
import {useToast} from 'react-native-toast-notifications';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {COLORS, globalStyles} from 'theme/config';
import {
  LOGIN_SCREEN,
  SIGNUP_WITH_GOOGLE_SCREEN,
} from 'utils/constants/screenNames';
import {h, w} from 'utils/responsive';

interface SignUpProps {
  navigation: any;
}
const SignUp: React.FC<SignUpProps> = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const toast = useToast();
  const handleNext = () => {
    if (!fullName || !phone || !email) {
      toast.show('Please fill all fields');
      return;
    }
    navigation.navigate(SIGNUP_WITH_GOOGLE_SCREEN, {
      userData: {fullName, phone, email},
    });
  };

  const handleGoToLogin = () => {
    navigation.navigate(LOGIN_SCREEN);
  };

  return (
    <View style={globalStyles.ceteredContainer}>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor={COLORS.inputPlaceholderTxt}
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor={COLORS.inputPlaceholderTxt}
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor={COLORS.inputPlaceholderTxt}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Button title="Next" onPress={handleNext} />
      <View style={globalStyles.footer}>
        <Text style={globalStyles.txt}>Already have an account</Text>
        <TouchableOpacity onPress={handleGoToLogin}>
          <Text style={globalStyles.linkTxt}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: h(40),
    borderColor: 'gray',
    color: COLORS.black,
    borderWidth: 1,
    marginBottom: h(20),
    paddingHorizontal: w(10),
    borderRadius: 5,
  },
});

export default SignUp;
