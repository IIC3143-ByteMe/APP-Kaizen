import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeHeader(){
    return (
    <View style={styles.header}>
        <View>
            <Text style={styles.greeting}>¡Hola!</Text>
            <Text style={styles.date}>Lunes 7 de abril</Text>
        </View>
        <View style={styles.streakBadge}>
            <Text style={styles.streakText}>3🔥</Text>
        </View>
    </View>
    );
}


const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 60,

  },
  greeting: { fontSize: 24, fontWeight: 'bold', color: '#7D89FF' },
  date: { color: '#333', marginTop: 4, fontWeight: '600' },
  streakBadge: {
    backgroundColor: '#7D89FF',
    borderRadius: 40,
    padding: 16,
    elevation: 4,
  },
  streakText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
