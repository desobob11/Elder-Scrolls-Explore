import { FlatList, Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import styles from "../../styles/styles";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "../Home/Home";
import Factions from "../Factions/Factions";
import Creatures from "../Creatures/Creatures";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

const Glossary = () => {

    return (
            <Tab.Navigator>
            <Tab.Screen 
                    name="Factions" 
                    component={Factions}
                    options={{ title: 'Factions' }}
                />
                <Tab.Screen 
                    name="Home"
                    component={Home}
                    options={{ title: 'Glossary Home'}}
                />
                <Tab.Screen 
                    name="Creatures" 
                    component={Creatures}
                    options={{ title: 'Glossary Home' }}
                />
            </Tab.Navigator>
    )
}

export default Glossary;