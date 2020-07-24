import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#5C3BA0',
    width: windowWidth,
  },

  header: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 10,
  },

  logo: {
    height: 80,
  },

  title: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },

  titleText: {
    color: 'white',
    fontSize: 28,
    letterSpacing: 0.5,
  },

  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: windowWidth - 50,
    padding: 10,
    paddingLeft: 15,
  },

  cardContainer: {
    marginVertical: 5,
  },

  cardLabel: {
    color: '#5C3BA0',
    letterSpacing: 0.5,
    fontSize: 22,
  },

  cardData: {
    color: 'gray',
    fontSize: 20,
    letterSpacing: 0.5,
  },

  containerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  // '#BE8E00
  button: {
    backgroundColor: 'red',
    height: 40,
    width: 180,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 30,
  },

  buttonText: {
    color: '#fff',
    fontSize: 20,
    letterSpacing: 0.5,
  },
});

export default style;
