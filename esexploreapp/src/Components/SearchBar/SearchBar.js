import { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TextInput, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements'
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { colors } from '../../consts/colors';
import { fontSizes } from '../../consts/fontSizes';
import Header from '../../Components/Header/Header';
import ScrollButton from '../../Components/ScrollButton/ScrollButton';
import axios from "axios"
import { urls, hostname, port } from '../../consts/nodeURLs';
import GlossaryImage from '../../Components/GlossaryImage/GlossaryImage';
import glossaryCategories from '../../consts/glossaryCategories';
//import Icon from 'react-native-vector-icons/FontAwesome'




const SearchBarCustom = (props) => {

    const [defaultText, setDefaultText] = useState("search...")
    let [fontsLoaded, fontError] = useFonts({
        Poppins_600SemiBold,
    })

    useEffect(() => {
        alert("hello")
    }, [defaultText]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <View style={styles.base}>
            <TextInput style={styles.input} value={defaultText}>

            </TextInput>
            <TouchableOpacity style={styles.icon}>
            <Icon name="search"
            type="font-awesome"
            color={colors.morrowind_gold_deep}
            reverseColor={colors.morrowing_white}
            raised
            reverse
            onFocus={() => setDefaultText("")}
            >
                
            
            </Icon>
        </TouchableOpacity>

        </View>
    );

}

export default SearchBarCustom;


const styles = StyleSheet.create({
    base: {
        width:"90%",
        alignSelf:"center",
        height:52,
        borderRadius:20,
        marginTop:10,
        flexDirection:"row",
    },
    input: {
        width:"80%",
        height:"100%",
        backgroundColor:colors.morrowing_white,
        color:colors.black,
        paddingLeft:10,
        fontSize:fontSizes.bodySize,
        fontFamily: "Poppins_600SemiBold",
        borderRadius:20
    },
    icon: {
        justifyContent:"center"
    
    }
});
