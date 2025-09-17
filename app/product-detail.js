import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Appearance } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function ProductDetailScreen() {
  const { id, title, description } = useLocalSearchParams();
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === 'dark' 
    ? { background: '#1a1a1a', text: '#fff', priceColor: '#2ecc71', detailText: '#ccc', cardBackground: '#252525', cardBorder: '#444' }
    : { background: '#fff', text: '#333', priceColor: '#2c6e49', detailText: '#666', cardBackground: '#f9f9f9', cardBorder: '#ccc' };

  // Dados fictícios de preço e informações detalhadas
  const productDetails = {
    1: { price: "R$ 5,00", details: "Café espresso puro, extraído com pressão para um sabor intenso." },
    2: { price: "R$ 6,00", details: "Espresso diluído com água quente, ideal para um café mais leve." },
    3: { price: "R$ 7,00", details: "Espresso com leite vaporizado e uma camada de espuma cremosa." },
    4: { price: "R$ 8,00", details: "Mistura equilibrada de espresso, leite vaporizado e espuma densa." },
    5: { price: "R$ 9,00", details: "Espresso combinado com chocolate e leite vaporizado, com toque de creme." },
  };

  const item = productDetails[id] || { price: "R$ N/A", details: "Informações não disponíveis." };

  return (
    <ScrollView
      style={{ backgroundColor: theme.background }} // Apenas background no style
      contentContainerStyle={styles.contentContainer} // Centralização aplicada aqui
    >
      <Text style={[styles.title, { color: theme.text }]}>{title}</Text>
      <View style={[styles.card, { backgroundColor: theme.cardBackground, borderColor: theme.cardBorder }]}>
        <Image
          source={require('../assets/images/Cafe-Espresso.png')} // Substitua pelo caminho correto baseado no ID
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={[styles.price, { color: theme.priceColor }]}>Preço: {item.price}</Text>
        <Text style={[styles.details, { color: theme.detailText }]}>{item.details}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    padding: 16,
    alignItems: 'center', // Centralização horizontal
    justifyContent: 'center', // Centralização vertical (opcional, ajuste conforme necessário)
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  card: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 16,
    marginBottom: 16,
    width: '90%', // Define uma largura máxima para o card
    alignItems: 'center', // Centraliza os itens dentro do card
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%', // A imagem ocupa a largura total do card
    height: 200,
    marginBottom: 16,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center', // Centraliza o texto do preço
  },
  details: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center', // Centraliza o texto dos detalhes
  },
});