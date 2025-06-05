import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

import cafee from '@/assets/images/cafee.png';

export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground source={cafee} style={styles.image} resizeMode="cover">
        <Text style={styles.title}>Coffee Shop</Text>

        <Link href="/contact" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Contact us</Text>
          </Pressable>
        </Link>
        {/* Botão para o Menu */}
        <Link href="/menu" asChild>
          <Pressable style={{ ...styles.button, marginTop: 20 }}>
            <Text style={styles.buttonText}>Menu</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 120,
  },
  button: {
    paddingHorizontal: 30,
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  buttonText: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    includeFontPadding: false,
  },
});
