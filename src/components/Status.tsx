import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { DiagnosticStatus } from '../types/diagnostic';

const labels: Record<DiagnosticStatus, string> = { idle: '측정 전', loading: '측정 중', complete: '완료', error: '오류' };
// 상태 배지는 카드와 상세 행에서 공통으로 사용합니다.
export function StatusBadge({ status, label }: { status: DiagnosticStatus; label?: string }) {
  return <View style={styles.badge}><Text style={styles.badgeText}>{label ?? labels[status]}</Text></View>;
}
// 로딩과 오류 표현도 실제 서비스 연결 후 그대로 재사용할 수 있습니다.
export function StatusMessage({ status, message }: { status: DiagnosticStatus; message?: string }) {
  if (status === 'loading') return <View style={styles.message}><ActivityIndicator color="#e6ece7" /><Text style={styles.messageText}>측정 중입니다...</Text></View>;
  return <View accessibilityRole={status === 'error' ? 'alert' : undefined} style={styles.message}><Text style={styles.messageTitle}>{status === 'error' ? '진단 중 오류가 발생했습니다' : message ?? '아직 연결된 데이터가 없습니다'}</Text><Text style={styles.messageText}>{status === 'error' ? message ?? '다시 시도해 주세요.' : '네이티브 기능을 연결한 뒤 확인해 주세요.'}</Text></View>;
}
const styles = StyleSheet.create({ badge: { alignSelf: 'flex-start', backgroundColor: 'rgba(9,13,11,0.58)', borderRadius: 13, paddingHorizontal: 10, paddingVertical: 6, minWidth: 64 }, badgeText: { color: '#f1f4f2', fontSize: 11 }, message: { backgroundColor: '#151716', borderWidth: 1, borderColor: 'rgba(255,255,255,0.08)', borderRadius: 20, padding: 16, gap: 8 }, messageTitle: { color: '#dde2df', fontSize: 13, fontWeight: '600' }, messageText: { color: '#a3aaa5', fontSize: 12, lineHeight: 18 } });
