import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Creatures = ({navigation}) => {

    const swit = () => {
        navigation.replace("Home", {name:"Home"})
    }
    return (
        <Button title="Creatures" onPress={swit}>
            Hello
        </Button>

    );
}


export default Creatures;

const styles = StyleSheet.create({});
