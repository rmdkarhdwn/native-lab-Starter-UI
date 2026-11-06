// 진단 화면과 서비스가 공유하는 계약입니다. 실제 연동 시 UI는 이 타입만 사용합니다.
export type DiagnosticId = 'device' | 'battery' | 'location' | 'sensor' | 'display' | 'camera';
export type DiagnosticStatus = 'idle' | 'loading' | 'complete' | 'error';
export type DataSource = 'mock' | 'device';
export interface DiagnosticRow { label: string; value: string }
export interface DiagnosticResult { status: DiagnosticStatus; source: DataSource; rows: DiagnosticRow[]; message?: string; checkedAt?: string }
export interface DiagnosticDefinition {
  id: DiagnosticId; eyebrow: string; title: string; subtitle: string; description: string;
  action: string; initialLabel: string; gradient: readonly [string, string]; panel: string;
  light: number; lightWidth: number; lightHeight: number; lightLeft: number; lightTop: number;
}
export interface DiagnosticService { run(id: DiagnosticId): Promise<DiagnosticResult> }
