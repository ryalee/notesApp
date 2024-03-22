import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#000',
  },

  header: {
    marginVertical: 70,
    marginHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  title: {
    fontFamily: "Oxygen_400Regular",
    fontSize: 50,
    color: '#fff',
  },

  options: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  optionsButton: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 16,
    borderRadius: 40,
  },

  optionsText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Oxygen_300Light',
  },

  newWorkspace: {
    backgroundColor: '#212121',
    justifyContent: 'center',
    alignItems: 'center',
    width: '45%',
    height: '50%',
    borderRadius: 20,
    marginTop: 30,
    marginLeft: 30,
  },

  newWorkspaceButton: {
    
  },
});

export default styles;