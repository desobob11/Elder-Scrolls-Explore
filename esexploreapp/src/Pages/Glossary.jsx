import { FlatList, Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import styles from "../styles/styles";

const categories = [
    { key: '1', title: 'Ash Creatures' },
    { key: '2', title: 'Daedra' },
    { key: '3', title: 'Beasts' },
    { key: '4', title: 'Special' },
  ];
  
const Glossary = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.imageBanner} source={require("../../assets/creatures.jpg")}/>
                <Text style={styles.bannerLabel}>Creatures</Text>
            </View>
                <FlatList
                    data={categories}
                    keyExtractor={item => item.key}
                    renderItem={({ item }) => (
                        <View style={styles.listItem}>
                            <Image style={styles.icon} source={require("../../assets/icons/menu.png")}/>
                            <Text style={styles.listItemText}>{item.title}</Text>
                        </View>
            )}
                />
        </SafeAreaView>
    )
}

export default Glossary;