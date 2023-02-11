import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default RadioButton = ({values}) =>  {

    const [selection, setSelection] = useState('');

    return (
        <View>
            <View style={styles.container}>
                {values.map(value => {
                    return (
                        <View key={value.key} style={styles.container}>
                            <TouchableOpacity
                                style={styles.radioCircle}
                                onPress={() => {
                                    setSelection(value.key);
                                }}>
                                {selection === value.key && <View style={styles.selectedRb} />}
                            </TouchableOpacity>
                            <Text style={styles.radioText}>{value.text}</Text>
                        </View>
                    );
                })}
            </View>
            {/* <Text> Selected: {value} </Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginBottom: 35,
        alignItems: 'center',
        flexDirection: 'row',
		justifyContent: 'space-between',
	},
    radioText: {
        marginLeft: 10,
        marginRight: 35,
        fontSize: 20,
        color: '#000',
        fontWeight: '700'
    },
	radioCircle: {
		height: 30,
		width: 30,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: '#3740ff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedRb: {
		width: 15,
		height: 15,
		borderRadius: 50,
		backgroundColor: '#3740ff',
    }
});