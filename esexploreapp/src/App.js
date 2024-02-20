import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Poppins_600SemiBold  } from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Pages/Home/Home';
import Creatures from './Pages/Creatures/Creatures';

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
      <Stack.Navigator screenOptions={{animation:"none"}}>
        <Stack.Screen
          name="Creatures"
          component={Creatures}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown:false}}
        />
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
