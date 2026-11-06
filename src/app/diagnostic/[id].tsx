import { Redirect, useLocalSearchParams } from 'expo-router';
import { diagnostics } from '../../mocks/diagnostics';
import { DiagnosticScreen } from '../../screens/DiagnosticScreen';
import { DiagnosticId } from '../../types/diagnostic';

// 알 수 없는 딥링크는 대시보드로 되돌립니다.
export default function DiagnosticRoute() {
  const { id } = useLocalSearchParams<{ id: string }>();
  if (!diagnostics.some(item => item.id === id)) return <Redirect href="/" />;
  return <DiagnosticScreen key={id} id={id as DiagnosticId} />;
}
