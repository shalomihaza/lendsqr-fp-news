import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  NEWS_LIST_SCREEN,
  NEWS_DETAIL_SCREEN,
} from 'utils/constants/screenNames';
import NewsList from 'features/news/screens/NewsList';
import NewsDetail from 'features/news/screens/NewsDetail';

import {useAppSelector} from 'hooks/redux-hooks/storeHooks';
import {Button, View, StyleSheet} from 'react-native';
import {signOut} from 'store/authSlice';

interface HeaderRightCompProps {
  handleSignOut: () => void;
}

const HeaderRightComp: React.FC<HeaderRightCompProps> = ({handleSignOut}) => {
  const throwError = () => {
    throw new Error('This is a custom error message!');
  };

  return (
    <View style={styles.headerRightWrapper}>
      <Button onPress={throwError} title="Throw error" />
      <Button onPress={handleSignOut} title="Sign Out" />
    </View>
  );
};

const Stack = createNativeStackNavigator();

const AppStack: React.FC = () => {
  const {user} = useAppSelector(state => state.auth);
  // const dispatch = useAppDispatch();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <Stack.Navigator
      // screenOptions={{headerShown: false}}
      initialRouteName={NEWS_LIST_SCREEN}>
      <Stack.Screen
        name={NEWS_LIST_SCREEN}
        component={NewsList}
        options={{
          headerTitle: `Hi ${user?.displayName}`,
          headerRight: () => <HeaderRightComp handleSignOut={handleSignOut} />,
        }}
      />
      <Stack.Screen
        name={NEWS_DETAIL_SCREEN}
        component={NewsDetail}
        options={({route}) => {
          const params = route?.params as any; // type assertion here because typescript is not able to infer the type of route.params
          const title = params?.article?.title ?? 'News Detail';
          return {title: title};
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerRightWrapper: {flexDirection: 'row', gap: 5},
});
export default AppStack;
