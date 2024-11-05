import {createSlice} from '@reduxjs/toolkit';
import {L} from 'utils/helpers';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

// Define a type for the slice state

interface User {
  email: string;
  displayName: string;
  emailVerified: boolean;

  photoUrl: string;
  uid: string;
}
interface AuthState {
  user: User | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
}

// Define the initial state using that type
const initialState: AuthState = {
  user: null,
  status: 'idle',
  error: null,
};

export const signInWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const response = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(
      response.data?.idToken ?? null,
    );
    const userCredential = await auth().signInWithCredential(googleCredential);
    L('User:', userCredential.user);
    return userCredential.user;
  } catch (error) {
    L('Google Sign In Error:', error);
    return null;
  }
};

export const signOut = async () => {
  try {
    await auth().signOut();
  } catch (error) {
    L('Sign out error:', error);
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {setUser} = authSlice.actions;
export default authSlice.reducer;
