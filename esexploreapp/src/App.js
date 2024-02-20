import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Poppins_600SemiBold  } from '@expo-google-fonts/poppins';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_600SemiBold,
  })

  if (!fontsLoaded && !fontError) {
    return null;
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.js to start wing on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
