import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get('window').width;
const height = (screenWidth * 9)/16;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#E9C69E',
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#a3916f',
    textAlign: 'left',
    marginTop: 20,
    marginLeft: 20,
  },
  imageContainer: {
    position: 'relative', 
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  imageBanner: {
    marginVertical: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    overflow: 'hidden',
    alignSelf: 'center',
    width: '95%',
    height: height,
    maxHeight: '100%',
    resizeMode: 'stretch',
    zIndex: -1,
  },
  bannerImage: {
    width: '100%',
    height: 150,
  },
  bannerLabel: {
    position: 'absolute',
    bottom: 10, 
    right: 50,
    color: 'white',
    backgroundColor: '#cbcbcb', 
    padding: 5,
    borderRadius: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#cbcbcb',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    elevation: 3,
  },
  icon: {
    marginRight: 15,
    maxHeight: 10,
    maxWidth: 10,
  },
  listItemText: {
    fontSize: 18,
    color: 'black',
  },
  headerText: {
    backgroundColor: 'White',
  },
});

  export default styles;