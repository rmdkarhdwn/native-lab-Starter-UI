import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// 시스템 상태바와 안전 영역은 공통 레이아웃에서 처리합니다.
export default function RootLayout() {
  return <SafeAreaProvider><SafeAreaView style={{ flex: 1, backgroundColor: '#090909' }}><StatusBar style="light" /><Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#090909' } }} /></SafeAreaView></SafeAreaProvider>;
}
