import React, {useEffect} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import AppStack from 'navigation/Stacks/AppStack';
import AuthStack from 'navigation/Stacks/AuthStack';

import {L} from 'utils/helpers';
import {useAppDispatch, useAppSelector} from 'hooks/redux-hooks/storeHooks';
import {setUser} from 'store/authSlice';

interface RouterProps {}
const Router: React.FC<RouterProps> = () => {
  const {user} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  useEffect(() => {
    function onAuthStateChanged(firebaseUser: FirebaseAuthTypes.User | null) {
      L('onAuthStateChanged user is', firebaseUser);
      if (firebaseUser) {
        dispatch(
          setUser({
            email: firebaseUser.email ?? '',
            displayName: firebaseUser.displayName ?? '',
            emailVerified: firebaseUser?.emailVerified ?? false,
            photoUrl: firebaseUser.photoURL ?? '',
            uid: firebaseUser.uid,
          }),
        );
        L('User is signed in');
      } else {
        dispatch(setUser(null));
        L('User is signed out');
      }
    }
    const unsubscribe = auth().onAuthStateChanged(onAuthStateChanged);
    return unsubscribe; // unsubscribe on unmount
  }, [dispatch]);

  return <>{!user ? <AuthStack /> : <AppStack />}</>;
};

export default Router;
