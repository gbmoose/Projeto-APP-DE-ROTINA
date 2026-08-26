import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';

export function ProgressCard({ completed, total }: { completed: number; total: number }) {
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);
  return <View style={styles.card}>
    <View style={styles.row}><View><Text style={styles.label}>PROGRESSO DO DIA</Text><Text style={styles.detail}>{completed} de {total} atividades</Text></View><Text style={styles.percentage}>{percentage}%</Text></View>
    <View style={styles.track}><View style={[styles.fill, { width: `${percentage}%` }]} /></View>
  </View>;
}

const styles = StyleSheet.create({
  card: { backgroundColor: colors.primary, borderRadius: 22, padding: 20, marginBottom: 24 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  label: { color: '#DDD8FF', fontSize: 11, fontWeight: '800', letterSpacing: 1 },
  detail: { color: '#FFFFFF', fontSize: 16, fontWeight: '600', marginTop: 5 },
  percentage: { color: '#FFFFFF', fontSize: 26, fontWeight: '800' },
  track: { height: 8, backgroundColor: '#8275EE', borderRadius: 8, marginTop: 18, overflow: 'hidden' },
  fill: { height: '100%', backgroundColor: '#FFFFFF', borderRadius: 8 },
});
