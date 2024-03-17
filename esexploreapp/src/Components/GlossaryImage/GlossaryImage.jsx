import { StyleSheet, Text, View, Button, Dimensions, TouchableOpacity } from 'react-native';
import { colors } from '../../consts/colors';
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

const GlossaryImage = (props) => {

    let [fontsLoaded, fontError] = useFonts({
        Poppins_600SemiBold,
    })

    if (!fontsLoaded && !fontError) {
        return null;
    }
    
    return (
        <View style={styles.container}>
        <TouchableOpacity delayPressIn={10} style={styles.opacity} onPress={props.onPress}>

        <View style={styles.base}>
            <Text style={styles.baseText}>
                {props.text}
            </Text>
        </View>
        </TouchableOpacity >
        </View >

    );
}


export default GlossaryImage;

const styles = StyleSheet.create({
    base: {
        backgroundColor: colors.offWhite,
        height:"100%",
        width:"90%",
        alignSelf:"center",
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center",
        marginBottom:10
    },
    baseText: {
        fontFamily:"Poppins_600SemiBold",
        textAlign:"center",
        textAlignVertical:"center",
        fontSize:24
    },
    opacity: {
        width:"100%",
        height:"100%"

    },
    container: {
        width:Dimensions.get("window").width,
        height:"100%"
    }
});

