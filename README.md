# Native Lab

React Native 네이티브 개발 강의를 위한 스마트폰 진단 UI 스타터입니다. Android와 iOS에서 동일하게 사용할 수 있으며, 실제 기기 조회나 권한 요청은 구현하지 않았습니다.

## 설치 및 실행

Node.js와 npm을 설치하고, 휴대폰에 현재 프로젝트의 Expo SDK와 호환되는 Expo Go를 설치합니다.

```bash
npm install
npx expo start
```

표시된 QR 코드를 Android의 Expo Go 또는 iOS 카메라로 열어 실행하세요. 개발 컴퓨터와 휴대폰은 같은 네트워크에 연결해야 합니다. 터미널에서 `a` 또는 `i`를 눌러 설정된 에뮬레이터/시뮬레이터를 사용할 수도 있습니다.

```bash
npx tsc --noEmit
npx expo lint
```

## 사용법

대시보드의 카드를 눌러 상세 화면으로 이동합니다. 실행 버튼은 **아직 연결되지 않았습니다** 안내만 표시합니다. 상세 화면의 개발용 미리보기는 측정 전, 측정 중, 완료, 오류 UI를 확인하기 위한 예시이며, 표시되는 값과 상태는 실제 기기에서 가져온 정보가 아닙니다. 권한과 마지막 체크 역시 실제 조회나 저장을 하지 않습니다.

## 구조와 실습 연결 지점

- `src/app`: Expo Router 경로 및 공통 레이아웃
- `src/screens`, `src/components`: 화면과 재사용 UI
- `src/types`: 서비스와 UI가 공유하는 상태 및 결과 타입
- `src/mocks`: 화면 정의와 명시적인 예시 데이터
- `src/services/diagnosticService.ts`: 진단 기능의 미구현 서비스 계약
- `src/theme`: 공통 색상

강의에서는 `DiagnosticService` 계약을 유지하면서 서비스를 실제 구현으로 교체하고, 결과의 `source`, `status`, `rows`, `checkedAt`을 연결하세요. 권한 상태와 마지막 체크의 저장 및 갱신은 별도로 구현해야 합니다. 카메라 미리보기나 센서 스트림처럼 지속적인 네이티브 연동이 필요한 기능도 현재 비어 있습니다. 이 프로젝트에는 Kotlin/Swift 코드, 네이티브 이벤트 구독, 기기 접근 권한 설정이 없습니다.
