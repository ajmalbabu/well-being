import React from 'react'
import { View, Text, Button, Modal, StyleSheet, Keyboard, TouchableWithoutFeedback, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react/cjs/react.development';
import {globalStyles} from '../styles/global';
import {Card} from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons'; 
import {ReviewForm} from './reviewForm';

function Home({navigation}) {

    const [modelOpen,setModelOpen] = useState(false);
    const [key,setKey] = useState(500);

    const [reviews,setReviews] = useState([
        {title: 'Zelda, Breath pf breath air', rating: 5, body: 'lorem ipsum', key: '1'},
        {title: 'Gotcha catch them all (again)', rating: 4, body: 'lorem ipsum', key: '2'},
        {title: 'Not so "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3'},
    ]);

    const pressHandler = () => {
        console.log("test");

    }

    const addReview = (review) => {
        setKey(key + 1);
        review.key =  key.toString(10);
        setReviews((currentReviews) => {
            return [review, ...currentReviews];
        });

        setModelOpen(false);
    }
    
    return (
        <View style={globalStyles.container}>

            <Modal visible={modelOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <View style={styles.modelContent}>
                        <MaterialIcons 
                            name={'close'} 
                            size={24} 
                            style={{...styles.modelToggle, ...styles.modelClose}}
                            onPress={() => setModelOpen(false)} 
                        />
                        <ReviewForm addReview={addReview}/>
                    </View>
               </TouchableWithoutFeedback>
            </Modal>
            
            <MaterialIcons 
                name={'add'} 
                style={styles.modelToggle}
                size={24} 
                onPress={() => setModelOpen(true)} 
            />

            <FlatList
                data={reviews}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails',{title: item.title, body: item.body, rating: item.rating})}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    modelContent: {
        flex: 1,
        marginTop: 50,
        padding: 5
    },
    modelToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modelClose: {
        marginTop: 20,
        marginBottom: 0
    }
});