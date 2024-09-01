import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function Faq() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>FAQ - Questions Fréquemment Posées</Text>
        
        <View style={styles.faqItem}>
          <Text style={styles.question}>Q1: Comment puis-je acheter des tickets pour les concerts ?</Text>
          <Text style={styles.answer}>R1: Vous pouvez acheter des tickets via notre site web ou à la billetterie sur place. Les tickets sont disponibles à l'achat en ligne dès que les ventes sont ouvertes.</Text>
        </View>
        
        <View style={styles.faqItem}>
          <Text style={styles.question}>Q2: Où se trouvent les concerts ?</Text>
          <Text style={styles.answer}>R2: Les concerts se déroulent dans diverses salles à travers la ville. Vous pouvez consulter la carte des lieux sur notre site pour plus de détails sur les emplacements.</Text>
        </View>
        
        <View style={styles.faqItem}>
          <Text style={styles.question}>Q3: Quelles sont les politiques de remboursement ?</Text>
          <Text style={styles.answer}>R3: Les remboursements sont possibles sous certaines conditions. Veuillez consulter notre politique de remboursement sur notre site web ou contacter notre service client pour plus d'informations.</Text>
        </View>

        <View style={styles.faqItem}>
          <Text style={styles.question}>Q4: Puis-je modifier ma réservation après l'achat ?</Text>
          <Text style={styles.answer}>R4: Les modifications de réservation peuvent être faites sous certaines conditions et peuvent entraîner des frais. Veuillez contacter notre service client dès que possible pour discuter des options disponibles.</Text>
        </View>
        
        <View style={styles.faqItem}>
          <Text style={styles.question}>Q5: Quels sont les moyens de paiement acceptés ?</Text>
          <Text style={styles.answer}>R5: Nous acceptons divers moyens de paiement, y compris les cartes de crédit, les cartes de débit et certains services de paiement en ligne. Vous pouvez sélectionner votre méthode de paiement préférée lors de l'achat.</Text>
        </View>

        <View style={styles.faqItem}>
          <Text style={styles.question}>Q6: Y a-t-il des réductions pour les groupes ou les étudiants ?</Text>
          <Text style={styles.answer}>R6: Oui, nous offrons des réductions pour les groupes et les étudiants. Veuillez consulter notre site web pour plus de détails sur les réductions disponibles et comment en bénéficier.</Text>
        </View>

        <View style={styles.faqItem}>
          <Text style={styles.question}>Q7: Quels sont les horaires des concerts ?</Text>
          <Text style={styles.answer}>R7: Les horaires des concerts varient en fonction des événements. Vous pouvez consulter les horaires spécifiques pour chaque concert sur notre site web ou dans la section événements.</Text>
        </View>
        
        <View style={styles.faqItem}>
          <Text style={styles.question}>Q8: Que faire si j'ai perdu mon ticket ?</Text>
          <Text style={styles.answer}>R8: Si vous perdez votre ticket, veuillez contacter notre service client immédiatement. Nous pourrons vous aider à résoudre le problème, mais nous vous conseillons de conserver une copie électronique ou imprimée de votre ticket.</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  scrollContainer: {
    padding: 20,
    // Ajuster paddingTop pour un espacement réduit
    paddingTop: 10, 
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    // Réduire l'espace entre le titre et le contenu suivant
    marginBottom: 10, 
    textAlign: 'center',
  },
  faqItem: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  answer: {
    fontSize: 16,
    lineHeight: 22,
  },
});
