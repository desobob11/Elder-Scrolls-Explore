
const Creatures = () => {
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.imageBanner} source={require("../../assets/factions.jpg")}/>
                <Text style={styles.bannerLabel}>Factions</Text>
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