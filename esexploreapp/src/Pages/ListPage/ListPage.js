import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { fontSizes } from '../../consts/fontSizes';
import Header from '../../Components/Header/Header';
import ScrollButton from '../../Components/ScrollButton/ScrollButton';
import axios from "axios"
import { urls, hostname, port } from '../../consts/nodeURLs';

// TODO: URL for creatures view wil be dynamic. Could use props for this
const ListPage = ({ route, navigation }) => {
    // get props from navigator
    const props = route.params;



    const get_names = () => {
        //axios.get(`${hostname}:${port}/${url}`).then(response => setNames(response.data()), x => alert(x.data()));
        console.log(props.url);
        axios.post(`http://${hostname}:${port}${"/Pathnames"}`, {path:props.url}).then((response) => {setNames(response.data); console.log(response.data)}, x => alert(x));
    }

    const load_buttons = () => {
        var html = [];

        for (let i = 0; i < names.length; ++i) {
            html.push(<ScrollButton key={i} text={names[i]}></ScrollButton>)
        }
        setButtonsData(html);
    }


    const test_post = () => {
     //   console.log("hello");
      //  axios.post(`http://${hostname}:${port}${"/Pathnames"}`, {path:"/testing"}).then(x => console.log(x), x => console.log(x));
        //axios.get(`http://${hostname}:${port}${"/Creatures"}`).then(response => console.log(response.data), x => console.log(x));
    }

    const [names, setNames] = useState([]);
    const [buttonsData, setButtonsData] = useState([
        <ScrollButton key={0} onPress={test_post} text="" ></ScrollButton>,
        <ScrollButton key={1} text="" ></ScrollButton>,
        <ScrollButton key={2} text="" ></ScrollButton>,
        <ScrollButton key={3} text="" ></ScrollButton>,
        <ScrollButton key={4} text="" ></ScrollButton>,
        <ScrollButton key={5} text="" ></ScrollButton>
        ]);

    useEffect(() => {
        if (names.length === 0) {
            get_names();
        }
        if (names.length > 0) {
            load_buttons();
        }
        console.log(names);
    }, [, names]);



    let [fontsLoaded, fontError] = useFonts({
        Poppins_600SemiBold,
    })





    if (!fontsLoaded && !fontError) {
        return null;
    }





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

                {buttonsData}

                </ScrollView>
            </View>
        </View>

    );
}



export default ListPage;

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