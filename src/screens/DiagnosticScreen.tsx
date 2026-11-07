import { useState } from 'react';
import { router } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { StatusBadge, StatusMessage } from '../components/Status';
import { diagnostics, initialResult, mockResult } from '../mocks/diagnostics';
import { diagnosticService } from '../services/diagnosticService';
import { DiagnosticId, DiagnosticResult, DiagnosticStatus } from '../types/diagnostic';
import { styles } from './DiagnosticScreen.styles';

// 배열 순서가 미리보기 버튼의 표시 순서입니다. 서비스 실행과 독립적으로 상태별 UI를 확인합니다.
const previewOptions: { status: DiagnosticStatus; label: string }[] = [
  { status: 'idle', label: '측정 전' },
  { status: 'loading', label: '측정 중' },
  { status: 'complete', label: '완료' },
  { status: 'error', label: '오류' },
];

/**
 * 대기 상태에는 행의 초기 문구, 완료 미리보기에는 예시 값을 표시합니다.
 * 그 외에는 undefined를 넘겨 StatusBadge의 공통 상태 문구를 사용합니다.
 */
function getRowLabel(result: DiagnosticResult, preview: boolean, value: string) {
  if (result.status === 'idle' || (preview && result.status === 'complete')) {
    return value;
  }
  return undefined;
}

/** 라우트에서 검증한 진단 ID를 받아 상세 정보와 개발용 상태 미리보기를 표시합니다. */
export function DiagnosticScreen({ id }: { id: DiagnosticId }) {
  // 라우트가 ID를 검증하고 key={id}로 마운트하므로 화면마다 초기 상태가 새로 생성됩니다.
  const item = diagnostics.find(entry => entry.id === id)!;
  const [result, setResult] = useState<DiagnosticResult>(() => initialResult(id));
  const [preview, setPreview] = useState(false);

  // 실제 연동의 진입점입니다. 현재 서비스는 네이티브 호출 없이 미구현 안내를 반환합니다.
  async function run() {
    setPreview(false);
    setResult(await diagnosticService.run(id));
  }

  function showPreview(status: DiagnosticStatus) {
    setPreview(true);
    setResult(status === 'idle' ? initialResult(id) : mockResult(id, status));
  }

  function goBack() {
    // 딥링크로 바로 진입해 이전 화면이 없는 경우에는 홈으로 이동합니다.
    if (router.canGoBack()) router.back();
    else router.replace('/');
  }

  const message = preview && result.status === 'complete'
    ? '개발용 예시 데이터입니다'
    : result.message;

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Pressable accessibilityRole="button" accessibilityLabel="뒤로 가기" onPress={goBack} style={styles.back}>
        <Text style={styles.arrow}>‹</Text>
        <Text style={styles.backLabel}>Native Lab</Text>
      </Pressable>

      <View style={styles.intro}>
        <Text style={styles.eyebrow}>{item.eyebrow}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>

      {/* 진단별 색상만 데이터에서 가져오고, 공통 배치는 스타일 파일에서 관리합니다. */}
      <View style={[styles.panel, { backgroundColor: item.panel }]}>
        <Text style={styles.panelTitle}>진단 정보 {preview ? '· 예시 데이터' : ''}</Text>
        {result.rows.map((row, index) => (
          <View key={row.label} style={[styles.row, index > 0 && styles.rowBorder]}>
            <Text style={styles.rowLabel}>{row.label}</Text>
            {/* 배지의 기본 alignSelf가 행의 중앙 정렬을 덮지 않도록 값 영역을 감쌉니다. */}
            <View style={styles.rowValue}>
              <StatusBadge status={result.status} label={getRowLabel(result, preview, row.value)} />
            </View>
          </View>
        ))}
      </View>

      <View style={styles.notice}>
        <StatusMessage status={result.status} message={message} />
      </View>

      {/* 이 버튼들은 실제 진단을 실행하거나 측정 결과를 저장하지 않습니다. */}
      <View style={styles.preview}>
        <Text style={styles.previewTitle}>개발용 미리보기 · 실제 측정값이 아닙니다</Text>
        <View style={styles.previewButtons}>
          {previewOptions.map(({ status, label }) => {
            const selected = preview && result.status === status;
            return (
              <Pressable
                key={status}
                accessibilityRole="button"
                accessibilityState={{ selected }}
                onPress={() => showPreview(status)}
                style={[styles.previewButton, selected && styles.previewSelected]}
              >
                <Text style={styles.previewText}>{label}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      <Pressable accessibilityRole="button" onPress={run} style={styles.action}>
        <Text style={styles.actionText}>{item.action}</Text>
      </Pressable>
    </ScrollView>
  );
}
