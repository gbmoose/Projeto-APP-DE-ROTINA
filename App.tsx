import { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { BottomNav } from './src/components/BottomNav';
import { HabitsScreen } from './src/screens/HabitsScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import { TodayScreen } from './src/screens/TodayScreen';
import { WeekScreen } from './src/screens/WeekScreen';
import { colors } from './src/theme/colors';
import type { AppTab } from './src/types/navigation';

export default function App() {
  const [activeTab, setActiveTab] = useState<AppTab>('today');

  const renderScreen = () => {
    switch (activeTab) {
      case 'week': return <WeekScreen />;
      case 'habits': return <HabitsScreen />;
      case 'profile': return <ProfileScreen />;
      default: return <TodayScreen />;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.content}>{renderScreen()}</View>
      <BottomNav activeTab={activeTab} onChange={setActiveTab} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  content: { flex: 1 },
});
