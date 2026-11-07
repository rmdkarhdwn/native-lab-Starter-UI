import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
// 화면 구조와 분리한 표시 규칙입니다. 크기와 간격은 이 파일에서 조정합니다.
export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  // 넓은 화면에서도 본문이 과도하게 늘어나지 않도록 중앙에 최대 폭을 제한합니다.
  content: {
    paddingHorizontal: 20,
    paddingBottom: 32,
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center',
    flexGrow: 1,
  },
  back: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 52,
    gap: 20,
  },
  arrow: {
    color: '#e8eae8',
    fontSize: 30,
  },
  backLabel: {
    color: '#c5cbc7',
    fontSize: 13,
  },
  intro: {
    marginTop: 30,
    marginBottom: 30,
    paddingHorizontal: 4,
  },
  eyebrow: {
    color: '#9da6a0',
    fontSize: 10,
  },
  title: {
    color: colors.text,
    fontSize: 27,
    fontWeight: '700',
    marginTop: 10,
  },
  description: {
    color: '#a3aaa5',
    fontSize: 13,
    marginTop: 12,
  },
  panel: {
    borderRadius: 27,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.13)',
    padding: 20,
  },
  panelTitle: {
    color: '#f0f3f0',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 10,
  },
  row: {
    minHeight: 58,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  rowBorder: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.1)',
  },
  rowLabel: {
    color: '#cad0cc',
    fontSize: 13,
    flexShrink: 1,
  },
  // 긴 좌표/센서 값이 왼쪽 항목명을 밀어내지 않도록 값의 최대 폭을 제한합니다.
  rowValue: {
    maxWidth: '55%',
    flexShrink: 1,
    alignItems: 'flex-end',
  },
  notice: {
    marginTop: 22,
  },
  preview: {
    marginTop: 24,
  },
  previewTitle: {
    color: '#a3aaa5',
    fontSize: 12,
    marginBottom: 10,
  },
  previewButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  // 터치 영역은 최소 44를 확보하고, 남는 가로 공간을 버튼끼리 나눕니다.
  previewButton: {
    flexGrow: 1,
    minWidth: 64,
    borderWidth: 1,
    borderColor: '#4d5550',
    borderRadius: 12,
    paddingHorizontal: 12,
    minHeight: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewSelected: {
    backgroundColor: '#4d5550',
  },
  previewText: {
    color: '#e6ece7',
    fontSize: 12,
  },
  action: {
    marginTop: 28,
    backgroundColor: '#e6ece7',
    borderRadius: 18,
    minHeight: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    color: '#19211b',
    fontWeight: '700',
    fontSize: 14,
  },
});
