import React from 'react';
import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import { Auth } from 'aws-amplify';
import { globalStyles } from '../styles/global';
import FlatButton from '../shared/button';
const { width } = Dimensions.get('window');

const Logout = () => {
  const signOut = async () => {
    try {
      await Auth.signOut({ global: true });
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };
  return (
    <View style={globalStyles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome! </Text>

        <FlatButton text='Log out' onPress={() => signOut()}/>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    paddingVertical: 20,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    width: width,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#ff9900',
    padding: 10,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
export default Logout;