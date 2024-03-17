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

        <View style={styles.base} borderRadius={10}>
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
        height: "90%",
        width: "90%",
        alignSelf: "center",
        borderRadius: 20,
        justifyContent:"flex-end",
        alignItems: "right",
        marginBottom: 10
    },
    baseText: {
        backgroundColor:colors.glossaryImageText,
        fontFamily: "Poppins_600SemiBold",
        textAlign: "center",
        textAlignVertical: "bottom",
        flexBasis: "",
        fontSize: 24,
        width:"40%",
        marginLeft:"50%",
        marginBottom:"10%",
        overflow:"hidden",
        borderRadius:10
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

