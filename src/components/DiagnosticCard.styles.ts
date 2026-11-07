import { StyleSheet } from 'react-native';
// 화면 구조와 분리한 표시 규칙입니다. 크기와 간격은 이 파일에서 조정합니다.
export const styles = StyleSheet.create({
  background: StyleSheet.absoluteFill,
  pressed: {
    opacity: 0.75,
  },
  card: {
    flex: 1,
    minWidth: 0,
    height: 174,
    borderRadius: 27,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.35)',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  eyebrow: {
    color: 'rgba(255,255,255,0.78)',
    fontSize: 10,
    fontWeight: '500',
  },
  title: {
    color: 'white',
    fontSize: 19,
    fontWeight: '700',
    marginTop: 12,
  },
  compactTitle: {
    fontSize: 14,
  },
  // 제목 길이가 달라도 설명과 배지가 카드 하단을 기준으로 정렬됩니다.
  bottom: {
    marginTop: 'auto',
    gap: 8,
  },
  subtitle: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 11,
  },
});
