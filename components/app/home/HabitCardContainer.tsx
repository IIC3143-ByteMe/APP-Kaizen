import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import HabitCard from '@components/app/home/HabitCard';

export default function HomeScreen(){
  return (
    <View style={styles.container}>
        <HabitCard title="Estudiar" completed={0} total={60} />
        <HabitCard title="Meditar" completed={10} total={10} />
        <HabitCard title="Salir a caminar" completed={20} total={20} />
        <HabitCard title="Hacer KaizenApp" completed={10} total={100} />
        <HabitCard title="Entrega 2" completed={100} total={100} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F6F6F6' },
  scrollContent: { padding: 20, paddingBottom: 80 },
});
