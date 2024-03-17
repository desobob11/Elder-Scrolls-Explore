import { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Button } from 'react-native';
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

    const get_names = () => {

    }

    const [names, setNames] = useState([]);
    const [buttonsData, setButtonsData] = useState([]);

    const[currentCategory, setCurrentCategory] = useState(glossaryCategories[0]);
    const [categoriesData, setCategoriesData] = useState({})

    useEffect(() => {
        if (names.length === 0) {
            get_names();
        }
        if (names.length > 0) {
            load_buttons();
        }
        alert(currentCategory.name);
    }, [, names, currentCategory]);

    const get_selected_category = ({viewableItems}) => {
        if (viewableItems.length === 1) {
            //console.log(viewableItems[0].item);
            setCurrentCategory(viewableItems[0].item);
        }
    }


    let [fontsLoaded, fontError] = useFonts({
        Poppins_600SemiBold,
    })





    if (!fontsLoaded && !fontError) {
        return null;
    }


    const categoriesDefault = (
        [{id:0, text:""}]
    );

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
            <FlatList 
                data={glossaryCategories}
                horizontal
    //            onMomentumScrollEnd={({item, item2}) => alert(item)}
    
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
        flex:1
    },
    imgBox: {
        height: "25%",
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
