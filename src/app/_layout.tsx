import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { layoutStyles } from '../theme/layout.styles';

/** 모든 화면이 공유하는 시스템 상태바와 안전 영역을 한 곳에서 설정합니다. */
export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={layoutStyles.safeArea}>
        <StatusBar style="light" />
        <Stack screenOptions={{ headerShown: false, contentStyle: layoutStyles.screen }} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
