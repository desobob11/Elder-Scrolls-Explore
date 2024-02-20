import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "../Home/Home";
import Factions from "../Factions/Factions";
import Creatures from "../Creatures/Creatures";

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