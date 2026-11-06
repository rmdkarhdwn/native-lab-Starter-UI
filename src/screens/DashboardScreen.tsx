import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { DiagnosticCard } from '../components/DiagnosticCard';
import { diagnostics } from '../mocks/diagnostics';
import { colors } from '../theme/colors';
import { DiagnosticDefinition } from '../types/diagnostic';

// 대시보드 상태는 실제 서비스가 연결되기 전까지 확인 전으로 표시합니다.
export function DashboardScreen() {
  const card = (item: DiagnosticDefinition, compact = false) => <DiagnosticCard key={item.id} item={item} status="idle" compact={compact} onPress={() => router.push({ pathname: '/diagnostic/[id]', params: { id: item.id } })} />;
  return <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
    <Text style={styles.logo}>Native Lab</Text><Text style={styles.device}>내 기기</Text>
    <View style={styles.grid}>{card(diagnostics[0])}<View style={styles.row}>{diagnostics.slice(1, 4).map(item => card(item, true))}</View><View style={styles.row}>{diagnostics.slice(4).map(item => card(item))}</View></View>
    <View style={styles.summary}><Text style={styles.heading}>허용된 권한</Text>{['위치', '카메라', '마이크'].map(name => <View key={name} style={styles.permission}><Text style={styles.muted}>{name}</Text><Text style={styles.value}>미확인</Text></View>)}<Text style={[styles.heading, { marginTop: 27 }]}>마지막 체크</Text><Text style={styles.muted}>아직 진단을 실행하지 않았습니다</Text></View>
  </ScrollView>;
}
const styles = StyleSheet.create({ screen: { flex: 1, backgroundColor: colors.background }, content: { paddingHorizontal: 20, paddingTop: 16, paddingBottom: 48, maxWidth: 600, width: '100%', alignSelf: 'center' }, logo: { color: colors.text, fontSize: 29, fontWeight: '700' }, device: { color: colors.text, fontSize: 14, marginBottom: 16 }, grid: { gap: 12 }, row: { flexDirection: 'row', gap: 10 }, summary: { borderTopWidth: 1, borderColor: colors.line, marginTop: 70, paddingHorizontal: 4, paddingTop: 20 }, heading: { color: colors.text, fontWeight: '700', fontSize: 14, marginBottom: 12 }, permission: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }, muted: { color: colors.muted, fontSize: 12 }, value: { color: '#d3d8d4', fontSize: 12 } });
