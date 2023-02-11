import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigatorSetup from './routes/drawNavigatorSetup';
import HomeStackNavigator from './routes/homeStackNavigator';
import { init, loadFonts  } from './initializer';
import AppLoading from 'expo-app-loading';

// recomended amplify usage https://github.com/aws-amplify/amplify-js/issues/5926#issuecomment-636376712


init();

const App = () => {

  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <NavigationContainer>
      <DrawerNavigatorSetup />
      {/* <HomeStackNavigator /> */}
    </NavigationContainer>
  );

}

export default App;