import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GroupList from './GroupList'; // Importez le composant GroupList
import Tickets from './Tickets'; // Importez le composant Tickets
import SiteMap from './SiteMap'; // Importez le composant SiteMap

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Section CONCERTS */}
      <Text style={styles.header}>CONCERTS</Text>
      <View style={styles.groupListContainer}>
        <GroupList /> {/* Intégrez le composant GroupList ici */}
      </View>

      {/* Section BILLETERIE */}
      <Text style={styles.header}>BILLETERIE</Text>
      <View style={styles.groupListContainer}>
        <Tickets /> {/* Intégrez le composant Tickets ici */}
      </View>

      {/* Section PLAN DU SITE */}
      <Text style={styles.header}>PLAN DU SITE</Text>
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
    justifyContent: 'flex-start', // Aligner le contenu au début
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10, // Ajouter un peu de padding autour de l'écran
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10, // Espacement sous le titre
    width: '100%', // Assurer que le titre occupe toute la largeur disponible
    textAlign: 'center', // Centrer le titre
  },
  groupListContainer: {
    width: '100%',
    padding: 10,
    marginBottom: 20, // Espacement sous la liste des groupes
  },
  siteMapContainer: {
    width: '100%',
    padding: 10,
    marginTop: 20, // Espacement au-dessus du Plan du Site
  },
});
