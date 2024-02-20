import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView } from 'react-native';
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { fontSizes } from '../../consts/fontSizes';
import Header from '../../Components/Header/Header';
import ScrollButton from '../../Components/ScrollButton/ScrollButton';


const Creatures = ({navigation}) => {

    let [fontsLoaded, fontError] = useFonts({
        Poppins_600SemiBold,
    })

    if (!fontsLoaded && !fontError) {
        return null;
    }


    return (
        <View style={styles.mainPage}>
            <Header text="creatures"/>
            <View style={styles.imgBox}>
            </View>
            <View style={styles.scrollBox}>
                <ScrollView style={{flexGrow:1}}>

    
                <ScrollButton text="Sample"/>
                    <ScrollButton text="Sample" />
                    <ScrollButton text="Sample" />
                    <ScrollButton text="Sample" />
                    <ScrollButton text="Sample" />
                    <ScrollButton text="Sample" />
                    <ScrollButton text="Sample" />
                    <ScrollButton text="Sample" />
                    <ScrollButton text="Sample" />
                    <ScrollButton text="Sample" />
                    <ScrollButton text="Sample" />
                    <ScrollButton text="Sample" />
                    <ScrollButton text="Sample" />
                    <ScrollButton text="Sample" />
                    <ScrollButton text="Sample" />
                    <ScrollButton text="Sample" />
                    <ScrollButton text="Sample" />
                    <ScrollButton text="Sample" />
                </ScrollView>
            </View>
        </View>

    );
}


export default Creatures;

const styles = StyleSheet.create({
    mainPage: {
        backgroundColor:"#A3916F",
        height: "100%",
        width:"100%",
    },
    imgBox: {
        height:"25%",
        backgroundColor:"#E9DE9E",
        borderBottomLeftRadius:20,
        borderBottomRightRadius: 20
        //height:"100%"
    },
    scrollBox: {
        paddingTop:10,
        flex:1
    }
});
