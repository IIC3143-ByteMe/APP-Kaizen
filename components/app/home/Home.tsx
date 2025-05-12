import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import HomeHeader from '@components/app/home/HomeHeader';
import DailyGoalsCard from '@components/app/home/DailyGoalsCard';
import WeekdaySelector from '@components/app/home/WeekdaySelector';
import HabitCard from '@components/app/home/HabitCard';

export default function Home(){
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <HomeHeader />
        <DailyGoalsCard />
        <WeekdaySelector />
        <HabitCard title="Estudiar" completed={0} total={60} />
        <HabitCard title="Meditar" completed={10} total={10} />
        <HabitCard title="Salir a caminar" completed={20} total={20} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F6F6F6' },
  scrollContent: { padding: 20, paddingBottom: 80 },
});
