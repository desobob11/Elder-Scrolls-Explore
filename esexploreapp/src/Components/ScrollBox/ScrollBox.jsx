import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import { fontSizes } from '../../consts/fontSizes';


const Header = (props) => {


    return (
        <Text style={styles.header}>
            {props.text}
        </Text>
    );
}


export default Header;

const styles = StyleSheet.create({
    scrollBox: {
        
    }
});
