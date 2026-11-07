import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, Text, View } from 'react-native';
import { DiagnosticDefinition, DiagnosticStatus } from '../types/diagnostic';
import { StatusBadge } from './Status';
import { styles } from './DiagnosticCard.styles';

interface DiagnosticCardProps {
  item: DiagnosticDefinition;
  status: DiagnosticStatus;
  onPress: () => void;
  /** 좁은 3열 카드에서 제목 크기와 위치 카드의 표시 이름을 조정합니다. */
  compact?: boolean;
}

/** 카드 폭은 부모 행의 flex 배치로 결정하고, 이동 처리는 부모 화면에 위임합니다. */
export function DiagnosticCard({ item, status, onPress, compact = false }: DiagnosticCardProps) {
  const title = compact && item.id === 'location' ? '위치' : item.title;
  const initialLabel = status === 'idle' ? item.initialLabel : undefined;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${item.title}, ${status === 'idle' ? item.initialLabel : status}`}
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <LinearGradient colors={item.gradient} style={styles.background} />
      <View style={styles.content}>
        <Text style={styles.eyebrow}>{item.eyebrow}</Text>
        <Text style={[styles.title, compact && styles.compactTitle]}>{title}</Text>
        <View style={styles.bottom}>
          <Text style={styles.subtitle} numberOfLines={2}>{item.subtitle}</Text>
          <StatusBadge status={status} label={initialLabel} />
        </View>
      </View>
    </Pressable>
  );
}
