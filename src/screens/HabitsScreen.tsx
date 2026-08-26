import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ScreenHeader } from '../components/ScreenHeader';
import { habits } from '../data/mockData';
import { colors } from '../theme/colors';

export function HabitsScreen() {
  return <ScrollView contentContainerStyle={styles.container}>
    <ScreenHeader title="Hábitos" subtitle="Consistência vale mais do que perfeição." />
    {habits.map((habit) => <View key={habit.id} style={styles.card}><Text style={styles.emoji}>{habit.emoji}</Text><View style={styles.content}><Text style={styles.title}>{habit.title}</Text><View style={styles.week}>{habit.week.map((done, index) => <View key={index} style={[styles.day, done && styles.dayDone]} />)}</View></View><View><Text style={styles.streak}>{habit.streak}</Text><Text style={styles.streakLabel}>dias</Text></View></View>)}
  </ScrollView>;
}

const styles = StyleSheet.create({
  container: { padding: 22 }, card: { alignItems: 'center', backgroundColor: colors.surface, borderColor: colors.border, borderRadius: 18, borderWidth: 1, flexDirection: 'row', marginBottom: 12, padding: 16 },
  emoji: { fontSize: 26, marginRight: 13 }, content: { flex: 1 }, title: { color: colors.text, fontSize: 16, fontWeight: '700' }, week: { flexDirection: 'row', gap: 5, marginTop: 9 },
  day: { backgroundColor: colors.border, borderRadius: 4, height: 8, width: 18 }, dayDone: { backgroundColor: colors.success }, streak: { color: colors.primary, fontSize: 20, fontWeight: '800', textAlign: 'center' }, streakLabel: { color: colors.textMuted, fontSize: 10 },
});
