import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import HomeHeader from '@components/app/home/HomeHeader';
import DailyGoalsCard from '@components/app/home/DailyGoalsCard';
import WeekdaySelector from '@components/app/home/WeekdaySelector';
import HabitCardContainer from '@components/app/home/HabitCardContainer';

export default function HomeScreen(){
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <HomeHeader />
        <DailyGoalsCard />
        <WeekdaySelector />
        <HabitCardContainer />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F6F6F6' },
  scrollContent: { padding: 20, paddingBottom: 80 },
});
