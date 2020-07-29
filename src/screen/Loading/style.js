import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5C3BA0',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: windowWidth,
  },

  header: {
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 30,
  },

  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth,
    flexDirection: 'row',
  },

  loadingText: {
    fontSize: 30,
    marginLeft: 10,
    color: '#fff',
  },

  Footer: {
    flexDirection: 'row',
    width: windowWidth,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  FooterText: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 5,
  },
});

export default style;
