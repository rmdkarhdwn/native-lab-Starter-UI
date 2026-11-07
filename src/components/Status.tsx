import { ActivityIndicator, Text, View } from 'react-native';
import { DiagnosticStatus } from '../types/diagnostic';
import { styles } from './Status.styles';

const labels: Record<DiagnosticStatus, string> = {
  idle: '측정 전',
  loading: '측정 중',
  complete: '완료',
  error: '오류',
};

interface StatusProps {
  status: DiagnosticStatus;
}

/** label을 전달하면 초기 안내나 예시 값을 표시하고, 생략하면 공통 상태 문구를 표시합니다. */
export function StatusBadge({ status, label }: StatusProps & { label?: string }) {
  return (
    <View style={styles.badge}>
      <Text style={styles.badgeText}>{label ?? labels[status]}</Text>
    </View>
  );
}

/** 서비스 안내와 개발용 미리보기가 함께 사용하는 상태 영역입니다. */
export function StatusMessage({ status, message }: StatusProps & { message?: string }) {
  if (status === 'loading') {
    return (
      <View style={styles.message}>
        <ActivityIndicator color="#e6ece7" />
        <Text style={styles.messageText}>측정 중입니다...</Text>
      </View>
    );
  }

  const isError = status === 'error';
  const title = isError ? '진단 중 오류가 발생했습니다' : message ?? '아직 연결된 데이터가 없습니다';
  const description = isError ? message ?? '다시 시도해 주세요.' : '네이티브 기능을 연결한 뒤 확인해 주세요.';

  return (
    <View accessibilityRole={isError ? 'alert' : undefined} style={styles.message}>
      <Text style={styles.messageTitle}>{title}</Text>
      <Text style={styles.messageText}>{description}</Text>
    </View>
  );
}
