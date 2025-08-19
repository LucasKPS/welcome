import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../assets/images/back.jpg')} 
        style={styles.image} 
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Coffee Shop</Text>

          <Link href="/menu" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Menu</Text>
            </Pressable>
          </Link>
          
          <Link href="/contact" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Contact us</Text>
            </Pressable>
          </Link>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 60,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  button: {
    width: '80%',
    padding: 15,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});