import { Slot, usePathname, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Appearance } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

import { Colors } from '@/constants/Colors';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === 'dark' 
    ? { ...Colors.dark, tabIconDefault: '#ccc' } 
    : { ...Colors.light, tabIconDefault: '#888' };
  const [loaded] = useFonts({
    SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
  });
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Slot />
      </View>

      <View style={[styles.tabBar, { backgroundColor: theme.headerBackground, borderTopColor: colorScheme === 'dark' ? '#333' : '#ccc' }]}> 
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => router.push('/')}
          disabled={pathname === '/' || pathname === '/index'}
        >
          <Ionicons
            name="home"
            size={28}
            color={pathname === '/' || pathname === '/index' ? theme.tint : theme.tabIconDefault}
          />
          <Text style={[styles.tabText, (pathname === '/' || pathname === '/index') && styles.activeText, { color: pathname === '/' || pathname === '/index' ? theme.tint : theme.tabIconDefault }]}> 
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => router.push('/contact')}
          disabled={pathname === '/contact'}
        >
          <Ionicons
            name="person"
            size={28}
            color={pathname === '/contact' ? theme.tint : theme.tabIconDefault}
          />
          <Text style={[styles.tabText, pathname === '/contact' && styles.activeText, { color: pathname === '/contact' ? theme.tint : theme.tabIconDefault }]}> 
            Contact
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height: 60,
    borderTopWidth: 1,
    backgroundColor: 'white',
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 12,
    color: 'gray',
  },
  activeText: {
    color: '#D2691E',
    fontWeight: 'bold',
  },
});