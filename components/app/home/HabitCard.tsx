import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  title: string;
  completed: number;
  total: number;
};

export default function HabitCard( { title, completed, total }: Props ) {
  const done = completed >= total;

  return (
    <View style={[styles.card, done && styles.cardDone]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={[styles.progress, done && styles.progressDone]}>
        {completed}/{total} mins
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F0F0F0',
    borderRadius: 16,
    padding: 16,
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardDone: {
    backgroundColor: '#E5E9FF',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  progress: {
    fontWeight: '600',
    color: '#555',
  },
  progressDone: {
    color: '#7D89FF',
  },
});
