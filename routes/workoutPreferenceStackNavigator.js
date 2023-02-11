import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import screenOptionStyle from "./screenOptionStyle";
import MenuHeader from "../shared/menuHeader";
import WorkoutPreference from "../screens/workoutPreference";

const Stack = createStackNavigator();

const  WorkoutStackNavigator = () => {

    return (
            <Stack.Navigator screenOptions={screenOptionStyle}>
                <Stack.Screen name="WorkoutPreferenceScreen" component={WorkoutPreference} options={({navigation}) => {
                    return { headerTitle:  () => <MenuHeader navigation={navigation} title='Workout'/> }
                }} />
            </Stack.Navigator>
    )
}

export default WorkoutStackNavigator;