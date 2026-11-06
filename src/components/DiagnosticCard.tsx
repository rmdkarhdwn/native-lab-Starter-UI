import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { DiagnosticDefinition, DiagnosticStatus } from '../types/diagnostic';
import { StatusBadge } from './Status';

// 카드 크기는 부모의 flex 비율로 결정해 작은 화면에도 대응합니다.
export function DiagnosticCard({ item, status, onPress, compact = false }: { item: DiagnosticDefinition; status: DiagnosticStatus; onPress: () => void; compact?: boolean }) {
  return <Pressable accessibilityRole="button" accessibilityLabel={`${item.title}, ${status === 'idle' ? item.initialLabel : status}`} onPress={onPress} style={({ pressed }) => [styles.card, pressed && { opacity: 0.75 }]}>
    <LinearGradient colors={item.gradient} style={StyleSheet.absoluteFill} />
    <Image source={item.light} style={{ position: 'absolute', width: item.lightWidth, height: item.lightHeight, left: item.lightLeft, top: item.lightTop }} contentFit="fill" />
    <View style={styles.content}><Text style={styles.eyebrow}>{item.eyebrow}</Text><Text style={[styles.title, compact && styles.compactTitle]}>{compact && item.id === 'location' ? '위치' : item.title}</Text><View style={styles.bottom}><Text style={styles.subtitle} numberOfLines={2}>{item.subtitle}</Text><StatusBadge status={status} label={status === 'idle' ? item.initialLabel : undefined} /></View></View>
  </Pressable>;
}
const styles = StyleSheet.create({ card: { flex: 1, minWidth: 0, height: 174, borderRadius: 27, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(255,255,255,0.35)' }, content: { flex: 1, padding: 16 }, eyebrow: { color: 'rgba(255,255,255,0.78)', fontSize: 10, fontWeight: '500' }, title: { color: 'white', fontSize: 19, fontWeight: '700', marginTop: 12 }, compactTitle: { fontSize: 14 }, bottom: { marginTop: 'auto', gap: 8 }, subtitle: { color: 'rgba(255,255,255,0.8)', fontSize: 11 } });
