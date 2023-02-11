import Amplify, { syncExpression } from 'aws-amplify';
import awsExports from './src/aws-exports';
import { Preference } from './src/models';
import * as Font from 'expo-font';
import userStore from './shared/UserStore';

export const loadFonts = () => {
  return Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  })
}

export const init = () => {

  console.log("User id is: " + userStore.getUserId);

  loadFonts();

  console.log("Loading completed...");

  Amplify.configure({
    ...awsExports,
    syncExpressions: [
      syncExpression(Preference, () => {
        return preference => preference.email("eq", userStore.getUserId)
      })
    ],    
    Analytics: {
      disabled: true,
    },
  })
};
