import { View, Text, TouchableOpacity,  } from 'react-native';
import { useFonts, Oxygen_300Light, Oxygen_400Regular, Oxygen_700Bold, } from "@expo-google-fonts/oxygen";
import { Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './stylesHome'

export default function Home() {
  const [fontLoaded] = useFonts({
    Oxygen_300Light,
    Oxygen_400Regular,
    Oxygen_700Bold,
  });

  if (!fontLoaded) {
    return null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Minhas{'\n'}Anotações</Text>

        <TouchableOpacity style={styles.menuIcon} activeOpacity={0.7}>
          <MaterialCommunityIcons name='dots-hexagon' size={60} color={'#fff'}/>        
        </TouchableOpacity>
      </View>

      <View style={styles.options}>
        <TouchableOpacity style={styles.optionsButton} activeOpacity={0.7}>
          <Text style={styles.optionsText}>Tudo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionsButton} activeOpacity={0.7}>
          <Text style={styles.optionsText}>Importante!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionsButton} activeOpacity={0.7}>
          <Text style={styles.optionsText}>Tarefas</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.newWorkspace}>
          <TouchableOpacity style={styles.newWorkspaceButton}>
            <MaterialCommunityIcons name='plus' size={60} color={'#fff'}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

