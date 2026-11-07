import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
// 화면 구조와 분리한 표시 규칙입니다. 크기와 간격은 이 파일에서 조정합니다.
export const styles = StyleSheet.create({
  lastCheckHeading: {
    marginTop: 27,
  },
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 48,
    maxWidth: 600,
    width: '100%',
    alignSelf: 'center',
  },
  logo: {
    color: colors.text,
    fontSize: 29,
    fontWeight: '700',
  },
  device: {
    color: colors.text,
    fontSize: 14,
    marginBottom: 16,
  },
  grid: {
    gap: 12,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
  },
  summary: {
    borderTopWidth: 1,
    borderColor: colors.line,
    marginTop: 70,
    paddingHorizontal: 4,
    paddingTop: 20,
  },
  heading: {
    color: colors.text,
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 12,
  },
  permission: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  muted: {
    color: colors.muted,
    fontSize: 12,
  },
  value: {
    color: '#d3d8d4',
    fontSize: 12,
  },
});
