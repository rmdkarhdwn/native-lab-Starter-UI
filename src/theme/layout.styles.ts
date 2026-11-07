import { StyleSheet } from 'react-native';

// 루트 안전 영역과 라우터 화면의 배경을 통일해 화면 전환 시 밝은 여백을 방지합니다.
export const layoutStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#090909',
  },
  screen: {
    backgroundColor: '#090909',
  },
});
