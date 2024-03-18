import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { fontSizes } from '../../consts/fontSizes';
import { colors } from '../../consts/colors';


const Header = (props) => {

    let [fontsLoaded, fontError] = useFonts({
        Poppins_600SemiBold,
    })

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <View style={styles.box}>
            <Text style={styles.header}>
                {props.text}
            </Text>
        </View >
    );
}


export default Header;

const styles = StyleSheet.create({
    header: {
        fontFamily: "Poppins_600SemiBold",
        color: "#ffffff",
        fontSize: fontSizes.headerSize,
        marginLeft:"5%",
        marginTop:"10%",
        color:colors.morrowing_white
    //    shadowColor: '#171717',
      //  shadowOffset: { width: -2, height: 4 },
      //  shadowOpacity: 0.3,
      //  shadowRadius: 3
    },
    box: {
        backgroundColor: colors.morrowind_gold_deep,
        height:"20%",
        fontSize:fontSizes.bodySize,
        color:colors.morrowing_white
    }
});
