import { StyleSheet } from 'react-native';
// 화면 구조와 분리한 표시 규칙입니다. 크기와 간격은 이 파일에서 조정합니다.
export const styles = StyleSheet.create({
  // 카드에서는 내용 너비만큼만 차지합니다. 상세 행의 중앙 정렬은 부모 값 영역이 담당합니다.
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(9,13,11,0.58)',
    borderRadius: 13,
    paddingHorizontal: 10,
    paddingVertical: 6,
    minWidth: 64,
  },
  badgeText: {
    color: '#f1f4f2',
    fontSize: 11,
  },
  message: {
    backgroundColor: '#151716',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    borderRadius: 20,
    padding: 16,
    gap: 8,
  },
  messageTitle: {
    color: '#dde2df',
    fontSize: 13,
    fontWeight: '600',
  },
  messageText: {
    color: '#a3aaa5',
    fontSize: 12,
    lineHeight: 18,
  },
});
