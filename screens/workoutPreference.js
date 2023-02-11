import React,{useState} from 'react';
import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
import { DataStore, syncExpression } from 'aws-amplify';
import { Preference } from '../src/models';
import RadioButton from '../shared/radioButton';
import FlatButton from '../shared/button';
import userStore from '../shared/UserStore';


const genderProps = [
	{
		key: 'Male',
		text: 'Male      ',
	},
	{
		key: 'Female',
		text: 'Female',
	}
];


const uomMeasure = [
	{
		key: 'Imperial',
		text: 'Imperial',
	},
	{
		key: 'Metric',
		text: 'Metric',
	}
];

const WorkoutPreference = () => {

  const [counter, setCounter] = useState(0)

  const savePreference = async () => {

      const preferenceArray = await DataStore.query(Preference);

      if(Array.isArray(preferenceArray) && preferenceArray.length) {

        updatePreference(preferenceArray[0]);
      } else {

        createPreference();
      }

  };

  /**
   * Clears local store and then syncs with back-end cloud store.
   */
  const clearAndSyncLocalStore = async () => {
    console.log("Clear and restart local store.");
    await DataStore.clear();
    await DataStore.stop();
    await DataStore.start();    
    console.log("Local store restarted");
  }

  /**
   * This will first save Prefernce to LocalStore, then sync to Cloud back-end. If the Network connectivity 
   * is critical to retrieve some other info from Cloud, check that before proceeding with save operation.
   *
   * @param {prefernce} Prefernce to save
   */
  const createPreference =  async () => {

    console.log("Create preference");
    await DataStore.save(
        new Preference({
          email: userStore.getUserId,
          gender: "male",
          description: "test-0"
        })
    );  
    setCounter(0);
  };

  /**
   * This will update prefernce to LocalStore, then sync to Cloud back-end.
   *
   * @param {prefernce} Prefernce to be updated
   */
  const updatePreference =  async (preference) => {

    console.log("Update preference: ", preference);

    await DataStore.save(
      Preference.copyOf(preference, updated => {
        updated.description = "test-" + counter;
        setCounter(counter + 1);
      })
    );
  }

  return (
    <View style={styles.container}>
      <RadioButton values={genderProps} />
      <RadioButton values={uomMeasure} />

      <FlatButton text='Save' onPress={savePreference}/>
      <FlatButton text='clear' onPress={clearAndSyncLocalStore}/>
      {/* <Text>Desc: {description}</Text> */}
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});

export default WorkoutPreference;
