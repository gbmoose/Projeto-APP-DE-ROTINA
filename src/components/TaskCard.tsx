import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';
import type { Task, TaskCategory } from '../types/task';

const categoryColors: Record<TaskCategory, string> = { Trabalho: colors.work, Estudos: colors.study, Treino: colors.training, Pessoal: colors.personal };

export function TaskCard({ task, onToggle }: { task: Task; onToggle: (id: string) => void }) {
  return <Pressable accessibilityRole="checkbox" accessibilityState={{ checked: task.completed }} onPress={() => onToggle(task.id)} style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
    <View style={[styles.check, task.completed && styles.checkDone]}><Text style={styles.checkText}>{task.completed ? '✓' : ''}</Text></View>
    <View style={styles.content}>
      <Text style={[styles.title, task.completed && styles.titleDone]}>{task.title}</Text>
      <View style={styles.metaRow}><Text style={[styles.category, { color: categoryColors[task.category] }]}>{task.category}</Text>{task.time ? <Text style={styles.meta}> · {task.time}</Text> : null}{task.durationMinutes ? <Text style={styles.meta}> · {task.durationMinutes} min</Text> : null}</View>
    </View>
    {task.priority === 'high' ? <View style={styles.priorityDot} /> : null}
  </Pressable>;
}

const styles = StyleSheet.create({
  card: { alignItems: 'center', backgroundColor: colors.surface, borderColor: colors.border, borderRadius: 18, borderWidth: 1, flexDirection: 'row', marginBottom: 10, padding: 16 },
  pressed: { opacity: 0.75 }, check: { alignItems: 'center', borderColor: colors.border, borderRadius: 10, borderWidth: 2, height: 26, justifyContent: 'center', marginRight: 13, width: 26 },
  checkDone: { backgroundColor: colors.success, borderColor: colors.success }, checkText: { color: '#FFFFFF', fontSize: 16, fontWeight: '800' }, content: { flex: 1 },
  title: { color: colors.text, fontSize: 16, fontWeight: '600' }, titleDone: { color: colors.textMuted, textDecorationLine: 'line-through' },
  metaRow: { flexDirection: 'row', marginTop: 6 }, category: { fontSize: 12, fontWeight: '700' }, meta: { color: colors.textMuted, fontSize: 12 },
  priorityDot: { backgroundColor: colors.danger, borderRadius: 5, height: 9, width: 9 },
});
