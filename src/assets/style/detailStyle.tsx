import {StyleSheet} from 'react-native';
const style = StyleSheet.create({
  Heading: {
    textAlign: 'center',
    marginBottom: 5,
  },

  Text: {
    paddingTop: 20,
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'justify',
    lineHeight: 50,
  },

  Divider: {
    backgroundColor: 'purple',
    width: 200,
  },

  Box: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 5,
    marginTop: 20,
    /*    borderWidth: 6,
    borderColor: 'purple',
    borderBottomWidth: 0, */
  },
});

export {style};
