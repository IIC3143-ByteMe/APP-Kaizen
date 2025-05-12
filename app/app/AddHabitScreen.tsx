import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import HabitFormHeader from '@components/app/add-habit/HabitFormHeader';
import HabitTextInputs from '@components/app/add-habit/HabitTextInputs';
import IconSoundSelectors from '@components/app/add-habit/IconSoundSelectors';
import HabitScheduleCard from '@components/app/add-habit/HabitScheduleCard';
import AddButton from '@components/app/add-habit/AddButton';

export default function AddHabitScreen(){
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <HabitFormHeader />
        <HabitTextInputs />
        <IconSoundSelectors />
        <HabitScheduleCard />
        <AddButton />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F6F6F6' },
  scrollContent: { padding: 20, paddingBottom: 100 },
});
