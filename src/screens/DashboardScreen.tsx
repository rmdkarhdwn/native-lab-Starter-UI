import { router } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';
import { DiagnosticCard } from '../components/DiagnosticCard';
import { diagnostics } from '../mocks/diagnostics';
import { DiagnosticDefinition } from '../types/diagnostic';
import { styles } from './DashboardScreen.styles';

const permissionNames = ['위치', '카메라', '마이크'];

/** 진단 목록과 권한 확인 전 상태를 보여주는 시작 화면입니다. */
export function DashboardScreen() {
  function renderCard(item: DiagnosticDefinition, compact = false) {
    return (
      <DiagnosticCard
        key={item.id}
        item={item}
        status="idle"
        compact={compact}
        onPress={() => router.push({ pathname: '/diagnostic/[id]', params: { id: item.id } })}
      />
    );
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.logo}>Native Lab</Text>
      <Text style={styles.device}>내 기기</Text>

      {/* 첫 카드는 전체 폭, 다음 세 개는 3열, 마지막 두 개는 2열로 배치합니다. */}
      <View style={styles.grid}>
        {renderCard(diagnostics[0])}
        <View style={styles.row}>
          {diagnostics.slice(1, 4).map(item => renderCard(item, true))}
        </View>
        <View style={styles.row}>
          {diagnostics.slice(4).map(item => renderCard(item))}
        </View>
      </View>

      {/* 실제 권한을 조회하지 않으므로 허용 여부를 추정하지 않고 미확인으로 표시합니다. */}
      <View style={styles.summary}>
        <Text style={styles.heading}>허용된 권한</Text>
        {permissionNames.map(name => (
          <View key={name} style={styles.permission}>
            <Text style={styles.muted}>{name}</Text>
            <Text style={styles.value}>미확인</Text>
          </View>
        ))}
        <Text style={[styles.heading, styles.lastCheckHeading]}>마지막 체크</Text>
        <Text style={styles.muted}>아직 진단을 실행하지 않았습니다</Text>
      </View>
    </ScrollView>
  );
}
