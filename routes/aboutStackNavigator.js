import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from '../screens/about';
import screenOptionStyle from "./screenOptionStyle";
import MenuHeader from "../shared/menuHeader";

const Stack = createStackNavigator();

const  AboutStackNavigator = () => {

    return (
            <Stack.Navigator screenOptions={screenOptionStyle}>
                <Stack.Screen name="AboutScreen" component={About} options={({navigation}) => {
                    return { headerTitle:  () => <MenuHeader navigation={navigation} title='About Gamezone'/> }
                }} />
            </Stack.Navigator>
    )
}

export default AboutStackNavigator;