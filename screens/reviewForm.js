import React from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import {globalStyles} from '../styles/global';
import {Formik} from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';


const ReviewSchema = yup.object({
    title: yup.string().required().min(1),
    body: yup.string().required().min(1),
    rating: yup.string().required().test('is-num-1-5','Rating must be a number 1 - 5',(val) => {return parseInt(val) < 6 && parseInt(val) > 0;})
})

export const  ReviewForm = ({addReview}) =>  {

    return(
        <View style={globalStyles.container}>
            <Formik 
                initialValues={{title: '', body: '', rating: ''}}
                validationSchema={ReviewSchema}
                onSubmit={(values,actions) => {
                    actions.resetForm();
                    addReview(values);
                    // console.log(values);                    
                }}
            >
                {(formikProps) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Review title"
                            onChangeText={formikProps.handleChange('title')}
                            value={formikProps.values.title}
                            onBlur={formikProps.handleBlur('title')}
                        />
                        <Text style={globalStyles.errorText} >{formikProps.touched.title && formikProps.errors.title}</Text>
                        <TextInput
                            multiline
                            minHeight={80}
                            style={globalStyles.input}
                            placeholder="Review body"
                            onChangeText={(value) => formikProps.handleChange('body')(value)}
                            value={formikProps.values.body}
                            onBlur={formikProps.handleBlur('body')}
                        />  
                        <Text style={globalStyles.errorText} >{formikProps.touched.body && formikProps.errors.body}</Text>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Rating (1-5)"
                            onChangeText={formikProps.handleChange('rating')}
                            value={formikProps.values.rating}
                            keyboardType='numeric'
                            onBlur={formikProps.handleBlur('rating')}
                        />        
                        <Text style={globalStyles.errorText} >{formikProps.touched.rating && formikProps.errors.rating}</Text>
                        {/* <Button title='Submt' color='maroon' onPress={formikProps.handleSubmit} />                                      */}
                        <FlatButton text='Submit' onPress={formikProps.handleSubmit}/>
                    </View>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    modelContent: {
    },
});

