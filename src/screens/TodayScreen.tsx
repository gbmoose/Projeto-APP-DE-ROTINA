import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ProgressCard } from '../components/ProgressCard';
import { ScreenHeader } from '../components/ScreenHeader';
import { TaskCard } from '../components/TaskCard';
import { initialTasks } from '../data/mockData';
import { colors } from '../theme/colors';

export function TodayScreen() {
  const [tasks, setTasks] = useState(initialTasks);
  const completed = useMemo(() => tasks.filter((task) => task.completed).length, [tasks]);
  const toggleTask = (id: string) => setTasks((current) => current.map((task) => task.id === id ? { ...task, completed: !task.completed } : task));

  return <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
    <ScreenHeader eyebrow="ROUTINE FLOW" title="Bom dia, Guilherme" subtitle="Um passo de cada vez. Aqui está o seu dia." />
    <ProgressCard completed={completed} total={tasks.length} />
    <View style={styles.sectionRow}><Text style={styles.sectionTitle}>Seu dia</Text><Pressable style={styles.addButton}><Text style={styles.addText}>+ Adicionar</Text></Pressable></View>
    {tasks.map((task) => <TaskCard key={task.id} task={task} onToggle={toggleTask} />)}
  </ScrollView>;
}

const styles = StyleSheet.create({
  container: { padding: 22, paddingBottom: 36 }, sectionRow: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  sectionTitle: { color: colors.text, fontSize: 20, fontWeight: '800' }, addButton: { backgroundColor: colors.primarySoft, borderRadius: 12, paddingHorizontal: 12, paddingVertical: 8 },
  addText: { color: colors.primary, fontSize: 13, fontWeight: '800' },
});
