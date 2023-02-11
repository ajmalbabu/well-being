import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigatorSetup from './routes/drawNavigatorSetup';
import HomeStackNavigator from './routes/homeStackNavigator';
// import { withAuthenticator } from 'aws-amplify-react-native';
import { init  } from './initializer';

// recomended amplify usage https://github.com/aws-amplify/amplify-js/issues/5926#issuecomment-636376712


init();

const App = () => {

  return (
      <NavigationContainer>
        <DrawerNavigatorSetup />
        {/* <HomeStackNavigator /> */}
      </NavigationContainer>
  );

}

export default App;

// export default withAuthenticator(App);
