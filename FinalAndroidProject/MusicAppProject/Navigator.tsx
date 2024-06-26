import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './prj_Login';
import MainSocial from './prj_MainSocial';
import MainMyPlaylist from './prj_MainMyPlaylist';
import ShowPlaylist from './prj_ShowPlaylist';
import AddNewPlaylist from './prj_AddNewPlaylist';
import PlaySongBar from './comp_PlaySongBar';
import Search from './prj_Search';
import { Provider } from 'react-redux';
import store from './store';
import AddSongToPlayList from './prj_AddSongToPlaylist';
const Stack = createStackNavigator();

const Navigator = () => {
  return (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MainSocial" component={MainSocial} />
        <Stack.Screen name="MainMyPlaylist" component={MainMyPlaylist} />
        <Stack.Screen name="ShowPlaylist" component={ShowPlaylist} />
        <Stack.Screen name="AddNewPlaylist" component={AddNewPlaylist} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="AddSongToPlayList" component={AddSongToPlayList} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
  );
};

export default Navigator;
