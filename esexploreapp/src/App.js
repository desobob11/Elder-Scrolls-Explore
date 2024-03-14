import { StyleSheet } from 'react-native';
import { useFonts, Poppins_600SemiBold  } from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { enableScreens } from 'react-native-screens';
import Glossary from './Pages/Glossary/Glossary';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Settings from './Pages/Settings/Settings';
import Creatures from './Pages/Creatures/Creatures';
import { urls } from './consts/nodeURLs';
import Article from './Pages/Article/Article';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
enableScreens();

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Poppins_600SemiBold,
  })

  if (!fontsLoaded && !fontError) {
    return null;
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group screenOptions={{headerShown:false}}>
          <Stack.Screen
            name="Article"
           // component={Creatures}
            //initialParams={{ url: urls.creatureTypes, header: "creatures", body:"Categories of beasts and bots that roam the Isle of Vvardenfell."}}
            component={Article}
            initialParams={{ url: urls.creatureTypes, header: "creatures", body:"Categories of beasts and bots that roam the Isle of Vvardenfell."}}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
  /*
  return (
    <NavigationContainer>
        <Tab.Navigator>
          <Tab.Group screenOptions={defaultScreenOptions}>
          <Tab.Screen
            name="Glossary"
            component={Glossary}
            options={{ title: 'Glossary' }}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{ title: 'Settings' }}
          />
          </Tab.Group>
          
        </Tab.Navigator>
    </NavigationContainer>
  );
}
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontFamily:"Poppins_600SemiBold"
  }
});


// Define your default styles for the header
const defaultScreenOptions = {
  headerStyle: {
    backgroundColor: '#a3916f', // Your default background color
  },
  headerTitleStyle: {
    color: 'white', // Your default title color
    fontFamily: 'Poppins_600SemiBold', // Your default font family
  },
  headerTintColor: 'white', // Color of the back button and other header tints
  animation: 'none', // Disable the animation
  headerShown:true
};
