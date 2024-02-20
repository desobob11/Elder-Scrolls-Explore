import { FlatList, Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import styles from "../../styles/styles";

import pageIndex from "../index"
import { useEffect, useState } from "react";
import GlossaryNavigator from "./GlossaryNavigator";
  
const Glossary = ({navigation}) => {

    const pages = pageIndex.pages;
    const [index, setIndex] = useState(0);

    useEffect(() => {
        navigation.navigate(pages[index])
    }, [])

    const switchPage = () => {
        console.log(pages)
        setIndex(index + 1)
        if (index > pages.length - 1) {
            index = 0;
        }
        console.log(pages[index])
        navigation.navigate(pages[index])
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <GlossaryNavigator />
            </View>
        </SafeAreaView>
    )
}

export default Glossary;