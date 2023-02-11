import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Movie from '../screens/movie';
import screenOptionStyle from "./screenOptionStyle";
import MenuHeader from "../shared/menuHeader";

const Stack = createStackNavigator();

const  MovieStackNavigator = () => {

    return (
            <Stack.Navigator screenOptions={screenOptionStyle}>
                <Stack.Screen name="MovieScreen" component={Movie} options={({navigation}) => {
                    return { headerTitle:  () => <MenuHeader navigation={navigation} title='Movie Gamezone'/> }
                }} />
            </Stack.Navigator>
    )
}

export default MovieStackNavigator;