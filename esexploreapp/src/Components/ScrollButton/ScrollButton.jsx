
import { StyleSheet, Text, View, Button, Dimensions, TouchableOpacity } from 'react-native';
import { colors } from '../../consts/colors';
import { fontSizes } from '../../consts/fontSizes';
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

const ScrollButton = (props) => {

    let [fontsLoaded, fontError] = useFonts({
        Poppins_600SemiBold,
    })

    if (!fontsLoaded && !fontError) {
        return null;
    }




    return (
        <TouchableOpacity>

        <View style={styles.base}>
            <Text style={styles.baseText}>
                {props.text}
            </Text>
        </View>
        </TouchableOpacity >

    );
}


export default ScrollButton;

const styles = StyleSheet.create({
    base: {
        backgroundColor: colors.offWhite,
        height:80,
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
        flexBasis:"",
        fontSize:24
    }
});

