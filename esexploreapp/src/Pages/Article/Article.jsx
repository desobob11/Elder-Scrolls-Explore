import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { fontSizes } from '../../consts/fontSizes';
import Header from '../../Components/Header/Header';
import ScrollButton from '../../Components/ScrollButton/ScrollButton';
import axios from "axios"
import { urls, hostname, port } from '../../consts/nodeURLs';

// TODO: URL for creatures view wil be dynamic. Could use props for this
const Article = ({ route, navigation }) => {
    // get props from navigator
    const props = route.params;



    const get_names = () => {
        //axios.get(`${hostname}:${port}/${url}`).then(response => setNames(response.data()), x => alert(x.data()));
        axios.get(`http://${hostname}:${port}${props.url}`).then(response => setNames(response.data), x => alert(x));
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
            <Header text={props.header} />
            <View style={styles.imgBox}>
                <Text style={styles.bodyText}>
                    {props.body}
                </Text>
            </View>
            <View style={styles.scrollBox}>
                <ScrollView style={{ flexGrow: 1 }}>

                    {buttons && names.length === 0 ? buttons : buttonsData}

                </ScrollView>
            </View>
        </View>

    );
}



export default Article;

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
        alignItems: "center"
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
    }
});
