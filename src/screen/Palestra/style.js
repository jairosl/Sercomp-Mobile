import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5C3BA0',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth,
  },

  header: {
    alignItems: 'center',
    justifyContent: 'center',
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
    color: '#fff',
    fontSize: 28,
    letterSpacing: 0.5,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: windowWidth - 50,
    padding: 10,
    paddingLeft: 15,
    marginRight: 10,
    marginBottom: 20,
  },

  cardContainer: {
    marginVertical: 5,
  },

  cardDataHora: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    textAlign: 'justify',
  },
});

export default style;
