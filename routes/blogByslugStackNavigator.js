import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import screenOptionStyle from "./screenOptionStyle";
import MenuHeader from "../shared/menuHeader";
import BlogBySlug from "../screens/BlogBySlug";

const Stack = createStackNavigator();

const  BlogByAlugStackNavigator = () => {

    return (
            <Stack.Navigator screenOptions={screenOptionStyle}>
                <Stack.Screen name="BlogBySlugScreen" component={BlogBySlug} options={({navigation}) => {
                    return { headerTitle:  () => <MenuHeader navigation={navigation} title='BlogBySlug Gamezone'/> }
                }} />
            </Stack.Navigator>
    )
}

export default BlogByAlugStackNavigator;
