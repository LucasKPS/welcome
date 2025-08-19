import React from 'react';
import { View, Text, StyleSheet, Appearance, Linking, Pressable, Platform, ScrollView, SafeAreaView, Image } from 'react-native';
import { Colors } from '@/constants/Colors';

export default function Contact() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  const styles = createStyles(theme, colorScheme);
  const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;

  return (
    <Container style={Platform.OS === 'web' ? undefined : styles.container} contentContainerStyle={Platform.OS === 'web' ? styles.container : undefined}>
      <View style={styles.headerImgBox}>
        <Image source={require('../assets/images/cafe-icone.png')} style={{ width: 120, height: 120, borderRadius: 60 }} />
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Coffee Shop</Text>
        <Text style={styles.info}>555 Coffee Lane</Text>
        <Text style={styles.info}>Kansas City, KS  55555-1234</Text>
        <Text style={styles.label}>Phone:</Text>
        <Pressable onPress={() => Linking.openURL('tel:5555555555')}>
          <Text style={styles.link}>555-555-5555</Text>
        </Pressable>
        <Text style={styles.or}>or</Text>
        <Pressable onPress={() => Linking.openURL('sms:5555555555')}>
          <Text style={styles.link}>Click Here to Text!</Text>
        </Pressable>
        <Text style={styles.label}>Hours:</Text>
        <Text style={styles.info}>Open 6am to 4pm daily.</Text>
      </View>
    </Container>
  );
}

function createStyles(theme, colorScheme) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
    },
    headerImgBox: {
      width: '100%',
      alignItems: 'center',
      marginTop: 24,
      marginBottom: 8,
    },
    card: {
      backgroundColor: colorScheme === 'dark' ? '#181818' : '#f5f5f5',
      borderRadius: 16,
      borderWidth: 1.5,
      borderColor: colorScheme === 'dark' ? '#444' : '#ccc',
      padding: 24,
      width: 350,
      alignSelf: 'center',
      shadowColor: '#000',
      shadowOpacity: 0.12,
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 2 },
      elevation: 3,
      marginBottom: 32,
    },
    title: {
      color: colorScheme === 'dark' ? '#fff' : '#222',
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'left',
    },
    info: {
      color: colorScheme === 'dark' ? '#eee' : '#333',
      fontSize: 16,
      marginBottom: 2,
    },
    label: {
      color: colorScheme === 'dark' ? '#f5ecd7' : '#444',
      fontWeight: 'bold',
      marginTop: 12,
      marginBottom: 2,
      fontSize: 16,
    },
    link: {
      color: '#0a7ea4',
      fontSize: 16,
      textDecorationLine: 'underline',
      marginBottom: 2,
    },
    or: {
      color: colorScheme === 'dark' ? '#aaa' : '#888',
      fontSize: 14,
      marginBottom: 2,
      marginTop: 0,
      textAlign: 'left',
    },
  });
}
