import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';

export default function SandBox() {
    return(
        // View by defaul uses Flex box

        <View style={styles.container}>
            <Text style={styles.boxOne}>one</Text>
            <Text style={styles.boxTwo}>two</Text>
            <Text style={styles.boxThree}>three</Text>
            <Text style={styles.boxFour}>four</Text>
        </View>
    )
}

const styles = StyleSheet.create({ 
    container: {
        // flex: 1, /** Take up all available view in the screen */
        flexDirection: 'row', /** This is the main axis and default is column, and cross axis will be just the opoosite of main axis */
        justifyContent: 'space-around', /** Justify's the content on the main axis - how component display on main axis */
        alignItems: 'flex-end', /** This one is for cross axis, like the main axis above but works on the cross axis, in this case on 'column' because main axis is on 'row' */
        paddingTop: 40,
        backgroundColor: '#ddd'
    },
    boxOne: {
        flex: 5, // This one would take 5 times space and the below three al together takes rest (all togethor should take whole space)
        padding: 10,
        backgroundColor: 'violet'
    },
    boxTwo: {
        flex: 1,
        padding: 20,
        backgroundColor: 'gold'
    }
    ,
    boxThree: {
        flex: 1,
        padding: 30,
        backgroundColor: 'coral'
    },
    boxFour: {
        flex: 1,
        padding: 40,
        backgroundColor: 'skyblue'
    }



});