# Native Lab

**React Native 네이티브 개발 실습을 위한 스마트폰 진단 앱**

Native Lab은 Expo와 React Native를 기반으로 Android·iOS의 네이티브 기능을 학습하기 위한 프로젝트입니다.

Expo Prebuild와 Development Build를 활용하고, Kotlin·Swift로 작성한 네이티브 모듈을 연결해 간단한 스마트폰 진단 앱을 완성하는 것을 목표로 합니다.

## 프로젝트 소개

이 저장소는 강의에서 사용하는 **스타터 프로젝트**입니다.

React Native UI와 기본 화면 구조는 미리 구현되어 있으며, 실제 기기 정보를 조회하거나 센서를 사용하는 네이티브 기능은 구현되어 있지 않습니다.

수강생은 강의를 따라 Android와 iOS의 네이티브 기능을 하나씩 연결하게 됩니다.

## 주요 기능

| 기능 | 설명 |
|---|---|
| 기기 정보 | 모델명, OS 버전, 제조사 조회 |
| 배터리 | 배터리 잔량 및 충전 상태 |
| 위치·권한 | 위치 권한 및 GPS 정보 |
| 센서 | 가속도계, 자이로스코프 |
| 화면·진동 | 터치 및 햅틱 테스트 |
| 카메라·마이크 | 카메라 미리보기 및 마이크 입력 테스트 |

**현재 스타터 버전에서는 위 기능의 UI만 제공됩니다.** 실제 네이티브 기능은 강의에서 구현합니다.

## 기술 스택

- React Native
- Expo
- TypeScript
- Kotlin (Android 실습)
- Swift (iOS 실습)

## 시작하기

### 1. 저장소 복제

```bash
git clone <REPOSITORY_URL>
cd native-lab
```

### 2. 의존성 설치

```bash
npm install
```

### 3. Expo 실행

```bash
npx expo start
```

스타터 프로젝트의 UI는 Expo Go에서 확인할 수 있도록 구성합니다.

## 사용법

대시보드의 카드를 눌러 상세 화면으로 이동합니다. 실행 버튼은 **아직 연결되지 않았습니다** 안내만 표시합니다. 상세 화면의 개발용 미리보기는 측정 전, 측정 중, 완료, 오류 UI를 확인하기 위한 예시이며, 표시되는 값과 상태는 실제 기기에서 가져온 정보가 아닙니다. 권한과 마지막 체크 역시 실제 조회나 저장을 하지 않습니다.

## 구조와 실습 연결 지점

```text
src/
├── app/                           # URL 경로와 화면 진입점
│   ├── _layout.tsx                # 공통 안전 영역, 상태바, Stack 설정
│   ├── index.tsx                  # 홈 경로 → DashboardScreen
│   └── diagnostic/
│       └── [id].tsx               # 진단 ID 검증 → DiagnosticScreen
├── screens/                       # 화면 구성과 사용자 동작 처리
│   ├── DashboardScreen.tsx        # 진단 카드 목록, 권한·마지막 체크 안내
│   ├── DashboardScreen.styles.ts  # 대시보드 배치와 간격
│   ├── DiagnosticScreen.tsx       # 진단 정보, 상태 미리보기, 실행 버튼
│   └── DiagnosticScreen.styles.ts # 상세 화면 배치와 간격
├── components/                    # 화면에서 재사용하는 UI
│   ├── DiagnosticCard.tsx         # 진단 카드 표시와 클릭 전달
│   ├── DiagnosticCard.styles.ts   # 카드 색상 배경, 크기, 글자 스타일
│   ├── Status.tsx                 # StatusBadge와 StatusMessage
│   └── Status.styles.ts           # 상태 배지와 안내 영역 스타일
├── mocks/
│   └── diagnostics.ts             # 진단 항목 정의, 초기 결과, 예시 결과
├── services/
│   └── diagnosticService.ts       # 실제 진단 기능을 연결할 서비스 구현부
├── theme/
│   ├── colors.ts                  # 공통 색상
│   └── layout.styles.ts           # 앱 공통 안전 영역과 화면 배경
└── types/
    └── diagnostic.ts              # 진단 ID, 상태, 결과, 서비스 계약 타입
```

### 화면과 데이터가 연결되는 흐름

