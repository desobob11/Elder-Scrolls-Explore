import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useFonts, Poppins_600SemiBold  } from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Creatures from './Pages/Creatures/Creatures';
import Glossary from './Pages/Glossary';
import Test from './Components/Test/Test';

const Stack = createNativeStackNavigator();


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
          <Stack.Group screenOptions={defaultScreenOptions}>
            <Stack.Screen
              name="Test"
              component={Test}
              options={{ title: 'Test' }}
            />
          <Stack.Screen
            name="Glossary"
            component={Glossary}
            options={{ title: 'Glossary' }}
          />
          </Stack.Group>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

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
  headerShown:false
};
