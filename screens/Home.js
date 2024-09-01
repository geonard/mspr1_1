import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GroupList from './GroupList'; 
import SiteMap from './SiteMap'; 

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>CONCERTS</Text>
      <View style={styles.groupListContainer}>
        <GroupList /> {/* Intégrez le composant GroupList ici */}
      </View>
      <View style={styles.siteMapContainer}>
        <SiteMap /> {/* Intégrez le composant SiteMap ici */}
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70, // Assurez-vous que cela correspond à la hauteur de la navbar + un petit espace
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10, 
    textAlign: 'center',
  },
  groupListContainer: {
    width: '100%',
    padding: 10,
    marginBottom: 20, 
  },
  siteMapContainer: {
    width: '100%',
    padding: 10,
  },
});
