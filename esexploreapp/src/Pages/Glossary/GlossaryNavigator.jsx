import Factions from '../Factions/Factions';
import Home from '../Home/Home';
import Creatures from '../Creatures/Creatures';



const GlossaryNavigator = () => {
    return (
        <GlossaryTab.Navigator options={defaultScreenOptions}>
            <GlossaryTab.Screen 
                name="Home"
                component={Home}
                options={{ title: 'Glossary Home'}}
            />
            <GlossaryTab.Screen 
                name="Factions" 
                component={Factions}
                options={{ title: 'Factions' }}
            />
            <GlossaryTab.Screen 
                name="Creatures" 
                component={Creatures}
                options={{ title: 'Glossary Home' }}
            />
        </GlossaryTab.Navigator>
    );
}


// Define your default styles for the header
const defaultScreenOptions = {
    headerStyle: {
      backgroundColor: '#a3916f', // Your default background color
    },
    headerTitleStyle: {
      color: 'white', // Your default title color
      fontFamily: 'Poppins_600SemiBold', // Your default font family
    },
    headerTintColor: 'white', // Color of the back button and other header tints
    animation: 'none', // Disable the animation
    headerShown:false,
    initialRouteName: 'Home',
    tabBarStyle: { display: 'none'},
    swipeEnabled: true
  };
  

export default GlossaryNavigator;
