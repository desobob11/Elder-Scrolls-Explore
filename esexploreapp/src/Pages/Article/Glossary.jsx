import { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Butto } from 'react-native';
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { fontSizes } from '../../consts/fontSizes';
import Header from '../../Components/Header/Header';
import ScrollButton from '../../Components/ScrollButton/ScrollButton';
import axios from "axios"
import { urls, hostname, port } from '../../consts/nodeURLs';
import GlossaryImage from '../../Components/GlossaryImage/GlossaryImage';
import glossaryCategories from '../../consts/glossaryCategories';

// TODO: URL for creatures view wil be dynamic. Could use props for this
const Glossary = ({ route, navigation }) => {
    // get props from navigator
    const props = route.params;



    const [names, setNames] = useState([]);
    const [buttonsData, setButtonsData] = useState([
        <ScrollButton key={0} text="" ></ScrollButton>,
        <ScrollButton key={1} text="" ></ScrollButton>,
        <ScrollButton key={2} text="" ></ScrollButton>,
        <ScrollButton key={3} text="" ></ScrollButton>,
        <ScrollButton key={4} text="" ></ScrollButton>,
        <ScrollButton key={5} text="" ></ScrollButton>
        ]
    );
    const [renderer, setRenderer] = useState(false);

    const [currentCategory, setCurrentCategory] = useState(glossaryCategories[0]);
    const [categoryCache, setCategoryCache] = useState({});

    useEffect(() => {
      //  get_category_items();   
    }, [, currentCategory]);


    const get_category_items = () => {
       // console.log(categoryCache[currentCategory.name]);
       console.log(`FIRST TIME ${currentCategory.name}`);
        if (categoryCache[currentCategory.name] === undefined) {
            axios.get(`http://${hostname}:${port}/${currentCategory.name}`).then((response) => {    
                var html = [];

                for (let i = 0; i < response.data.length; ++i) {
    
                    html.push(<ScrollButton key={i} text={response.data[i]}></ScrollButton>)
                }
                var updated = categoryCache;
                updated[currentCategory.name] = html;
                setCategoryCache(updated);
                setButtonsData(html);
            }, 
            x => alert(x));
        }
        else {
            console.log(currentCategory.name);
            console.log("here")
            setButtonsData(categoryCache[currentCategory.name]);
        }
    }


    const get_selected_category = ({viewableItems}) => {
        if (viewableItems.length === 1) {
            setCurrentCategory(viewableItems[0].item);
        }
    }

    let [fontsLoaded, fontError] = useFonts({
        Poppins_600SemiBold,
    })


    if (!fontsLoaded && !fontError) {
        return null;
    }


    return (
        <View style={styles.mainPage}>
            <Header text={""} />
            <View style={styles.imgBox}>
            <FlatList 
                data={glossaryCategories}
                horizontal
                onViewableItemsChanged={get_selected_category}
                contentOff
                showsHorizontalScrollIndicator={false}
                renderItem={({item})=> <GlossaryImage text={item.name} style={{flex:1}}></GlossaryImage>}
                pagingEnabled
                keyExtractor={item => item.id}
                            >
            </FlatList>
            </View>
            <View style={styles.scrollBox}>
                <ScrollView style={{ flexGrow: 1 }}>

                    {buttonsData}

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
        flex:1
    },
    imgBox: {
        height: "30%",
        width:"100%",
        backgroundColor: "#E9DE9E",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
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
