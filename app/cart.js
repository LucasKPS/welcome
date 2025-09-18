import React from 'react';
import { View, Text, ScrollView, StyleSheet, Appearance, Image, Pressable } from 'react-native';
import { useNavigation } from 'expo-router';
import { useLayoutEffect } from 'react';
import { useCart } from '../constants/CartContext.js';

export default function CartScreen() {
  const { cart } = useCart();
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === 'dark'
    ? { background: '#1a1a1a', text: '#fff', priceColor: '#2ecc71', detailText: '#ccc', cardBackground: '#252525', cardBorder: '#444', buttonBackground: '#2ecc71', buttonText: '#fff' }
    : { background: '#fff', text: '#333', priceColor: '#2c6e49', detailText: '#666', cardBackground: '#f9f9f9', cardBorder: '#ccc', buttonBackground: '#2c6e49', buttonText: '#fff' };
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Carrinho',
      headerStyle: { backgroundColor: theme.background },
      headerTintColor: theme.text,
    });
  }, [navigation, theme.background, theme.text]);

  const total = cart.reduce((sum, item) => sum + parseFloat(item.price.replace('R$ ', '')), 0).toFixed(2);

  const handleCheckout = () => {
    alert('Funcionalidade de checkout ainda não implementada!');
    // Adicione aqui a lógica de checkout (ex.: navegação para uma tela de pagamento)
  };

  return (
    <ScrollView style={{ backgroundColor: theme.background }}>
      {cart.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={[styles.emptyText, { color: theme.text }]}>O carrinho está vazio.</Text>
        </View>
      ) : (
        <View style={styles.container}>
          {cart.map((item, index) => (
            <View key={index} style={[styles.itemCard, { backgroundColor: theme.cardBackground, borderColor: theme.cardBorder }]}>
              <Image source={item.image} style={styles.itemImage} resizeMode="contain" />
              <View style={styles.itemDetails}>
                <Text style={[styles.itemTitle, { color: theme.text }]}>{item.title}</Text>
                <Text style={[styles.itemPrice, { color: theme.priceColor }]}>Preço: {item.price}</Text>
              </View>
            </View>
          ))}
          <View style={[styles.totalContainer, { borderTopColor: theme.cardBorder }]}>
            <Text style={[styles.totalLabel, { color: theme.text }]}>Total</Text>
            <Text style={[styles.totalAmount, { color: theme.priceColor }]}>R$ {total}</Text>
          </View>
          <Pressable style={[styles.checkoutButton, { backgroundColor: theme.buttonBackground }]} onPress={handleCheckout}>
            <Text style={[styles.checkoutButtonText, { color: theme.buttonText }]}>Finalizar Compra</Text>
          </Pressable>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 80, // Espaço extra para o botão na parte inferior
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    height: '100%',
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
  },
  itemCard: {
    flexDirection: 'row',
    borderRadius: 12,
    borderWidth: 1,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  itemImage: {
    width: 80,
    height: 80,
    marginRight: 12,
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 16,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    marginTop: 12,
    borderTopWidth: 1,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkoutButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  checkoutButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});