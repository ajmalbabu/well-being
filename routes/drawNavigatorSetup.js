import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStackNavigator from './homeStackNavigator';
import AboutStackNavigator from './aboutStackNavigator';
import screenOptionStyle from './screenOptionStyle';
import WorkoutStackNavigator from './workoutPreferenceStackNavigator';
import LogoutStackNavigator from './logoutStackNavigator';
import MovieStackNavigator from './movieStackNavigator';
import BlogStackNavigator from './blogStackNavigator';
import BlogByAlugStackNavigator from './blogByslugStackNavigator';


const Drawer = createDrawerNavigator();

const DrawerNavigatorSetup = () => {
  return (
    <Drawer.Navigator initialRouteName="Contact" screenOptions={screenOptionStyle}>
      <Drawer.Screen name="Home" component={HomeStackNavigator} />
      <Drawer.Screen name="About" component={AboutStackNavigator} />
      <Drawer.Screen name="Movie" component={MovieStackNavigator} />
      <Drawer.Screen name="Blog" component={BlogStackNavigator} />
      <Drawer.Screen name="BlogBySlug" component={BlogByAlugStackNavigator} />
      <Drawer.Screen name="Workout" component={WorkoutStackNavigator} />
      <Drawer.Screen name="Logout" component={LogoutStackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigatorSetup;
