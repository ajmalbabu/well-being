import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import screenOptionStyle from "./screenOptionStyle";
import MenuHeader from "../shared/menuHeader";

const Stack = createStackNavigator();

const  HomeStackNavigator = () => {

    return (
        
            <Stack.Navigator screenOptions={screenOptionStyle}>    
                <Stack.Screen name="Home" component={Home} options={({navigation}) => {
                    return { headerTitle:  () => <MenuHeader navigation={navigation} title='GameZone'/> }
                }} />
                <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={{ title: 'Review Details' }} />
            </Stack.Navigator>
    )
}

export default HomeStackNavigator;