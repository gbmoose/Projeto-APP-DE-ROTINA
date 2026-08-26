import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ScreenHeader } from '../components/ScreenHeader';
import { colors } from '../theme/colors';

const options = ['Objetivos e módulos', 'Categorias e cores', 'Aparência', 'Acessibilidade', 'Conta e privacidade'];

export function ProfileScreen() {
  return <ScrollView contentContainerStyle={styles.container}><ScreenHeader title="Perfil" subtitle="Personalize o Routine Flow para funcionar do seu jeito." />
    <View style={styles.profileCard}><View style={styles.avatar}><Text style={styles.avatarText}>GB</Text></View><View><Text style={styles.name}>Guilherme</Text><Text style={styles.email}>Conta de demonstração</Text></View></View>
    <View style={styles.options}>{options.map((option) => <View key={option} style={styles.option}><Text style={styles.optionText}>{option}</Text><Text style={styles.arrow}>›</Text></View>)}</View>
  </ScrollView>;
}

const styles = StyleSheet.create({
  container: { padding: 22 }, profileCard: { alignItems: 'center', backgroundColor: colors.primary, borderRadius: 22, flexDirection: 'row', padding: 20 },
  avatar: { alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 24, height: 48, justifyContent: 'center', marginRight: 13, width: 48 }, avatarText: { color: colors.primary, fontSize: 16, fontWeight: '800' },
  name: { color: '#FFFFFF', fontSize: 18, fontWeight: '800' }, email: { color: '#DDD8FF', fontSize: 13, marginTop: 2 }, options: { backgroundColor: colors.surface, borderColor: colors.border, borderRadius: 20, borderWidth: 1, marginTop: 18, paddingHorizontal: 16 },
  option: { alignItems: 'center', borderBottomColor: colors.border, borderBottomWidth: 1, flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 17 }, optionText: { color: colors.text, fontSize: 15, fontWeight: '600' }, arrow: { color: colors.textMuted, fontSize: 24 },
});
