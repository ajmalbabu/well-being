import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import screenOptionStyle from "./screenOptionStyle";
import MenuHeader from "../shared/menuHeader";
import Blog from "../screens/blog";

const Stack = createStackNavigator();

const  BlogStackNavigator = () => {

    return (
            <Stack.Navigator screenOptions={screenOptionStyle}>
                <Stack.Screen name="BlogScreen" component={Blog} options={({navigation}) => {
                    return { headerTitle:  () => <MenuHeader navigation={navigation} title='Blog Gamezone'/> }
                }} />
            </Stack.Navigator>
    )
}

export default BlogStackNavigator;