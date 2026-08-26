import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ScreenHeader } from '../components/ScreenHeader';
import { colors } from '../theme/colors';

const days = [{ name: 'Seg', value: 80 }, { name: 'Ter', value: 60 }, { name: 'Qua', value: 35 }, { name: 'Qui', value: 0 }, { name: 'Sex', value: 0 }, { name: 'Sáb', value: 0 }, { name: 'Dom', value: 0 }];

export function WeekScreen() {
  return <ScrollView contentContainerStyle={styles.container}>
    <ScreenHeader title="Sua semana" subtitle="Planeje com equilíbrio e deixe espaço para imprevistos." />
    <View style={styles.card}><Text style={styles.cardTitle}>Progresso semanal</Text><View style={styles.chart}>{days.map((day) => <View key={day.name} style={styles.day}><View style={styles.barTrack}><View style={[styles.bar, { height: `${day.value}%` }]} /></View><Text style={styles.dayLabel}>{day.name}</Text></View>)}</View></View>
    <View style={styles.placeholder}><Text style={styles.placeholderTitle}>Calendário semanal</Text><Text style={styles.placeholderText}>A agenda detalhada será implementada na semana 7 do cronograma.</Text></View>
  </ScrollView>;
}

const styles = StyleSheet.create({
  container: { padding: 22 }, card: { backgroundColor: colors.surface, borderColor: colors.border, borderRadius: 20, borderWidth: 1, padding: 20 },
  cardTitle: { color: colors.text, fontSize: 17, fontWeight: '800' }, chart: { alignItems: 'flex-end', flexDirection: 'row', height: 150, justifyContent: 'space-between', marginTop: 20 },
  day: { alignItems: 'center', flex: 1 }, barTrack: { backgroundColor: colors.primarySoft, borderRadius: 8, height: 110, justifyContent: 'flex-end', overflow: 'hidden', width: 18 },
  bar: { backgroundColor: colors.primary, borderRadius: 8, width: '100%' }, dayLabel: { color: colors.textMuted, fontSize: 11, marginTop: 7 },
  placeholder: { backgroundColor: colors.surface, borderColor: colors.border, borderRadius: 20, borderStyle: 'dashed', borderWidth: 1, marginTop: 16, padding: 22 },
  placeholderTitle: { color: colors.text, fontSize: 16, fontWeight: '700' }, placeholderText: { color: colors.textMuted, fontSize: 14, lineHeight: 21, marginTop: 6 },
});
