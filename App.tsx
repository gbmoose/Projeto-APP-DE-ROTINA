import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.card}>
        <Text style={styles.eyebrow}>BORTOLAN SYSTEMS</Text>
        <Text style={styles.title}>Routine Flow</Text>
        <Text style={styles.subtitle}>
          Sua rotina, seus estudos e seus treinos em um só lugar.
        </Text>
        <View style={styles.progressTrack}>
          <View style={styles.progressFill} />
        </View>
        <Text style={styles.progressText}>Projeto iniciado · 10%</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#F7F8FC',
  },
  card: {
    padding: 28,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    shadowColor: '#111827',
    shadowOpacity: 0.08,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
  eyebrow: {
    marginBottom: 8,
    color: '#6D5DFB',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  title: {
    color: '#171A2B',
    fontSize: 34,
    fontWeight: '800',
  },
  subtitle: {
    marginTop: 12,
    color: '#666B7E',
    fontSize: 17,
    lineHeight: 25,
  },
  progressTrack: {
    height: 10,
    marginTop: 28,
    overflow: 'hidden',
    borderRadius: 10,
    backgroundColor: '#E9E7FF',
  },
  progressFill: {
    width: '10%',
    height: '100%',
    backgroundColor: '#6D5DFB',
  },
  progressText: {
    marginTop: 10,
    color: '#666B7E',
    fontSize: 13,
  },
});
