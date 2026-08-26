import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';

interface Props { eyebrow?: string; title: string; subtitle?: string }

export function ScreenHeader({ eyebrow, title, subtitle }: Props) {
  return <View style={styles.container}>
    {eyebrow ? <Text style={styles.eyebrow}>{eyebrow}</Text> : null}
    <Text style={styles.title}>{title}</Text>
    {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
  </View>;
}

const styles = StyleSheet.create({
  container: { marginBottom: 22 },
  eyebrow: { color: colors.primary, fontSize: 12, fontWeight: '800', letterSpacing: 1.2, marginBottom: 5 },
  title: { color: colors.text, fontSize: 30, fontWeight: '800' },
  subtitle: { color: colors.textMuted, fontSize: 15, lineHeight: 22, marginTop: 6 },
});
