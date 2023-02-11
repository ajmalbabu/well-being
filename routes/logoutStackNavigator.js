import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import screenOptionStyle from "./screenOptionStyle";
import MenuHeader from "../shared/menuHeader";
import Logout from "../screens/Logout";

const Stack = createStackNavigator();

const  LogoutStackNavigator = () => {

    return (
            <Stack.Navigator screenOptions={screenOptionStyle}>
                <Stack.Screen name="LogoutScreen" component={Logout} options={({navigation}) => {
                    return { headerTitle:  () => <MenuHeader navigation={navigation} title='Logout Gamezone'/> }
                }} />
            </Stack.Navigator>
    )
}

export default LogoutStackNavigator;