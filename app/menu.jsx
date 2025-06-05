import React from "react";
import { View, Text, StyleSheet, Appearance, Platform, ScrollView, SafeAreaView, FlatList, Image } from "react-native";

import { Colors } from "@/constants/Colors";
import { MENU_ITEMS } from "@/constants/MenuItems";
import { MENU_IMAGES } from "@/constants/MenuImages";

export default function MenuScreen() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const styles = createStyles(theme, colorScheme);
  const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;

  return (
    <Container
      style={Platform.OS === 'web' ? undefined : styles.container}
      contentContainerStyle={Platform.OS === 'web' ? styles.container : undefined}
    >
      <Text style={styles.text}>Menu</Text>
      <FlatList
        data={MENU_ITEMS}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item, index }) => {
          const imageObj = MENU_IMAGES.find(img => img.id === item.id);
          return (
            <>
              <View style={styles.menuCard}>
                <View style={styles.menuCardContent}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.menuTitle}>{item.title}</Text>
                    <Text style={styles.menuDesc}>{item.description}</Text>
                  </View>
                  {imageObj && (
                    <Image source={imageObj.image} style={styles.menuImage} resizeMode="cover" />
                  )}
                </View>
              </View>
              {/* Linha divisória entre os produtos, exceto o último */}
              {index < MENU_ITEMS.length - 1 && <View style={styles.menuProductDivider} />}
            </>
          );
        }}
        contentContainerStyle={styles.listContent}
      />
    </Container>
  );
}

function createStyles(theme, colorScheme) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: colorScheme === 'dark' ? '#fff' : theme.text,
      fontSize: 28,
      fontWeight: "bold",
      marginVertical: 24,
      letterSpacing: 1.2,
      alignSelf: 'center',
    },
    listContent: {
      paddingBottom: 32,
      alignItems: 'center',
    },
    menuCard: {
      backgroundColor: colorScheme === 'dark' ? '#181818' : '#222',
      borderRadius: 14,
      borderWidth: 1.5,
      borderColor: colorScheme === 'dark' ? '#444' : '#ccc',
      marginVertical: 10,
      width: 350,
      alignSelf: 'center',
      padding: 0,
      overflow: 'hidden',
    },
    menuCardContent: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      gap: 12,
    },
    menuTitle: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      textDecorationLine: 'underline',
      marginBottom: 4,
    },
    menuDesc: {
      color: '#eee',
      fontSize: 14,
    },
    menuImage: {
      width: 70,
      height: 70,
      borderRadius: 12,
      marginLeft: 10,
      borderWidth: 1,
      borderColor: colorScheme === 'dark' ? '#333' : '#eee',
      backgroundColor: colorScheme === 'dark' ? '#232323' : '#fff',
    },
    menuDivider: {
      height: 3,
      backgroundColor: colorScheme === 'dark' ? '#222' : '#333',
      marginHorizontal: 16,
      marginBottom: 2,
      marginTop: 2,
      borderRadius: 2,
      opacity: 0.5,
    },
    menuProductDivider: {
      height: 3,
      backgroundColor: colorScheme === 'dark' ? '#444' : '#bbb',
      marginVertical: 10,
      marginHorizontal: 30,
      borderRadius: 2,
      opacity: 0.7,
    },
  });
}
