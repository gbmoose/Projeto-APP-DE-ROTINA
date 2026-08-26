import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';
import type { AppTab } from '../types/navigation';

const tabs: Array<{ key: AppTab; label: string; icon: string }> = [
  { key: 'today', label: 'Hoje', icon: '☀' }, { key: 'week', label: 'Semana', icon: '▦' },
  { key: 'habits', label: 'Hábitos', icon: '✓' }, { key: 'profile', label: 'Perfil', icon: '●' },
];

export function BottomNav({ activeTab, onChange }: { activeTab: AppTab; onChange: (tab: AppTab) => void }) {
  return <View style={styles.container}>{tabs.map((tab) => {
    const active = tab.key === activeTab;
    return <Pressable key={tab.key} onPress={() => onChange(tab.key)} style={styles.item}><Text style={[styles.icon, active && styles.active]}>{tab.icon}</Text><Text style={[styles.label, active && styles.active]}>{tab.label}</Text></Pressable>;
  })}</View>;
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.surface, borderTopColor: colors.border, borderTopWidth: 1, flexDirection: 'row', paddingBottom: 8, paddingTop: 10 },
  item: { alignItems: 'center', flex: 1, gap: 3 }, icon: { color: colors.textMuted, fontSize: 20, fontWeight: '700' },
  label: { color: colors.textMuted, fontSize: 11, fontWeight: '600' }, active: { color: colors.primary },
});
