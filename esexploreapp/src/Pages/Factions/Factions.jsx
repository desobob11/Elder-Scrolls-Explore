import { FlatList, Image, SafeAreaView,Text, View } from "react-native";
import styles from "../../styles/styles";

const Factions = () => {
    
    const categories = [
        { key: '1', title: 'Blades' },
        { key: '2', title: 'Census and Excise' },
        { key: '3', title: 'Dark Brotherhood' },
        { key: '4', title: 'East Empire Company' },
        { key: '5', title: 'Fighters Guild' },
        { key: '6', title: 'Imperial Cult' },
        { key: '7', title: 'Imperial Legion' },
        { key: '8', title: 'Mages Guild' },
        { key: '9', title: 'Morag Tong' },
        { key: '10', title: 'Thieves Guild' },
        { key: '11', title: 'Tribunal Temple' },
        { key: '12', title: 'Vampires' },
        { key: '13', title: 'Worship' },
      ];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.imageBanner} source={require("../../../assets/factions.jpg")}/>
                <Text style={styles.bannerLabel}>Factions</Text>
            </View>
                <FlatList
                    data={categories}
                    keyExtractor={item => item.key}
                    renderItem={({ item }) => (
                        <View style={styles.listItem}>
                            <Image style={styles.icon} source={require("../../../assets/icons/menu.png")}/>
                            <Text style={styles.listItemText}>{item.title}</Text>
                        </View>
                        
                )}
            />
        </SafeAreaView>
    )
}

export default Factions;