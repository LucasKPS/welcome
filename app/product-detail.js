import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Appearance, Pressable } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useCart } from '../constants/CartContext.js';
import { MENU_IMAGES } from '../constants/MenuImages.js';

export default function ProductDetailScreen() {
  const { id, title, description } = useLocalSearchParams();
  const { addToCart } = useCart();
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === 'dark' 
    ? { background: '#1a1a1a', text: '#fff', priceColor: '#2ecc71', detailText: '#ccc', cardBackground: '#252525', cardBorder: '#444', buttonBackground: '#2ecc71', buttonText: '#fff' }
    : { background: '#fff', text: '#333', priceColor: '#2c6e49', detailText: '#666', cardBackground: '#f9f9f9', cardBorder: '#ccc', buttonBackground: '#2c6e49', buttonText: '#fff' };

  const productDetails = {
    1: { price: "R$ 5,00", details: "Café espresso puro, extraído com pressão para um sabor intenso." },
    2: { price: "R$ 6,00", details: "Espresso diluído com água quente, ideal para um café mais leve." },
    3: { price: "R$ 7,00", details: "Espresso com leite vaporizado e uma camada de espuma cremosa." },
    4: { price: "R$ 8,00", details: "Mistura equilibrada de espresso, leite vaporizado e espuma densa." },
    5: { price: "R$ 9,00", details: "Espresso combinado com chocolate e leite vaporizado, com toque de creme." },
  };

  const item = productDetails[id] || { price: "R$ N/A", details: "Informações não disponíveis." };
  const image = MENU_IMAGES.find(img => img.id === parseInt(id))?.image || require('../assets/images/Cafe-Espresso.png');

  const handleBuy = () => {
    const newItem = { id, title, price: item.price, image }; // Inclui a imagem no item
    addToCart(newItem);
    alert(`"${title}" adicionado ao carrinho!`);
  };

  return (
    <ScrollView
      style={{ backgroundColor: theme.background }}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={[styles.title, { color: theme.text }]}>{title}</Text>
      <View style={[styles.card, { backgroundColor: theme.cardBackground, borderColor: theme.cardBorder }]}>
        <Image
          source={image}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={[styles.price, { color: theme.priceColor }]}>Preço: {item.price}</Text>
        <Text style={[styles.details, { color: theme.detailText }]}>{item.details}</Text>
        <Pressable style={[styles.buyButton, { backgroundColor: theme.buttonBackground }]} onPress={handleBuy}>
          <Text style={[styles.buyButtonText, { color: theme.buttonText }]}>Comprar</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
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
    width: '90%',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  details: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 16,
  },
  buyButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 16,
    width: '100%',
    alignItems: 'center',
  },
  buyButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});