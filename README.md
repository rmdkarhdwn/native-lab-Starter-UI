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
