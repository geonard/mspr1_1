import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Assurez-vous d'avoir cette dépendance installée

const CustomHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity 
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        style={styles.menuButton}
      >
        <Icon name="menu" size={30} color="#fff" /> {/* Icône hamburger */}
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Logo</Text> {/* Remplacez par un logo ou autre */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50', // Couleur de fond de l'en-tête
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  menuButton: {
    marginRight: 15, // Espacement entre le bouton et le logo
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center', // Centre le logo
  },
  logoText: {
    color: '#fff', // Couleur du texte/logo
    fontSize: 20,
  },
});

export default CustomHeader;