1. `app/index.tsx`가 `DashboardScreen`을 표시합니다. 대시보드는 `mocks/diagnostics.ts`의 진단 항목을 카드로 그립니다.
2. 카드를 누르면 `/diagnostic/[id]`로 이동합니다. `[id].tsx`는 ID가 유효한지 확인하고, 알 수 없는 ID는 홈으로 돌려보냅니다.
3. `DiagnosticScreen`은 `initialResult(id)`로 초기 상태를 만듭니다. 실행 버튼은 `diagnosticService.run(id)`를 호출하고 반환된 결과를 화면에 반영합니다.
4. 개발용 미리보기는 서비스를 호출하지 않고 `initialResult` 또는 `mockResult`로 화면 상태만 바꿉니다. 실제 측정이나 저장은 하지 않습니다.
5. `StatusBadge`와 `StatusMessage`가 결과의 상태와 안내 문구를 표시합니다. 진단 종류가 달라도 같은 UI를 사용합니다.

### 수정할 파일 찾기

| 수정하려는 내용 | 파일 |
| --- | --- |
| 화면에 표시할 진단 이름·설명·카드 그라데이션 | `src/mocks/diagnostics.ts` |
| 대시보드 카드 순서와 배치 | `src/screens/DashboardScreen.tsx` |
| 상세 화면 구성·실행·미리보기 동작 | `src/screens/DiagnosticScreen.tsx` |
| 화면의 여백·크기·정렬 | 해당 화면의 `.styles.ts` |
| 공통 카드·상태 표시 | `src/components/`의 `.tsx`와 `.styles.ts` |
| 경로·ID 검증·공통 내비게이션 설정 | `src/app/` |
| 실제 기기 기능 호출 | `src/services/diagnosticService.ts` |
| 서비스 결과 형식과 상태 종류 | `src/types/diagnostic.ts` |

스타일은 사용하는 화면이나 컴포넌트 옆의 `.styles.ts`에서 관리합니다. 진단별 배경색처럼 데이터에 따라 달라지는 값은 `.tsx`에서 스타일과 조합합니다. `src/app/`에는 라우트 파일만 두고, 재사용 UI와 스타일은 다른 폴더에 둡니다.

### 실제 기능 연결

강의에서는 `DiagnosticService` 계약을 유지하면서 서비스를 실제 구현으로 교체하고, 결과의 `source`, `status`, `rows`, `checkedAt`을 연결하세요. 권한 상태와 마지막 체크의 저장 및 갱신은 별도로 구현해야 합니다. 카메라 미리보기나 센서 스트림처럼 지속적인 네이티브 연동이 필요한 기능도 현재 비어 있습니다. 이 프로젝트에는 Kotlin/Swift 코드, 네이티브 이벤트 구독, 기기 접근 권한 설정이 없습니다.

## 네이티브 프로젝트 생성

강의에서는 Expo Prebuild를 사용해 Android와 iOS 네이티브 프로젝트를 생성합니다.

```bash
npx expo prebuild
```

생성 후에는 `android/`, `ios/` 디렉터리를 확인할 수 있습니다.

**주의:** `npx expo prebuild --clean`은 기존 네이티브 프로젝트를 삭제하고 다시 생성하므로, 직접 수정한 네이티브 코드가 사라질 수 있습니다.

## Development Build

네이티브 기능을 실행하려면 해당 코드가 포함된 개발용 앱을 빌드해야 합니다.

```bash
npx expo install expo-dev-client
```

Android:

```bash
npx expo run:android
```

iOS (macOS 필요):

```bash
npx expo run:ios
```

로컬 빌드에는 해당 플랫폼의 개발 도구가 준비되어 있어야 합니다.

## 학습 내용

이 프로젝트를 통해 다음 내용을 학습합니다.

- Expo Go와 Development Build의 차이
- Expo Prebuild 및 네이티브 프로젝트 구조
- Kotlin·Swift 네이티브 모듈 구현
- React Native와 네이티브 코드 연결
- 권한 및 센서 데이터 처리
- 네이티브 빌드 오류 분석
- Config Plugin과 네이티브 프로젝트 유지보수

## 참고 사항

- 본 프로젝트는 교육 목적으로 제작되었습니다.
- 전문적인 하드웨어 고장 진단 도구가 아닙니다.
- 일부 진단 기능은 기기 및 운영체제에 따라 지원 범위가 다를 수 있습니다.
- 실제 네이티브 기능 구현은 강의 진행에 따라 추가됩니다.

## 라이선스

라이선스는 별도 지정 예정입니다.
