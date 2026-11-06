import { DiagnosticService } from '../types/diagnostic';
import { initialResult } from '../mocks/diagnostics';

// 강의 실습 연결 지점: 실제 모듈 호출 없이 미구현 상태만 반환합니다.
export const diagnosticService: DiagnosticService = {
  async run(id) {
    return { ...initialResult(id), message: '아직 연결되지 않았습니다' };
  },
};
