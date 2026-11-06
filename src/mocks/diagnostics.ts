import { DiagnosticDefinition, DiagnosticId, DiagnosticResult } from '../types/diagnostic';

// 시안의 카드 색상과 화면 설명. 조명 에셋은 Figma 원본입니다.
export const diagnostics: DiagnosticDefinition[] = [
  { id: 'device', eyebrow: 'DEVICE', title: '기기 정보', subtitle: 'OS · 버전 · 제조사', description: '기기의 기본 정보를 확인합니다.', action: '정보 새로고침', initialLabel: '연결 대기', gradient: ['#556084', '#2e284e'], panel: '#34344d', light: require('../../assets/figma/device.svg'), lightWidth: 227.2, lightHeight: 171.7, lightLeft: -2.3, lightTop: -21.6 },
  { id: 'location', eyebrow: 'LOCATION', title: '위치 · 권한', subtitle: '권한 · 좌표', description: '위치 권한과 현재 좌표를 확인합니다.', action: '위치 확인하기', initialLabel: '권한 확인 전', gradient: ['#826732', '#4f3a21'], panel: '#51432d', light: require('../../assets/figma/location.svg'), lightWidth: 173.3, lightHeight: 170.05, lightLeft: -15.4, lightTop: -21.9 },
  { id: 'camera', eyebrow: 'CAMERA & MIC', title: '카메라 · 마이크', subtitle: '미리보기 · 입력', description: '카메라와 마이크의 입력을 확인합니다.', action: '테스트 시작', initialLabel: '테스트 전', gradient: ['#7b4c3e', '#401d1f'], panel: '#503331', light: require('../../assets/figma/camera.svg'), lightWidth: 161.4, lightHeight: 171.7, lightLeft: -18.3, lightTop: -21.6 },
  { id: 'battery', eyebrow: 'BATTERY', title: '배터리', subtitle: '잔량 · 충전', description: '배터리 잔량과 충전 상태를 확인합니다.', action: '상태 새로고침', initialLabel: '측정 전', gradient: ['#213566', '#0b1630'], panel: '#273653', light: require('../../assets/figma/battery.svg'), lightWidth: 161.4, lightHeight: 171.7, lightLeft: -18.3, lightTop: -21.6 },
  { id: 'display', eyebrow: 'DISPLAY & HAPTICS', title: '화면 · 진동', subtitle: '터치 테스트 · 진동', description: '터치와 진동 동작을 테스트합니다.', action: '테스트 시작', initialLabel: '테스트 전', gradient: ['#674d76', '#2c1e3b'], panel: '#45364e', light: require('../../assets/figma/display.svg'), lightWidth: 227.2, lightHeight: 171.7, lightLeft: -2.3, lightTop: -21.6 },
  { id: 'sensor', eyebrow: 'SENSOR', title: '센서', subtitle: '가속도계 · 자이로스코프', description: '기기의 움직임을 센서 값으로 확인합니다.', action: '측정 시작', initialLabel: '측정 전', gradient: ['#2f5f4c', '#0b2521'], panel: '#29493b', light: require('../../assets/figma/sensor.svg'), lightWidth: 215.3, lightHeight: 170.05, lightLeft: -5.2, lightTop: -21.9 },
];

// 예시 데이터는 개발자 미리보기에서만 사용하고 실제 측정으로 기록하지 않습니다.
const exampleRows: Record<DiagnosticId, { label: string; value: string }[]> = {
  device: [{ label: '모델명', value: '예시 스마트폰' }, { label: '제조사', value: '예시 제조사' }, { label: 'OS 버전', value: '예시 OS 1.0' }],
  battery: [{ label: '배터리 잔량', value: '82%' }, { label: '충전 상태', value: '충전 중' }, { label: '상태 변경', value: '예시 이벤트' }],
  location: [{ label: '위치 권한', value: '허용 예시' }, { label: '현재 좌표', value: '37.5665, 126.9780' }, { label: '위치 정확도', value: '10 m' }],
  sensor: [{ label: '가속도계', value: 'x 0.12, y 0.98' }, { label: '자이로스코프', value: 'x 0.01, y 0.02' }, { label: '수신 상태', value: '예시 수신' }],
  display: [{ label: '터치 테스트', value: '완료 예시' }, { label: '햅틱 테스트', value: '완료 예시' }],
  camera: [{ label: '카메라 권한', value: '허용 예시' }, { label: '카메라 미리보기', value: '예시 화면' }, { label: '마이크 입력', value: '예시 입력' }],
};
export const mockResult = (id: DiagnosticId, status: DiagnosticResult['status'] = 'complete'): DiagnosticResult => ({ status, source: 'mock', rows: exampleRows[id], message: status === 'error' ? '예시 오류 메시지입니다.' : undefined });
export const initialResult = (id: DiagnosticId): DiagnosticResult => ({ status: 'idle', source: 'mock', rows: exampleRows[id].map(row => ({ ...row, value: id === 'device' ? '연결 대기' : '측정 전' })) });
