import { useState } from 'react';
import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { StatusBadge, StatusMessage } from '../components/Status';
import { diagnostics, initialResult, mockResult } from '../mocks/diagnostics';
import { diagnosticService } from '../services/diagnosticService';
import { colors } from '../theme/colors';
import { DiagnosticId, DiagnosticResult, DiagnosticStatus } from '../types/diagnostic';

// 예시 상태 전환은 UI 미리보기 전용이며 진단 버튼과 분리되어 있습니다.
const previewStatuses: DiagnosticStatus[] = ['idle', 'loading', 'complete', 'error'];
const previewLabels: Record<DiagnosticStatus, string> = { idle: '측정 전', loading: '측정 중', complete: '완료', error: '오류' };
export function DiagnosticScreen({ id }: { id: DiagnosticId }) {
  const item = diagnostics.find(entry => entry.id === id)!;
  const [result, setResult] = useState<DiagnosticResult>(() => initialResult(id));
  const [preview, setPreview] = useState(false);
  // 서비스가 현재 반환하는 미구현 안내만 표시합니다. 네이티브 호출은 없습니다.
  const run = async () => { setPreview(false); setResult(await diagnosticService.run(id)); };
  return <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
    <Pressable accessibilityRole="button" accessibilityLabel="뒤로 가기" onPress={() => router.canGoBack() ? router.back() : router.replace('/')} style={styles.back}><Text style={styles.arrow}>‹</Text><Text style={styles.backLabel}>Native Lab</Text></Pressable>
    <View style={styles.intro}><Text style={styles.eyebrow}>{item.eyebrow}</Text><Text style={styles.title}>{item.title}</Text><Text style={styles.description}>{item.description}</Text></View>
    <View style={[styles.panel, { backgroundColor: item.panel }]}><Text style={styles.panelTitle}>진단 정보 {preview ? '· 예시 데이터' : ''}</Text>{result.rows.map((row, index) => <View key={row.label} style={[styles.row, index > 0 && styles.rowBorder]}><Text style={styles.rowLabel}>{row.label}</Text><StatusBadge status={result.status} label={preview && result.status === 'complete' ? row.value : result.status === 'idle' ? row.value : undefined} /></View>)}</View>
    <View style={styles.notice}><StatusMessage status={result.status} message={preview && result.status === 'complete' ? '개발용 예시 데이터입니다' : result.message} /></View>
    <View style={styles.preview}><Text style={styles.previewTitle}>개발용 미리보기 · 실제 측정값이 아닙니다</Text><View style={styles.previewButtons}>{previewStatuses.map(status => <Pressable key={status} accessibilityRole="button" accessibilityState={{ selected: preview && result.status === status }} onPress={() => { setPreview(true); setResult(status === 'idle' ? initialResult(id) : mockResult(id, status)); }} style={[styles.previewButton, preview && result.status === status && styles.previewSelected]}><Text style={styles.previewText}>{previewLabels[status]}</Text></Pressable>)}</View></View>
    <Pressable accessibilityRole="button" onPress={run} style={styles.action}><Text style={styles.actionText}>{item.action}</Text></Pressable>
  </ScrollView>;
}
const styles = StyleSheet.create({ screen: { flex: 1, backgroundColor: colors.background }, content: { paddingHorizontal: 20, paddingBottom: 32, width: '100%', maxWidth: 600, alignSelf: 'center', flexGrow: 1 }, back: { flexDirection: 'row', alignItems: 'center', minHeight: 52, gap: 20 }, arrow: { color: '#e8eae8', fontSize: 30 }, backLabel: { color: '#c5cbc7', fontSize: 13 }, intro: { marginTop: 30, marginBottom: 30, paddingHorizontal: 4 }, eyebrow: { color: '#9da6a0', fontSize: 10 }, title: { color: colors.text, fontSize: 27, fontWeight: '700', marginTop: 10 }, description: { color: '#a3aaa5', fontSize: 13, marginTop: 12 }, panel: { borderRadius: 27, borderWidth: 1, borderColor: 'rgba(255,255,255,0.13)', minHeight: 260, padding: 20 }, panelTitle: { color: '#f0f3f0', fontSize: 14, fontWeight: '700', marginBottom: 10 }, row: { minHeight: 58, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 12 }, rowBorder: { borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.1)' }, rowLabel: { color: '#cad0cc', fontSize: 13, flexShrink: 1 }, notice: { marginTop: 22 }, preview: { marginTop: 24 }, previewTitle: { color: '#a3aaa5', fontSize: 12, marginBottom: 10 }, previewButtons: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 }, previewButton: { borderWidth: 1, borderColor: '#4d5550', borderRadius: 12, paddingHorizontal: 12, minHeight: 44, justifyContent: 'center' }, previewSelected: { backgroundColor: '#4d5550' }, previewText: { color: '#e6ece7', fontSize: 12 }, action: { marginTop: 28, backgroundColor: '#e6ece7', borderRadius: 18, minHeight: 56, justifyContent: 'center', alignItems: 'center' }, actionText: { color: '#19211b', fontWeight: '700', fontSize: 14 } });
