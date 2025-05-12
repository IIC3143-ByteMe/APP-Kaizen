import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ProgressHeader from '@components/app/progress/ProgressHeader';
import ProgressCalendar from '@components/app/progress/ProgressCalendar';
import StreakCard from '@components/app/progress/StreakCard';
import ArchetypeCard from '@components/app/progress/ArchetypeCard';
import RewardsGrid from '@components/app/progress/RewardsGrid';

export default function ProgressScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ProgressHeader />
        <ProgressCalendar />
        <StreakCard />
        <ArchetypeCard />
        <RewardsGrid />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F6F6F6' },
  scrollContent: { padding: 20, paddingBottom: 100 },
});
