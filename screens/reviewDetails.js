import React from 'react'
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import {globalStyles,  Images} from '../styles/global';
import {Card} from '../shared/card';

function ReviewDetails({route,navigation}) {

    const { title } = route.params;
    const { body } = route.params;
    const { rating } = route.params;

    const pressHandler = () => {
        navigation.goBack();
    }

    return (
        <View style={globalStyles.container}>

            <Card>
                <Text >{title}</Text>
                <Text >{body}</Text>
                {/* <Text >{rating}</Text> */}
                <View style={styles.rating}>
                    <Text>Gamezone rating: </Text>
                    <Image source={Images.ratings[rating]} />
                </View>
            </Card>

        </View>
    )
}

export default ReviewDetails

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    }
})
