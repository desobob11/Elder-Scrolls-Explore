import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button} from 'react-native';
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Home = ({navigation}) => {

    const swit = () => {
        navigation.replace("Creatures", { name: "Creatures"})
    }
    return (
        <Button title="Hello">
        Hello
        </Button>

    );
}


export default Home;

const styles = StyleSheet.create({});
