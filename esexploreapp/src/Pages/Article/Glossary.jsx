import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { fontSizes } from '../../consts/fontSizes';
import Header from '../../Components/Header/Header';
import ScrollButton from '../../Components/ScrollButton/ScrollButton';
import axios from "axios"
import { urls, hostname, port } from '../../consts/nodeURLs';
import GlossaryImage from '../../Components/GlossaryImage/GlossaryImage';

// TODO: URL for creatures view wil be dynamic. Could use props for this
const Glossary = ({ route, navigation }) => {
    // get props from navigator
    const props = route.params;

    const horizontalData = [
        "testing", "testing2", "testing3", "testing4"
    ]

    const get_names = () => {

    }

    const load_buttons = () => {
        var html = [];

        for (let i = 0; i < names.length; ++i) {
            html.push(<ScrollButton key={i} text={names[i]}></ScrollButton>)
        }
        setButtonsData(html);
    }

    const [names, setNames] = useState([]);
    const [buttonsData, setButtonsData] = useState([]);

    useEffect(() => {
        if (names.length === 0) {
            get_names();
        }
        if (names.length > 0) {
            load_buttons();
        }


    }, [, names]);



    let [fontsLoaded, fontError] = useFonts({
        Poppins_600SemiBold,
    })





    if (!fontsLoaded && !fontError) {
        return null;
    }


    const buttons = (
        <ScrollView style={{ flexGrow: 1 }}>
            <ScrollButton text="" ></ScrollButton>
            <ScrollButton text="" ></ScrollButton>
            <ScrollButton text="" ></ScrollButton>
            <ScrollButton text="" ></ScrollButton>
            <ScrollButton text="" ></ScrollButton>
            <ScrollButton text="" ></ScrollButton>
        </ScrollView>
    );





    return (
        <View style={styles.mainPage}>
            <Header text={""} />
            <View style={styles.imgBox}>
            <FlatList style={{flexGrow:1}}
                data={horizontalData}
                horizontal
    
                showsHorizontalScrollIndicator={false}
                renderItem={({item})=> <GlossaryImage text={item}></GlossaryImage>}
              //  keyExtractor={item => item.id}
                            >
            </FlatList>
            </View>
            <View style={styles.scrollBox}>
                <ScrollView style={{ flexGrow: 1 }}>

                    {buttons && names.length === 0 ? buttons : buttonsData}

                </ScrollView>
            </View>
        </View>

    );
}



export default Glossary;

const styles = StyleSheet.create({
    mainPage: {
        backgroundColor: "#A3916F",
        height: "100%",
        width: "100%",
    },
    imgBox: {
        height: "25%",
        backgroundColor: "#E9DE9E",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flex:1
        //height:"100%"
    },
    scrollBox: {
        paddingTop: 10,
        flex: 1
    },
    bodyText: {
        fontFamily: "Poppins_600SemiBold",
        width: "80%",
        fontSize: fontSizes.bodySize
    },
    horizontalImgList: {
      
    }
});
