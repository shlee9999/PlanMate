# ⭐Planmate ReadMe⭐


![image](https://github.com/user-attachments/assets/afc37f09-2f8e-4ee5-9882-8029c4a9afd2)


## ✨ 프로젝트 소개

PlanMate는 전문직 준비생들을 위한 학습 관리 및 커뮤니티 플랫폼입니다. 사용자가 효율적으로 학습 시간을 관리하고, 학습 패턴을 분석하며, 필요한 정보를 공유할 수 있도록 다양한 기능을 제공합니다.

배포 URL : https://plan-mate.vercel.app/

## 👪 팀원 구성

| **역할** | **이름** |
| --- | --- |
| 🖥️ FrontEnd | 이성훈 |
| 🛠️ BackEnd | 김호진 |
| 🎨 디자인 | 박소현 |
| 📝 기획 | 김인서 |

## ♻️ 개발 환경



- Front : React Typescript Redux
- Back : Java Spring
- Version & Issue Management : Git & Github
- Tools : Notion, Slack, Figma
- Service : Vercel
- Design : Figma

## 📃 컨벤션

### **파일 및 폴더 명명 규칙**

- 컴포넌트 파일: PascalCase (예: TimerButton.tsx)
- 훅 파일: camelCase, 'use' 접두사 사용 (예: useTimerItem.ts)
- 스타일 파일: styled.ts로 통일
- 유틸리티 파일: camelCase (예: dateUtils.ts)

### **폴더 구조**

- 기능별로 폴더 구분 (예: components, hooks, utils)
- 각 페이지나 주요 컴포넌트별로 하위 폴더 생성

### **컴포넌트 구조**

- 컴포넌트 로직과 스타일을 분리 (컴포넌트 파일과 styled.ts 파일)
- 큰 컴포넌트의 경우, 로직을 별도의 훅으로 분리
- React Query 관련 훅은 hooks/mutations 폴더에 분리

### **타입스크립트 사용**

- .ts 및 .tsx 확장자 사용
- 타입 정의 파일 사용 (types.ts)

### **상태 관리**

- Redux 사용 (상태 관리 모듈)

### **스타일링**

- styled-components 사용 (styled.ts 파일들)

### **주석 및 문서화**

- JSDoc 주석을 활용하여 주요 함수와 훅, 컴포넌트 설명

### **변수 및 함수 명명**

- 변수: camelCase (예: totalTime, studyHours)
- 상수: UPPER_SNAKE_CASE (예: MAX_HOURS)
- 함수: camelCase (예: calculateTotalTime())
- 컴포넌트: PascalCase (예: PostItem)
- 인터페이스, 타입: PascalCase (예: UserType)
- 이벤트 핸들러: 'on' 접두사 사용 (예: onSubmit)

### 커밋 컨벤션

- Feat: 새로운 기능 추가
- Fix: 버그 수정
- Remove: 파일 삭제
- Design: 디자인
- Rename: 이름 변경
- Move: 파일 이동 (디렉토리 구조 변경)
- Style: 코드 포맷팅, 세미콜론 누락 등 (코드 변경 없음)
- Refactor: 코드 리팩토링
- Test: 테스트 코드 추가 또는 수정
- Chore: 빌드 프로세스 또는 보조 도구 변경
## 🛠️ 채택한 개발 기술



1. Typescript
2. React
3. Redux
4. styled-components
5. framer-motion
6. draft-js

## 🌴 브랜치 전략



### **메인 브랜치 (main)**

- 배포 가능한 안정적인 버전의 코드를 관리합니다.
- 로컬에서 작업한 브랜치의 변경 사항을 머지합니다.

### **로컬 작업 브랜치**

- 새로운 기능 개발이나 버그 수정을 위해 로컬에서 브랜치를 생성합니다.
- 작업 완료 후 로컬에서 메인 브랜치로 머지합니다.
- 깃허브에는 메인 브랜치의 변경 사항만 푸시합니다.

### **장점**

- 로컬 브랜치를 통해 메인 브랜치의 안정성을 유지할 수 있었습니다.
- 기능별로 작업을 분리하여 체계적인 개발이 가능했습니다.

### **깃허브 단일 브랜치 사용 이유**

- 개발 당시 협업 경험 부족으로 깃허브에서는 단일 브랜치를 사용했습니다.
- 하지만 로컬 브랜치에서 충분히 다양한 깃 관련 CLI 명령어에 익숙해졌고, 이 경험 덕분에 이후 팀 프로젝트에서 적절히 활용하고 있습니다.

### **향후 개선 계획**

- 프로젝트 경험을 통해 브랜치 활용의 중요성을 깨달았습니다.
- 향후에는 깃허브에서도 브랜치를 적극 사용하여 협업과 코드 리뷰를 원활히 진행할 계획입니다.

### **기타 사항**

- 노션을 활용하여 이슈를 관리하고 우선순위를 정했습니다.
- 코드의 일관성과 유지보수성을 위해 내부 구조에 주의를 기울였습니다.

이 간단한 브랜치 전략은 프론트엔드 개발을 혼자 진행하게 된 이 프로젝트에서 효과적이었으며, 추후 협업 상황에 맞게 조정할 수 있는 능력을 기를 수 있었습니다.

## **🏗️ 프로젝트 구조**



프로젝트 구조가 방대해 다음과 같이 요약하였습니다. 

자세한 구조는 소스코드 참고

```
┣ 📂api # API 관련 함수 및 타입 정의
┣ 📂assets # 이미지, 아이콘 등 정적 자원
┣ 📂components # 재사용 가능한 React 컴포넌트
┣ 📂constants # 상수 정의
┣ 📂hooks # 커스텀 React 훅
┣ 📂modules # 상태 관리 모듈 (Redux)
┣ 📂pages # 페이지 컴포넌트
┣ 📂utils # 유틸리티 함수
┣ 📜App.tsx # 앱의 메인 컴포넌트
┣ 📜index.tsx # 앱의 진입점
┗ 📜router.tsx # 라우팅 설정
```

## **⏰ 개발 기간**



- 1차 개발: 2023.05 ~ 2023.08
- 2차 개발: 2024.01 (1개월)

## **🧐 신경 쓴 부분**



PlanMate 프로젝트를 개발하면서 다음과 같은 부분에 특히 주의를 기울였습니다.

### 사용자 경험(UX) 최적화

- React Query의 Mutation 등을 활용하여 데이터 관리와 상태 업데이트를 효율적으로 처리
- 자연스러운 애니메이션 구현으로 사용자 인터페이스의 반응성 향상

### 독자적인 컴포넌트 구현

- Calendar와 Scheduler 컴포넌트를 직접 구현하여 프로젝트의 특성에 맞는 맞춤형 기능 제공
- 어제와 오늘의 공부량을 그래프로 시각화하여 직관적인 비교 가능

### 반응형 디자인

- 모바일 환경을 고려한 반응형 레이아웃 구현으로 다양한 디바이스에서의 사용성 보장

### 코드 품질과 유지보수성

- Redux를 활용한 효율적인 상태 관리
- 체계적인 디렉토리 구조 설계로 코드의 가독성과 유지보수성 향상
- JSDoc 주석을 활용한 문서화로 개발 편의성 증대

### 협업 및 확장성 고려

- 프론트엔드 개발을 혼자 진행했지만, 향후 팀 협업을 고려한 코드 구조와 컨벤션 적용

이러한 노력을 통해 사용자 친화적이면서도 기술적으로 견고한 애플리케이션을 구현하고자 하였습니다.

## **📄 페이지별 기능**



### ⏱️[타이머]

![image](https://github.com/user-attachments/assets/1852a626-d8b6-4517-988f-ee5e43175d48)

### **1. 과목별 시간 측정 및 기본 CRUD**

- **과목 추가:** "과목 추가" 버튼을 통해 사용자가 새로운 과목을 추가할 수 있습니다.
- **과목 시간 측정:** 각 과목별로 독립적인 타이머가 있어 공부 시간을 측정할 수 있습니다. 타이머가 실시간으로 업데이트되어 현재 공부 중인 시간을 정확히 보여줍니다.
- **과목 편집:** 과목명 변경, 색상 변경 등의 편집 기능이 있습니다.
- **과목 삭제:** 불필요한 과목을 삭제할 수 있습니다.
- **휴식 타이머:** 공부를 정지하면 자동으로 휴식 타이머가 시작됩니다. 이는 실험적인 기능으로, 사용자의 전체 휴식 시간을 추적합니다.

### **2. 오늘 공부량 통계 시각화**

- **총 공부 시간:** 좌측 상단에 오늘의 총 공부 시간이 표시됩니다.
- **과목별 공부 시간 비율:** 원형 그래프를 통해 각 과목의 공부 시간 비율을 시각적으로 보여줍니다.
- **과목별 상세 시간:** 각 과목별로 오늘 공부한 시간이 표시됩니다.

### 3. D-Day 표시

- **D-Day 표시**: D-Day 페이지에서 고정한 D-Day를 타이머 페이지에서 확인할 수 있습니다.
- **D-Day 링크**: D-Day 설정 페이지로의 빠른 접근을 위해 타이머 페이지에 직접 링크가 제공됩니다.

이 페이지를 통해 사용자는 자신의 학습 패턴을 더 잘 이해하고 시간 관리 능력을 향상시킬 수 있으며, 중요한 날짜를 놓치지 않고 학습 계획을 세울 수 있습니다.

### 📊[통계]

![image](https://github.com/user-attachments/assets/9121e76c-5938-4ce3-b930-790ef7a7c78b)

통계 페이지는 사용자의 학습 데이터를 시각적으로 표현하여 학습 패턴과 진행 상황을 쉽게 파악할 수 있도록 설계되었습니다.

### **1. 캘린더를 이용한 날짜별 통계 시각화**

- 월별 캘린더 형태로 학습 데이터를 표시
- 각 날짜에 해당하는 학습 시간을 한눈에 확인 가능

### **2. 색상 코딩을 통한 학습량 표시**

- 날짜별 총 공부 시간에 따라 색상 강도가 달라짐
- 학습량이 많을수록 더 진한 색상으로 표시되어 직관적인 파악 가능

### **3. 시간별 그래프를 이용한 상세 분석**

- 선택한 날짜의 시간대별 학습량을 그래프로 표시
- 하루 중 가장 집중적으로 학습한 시간대를 쉽게 확인 가능
- 어제와의 학습량 비교를 통한 동기부여 가능

### **4. 과목별 학습 시간 비교**

- 원형 그래프를 통해 각 과목의 학습 시간 비율을 시각화
- 과목 간 학습 시간 균형을 한눈에 파악 가능

이 페이지를 통해 사용자는 자신의 학습 패턴을 객관적으로 분석하고, 더 효율적인 학습 계획을 수립할 수 있습니다. 시각적으로 명확한 데이터 제공으로 사용자의 학습 동기 부여와 자기 관리를 돕습니다.

### 📆[플래너]

![image](https://github.com/user-attachments/assets/614736b5-fe67-4a71-a133-329159db870f)
https://github.com/user-attachments/assets/39a09c93-02f5-4664-a5d8-634688e0ba66



### **1. 드래그&드랍으로 학습시간 추가**

- 사용자는 캘린더에 드래그&드랍 방식으로 쉽게 학습 시간을 추가할 수 있습니다.

### **2. 과목 별 색상 설정**

- 각 과목에 대해 사용자 정의 색상을 설정할 수 있어 시각적으로 구분하기 쉽습니다.

### **3. 과목 수정 기능**

- 과목을 클릭하면 시간, 제목, 색상 등을 수정할 수 있는 편집 모달이 활성화됩니다.

### **4. 삭제 버튼 활성화**

- 과목 위에 마우스를 올리면 우측 상단에 삭제 버튼이 나타나며, 클릭 시 해당 과목을 삭제할 수 있습니다.

### **5. 주차별 스케줄 확인**

- 좌측 상단의 화살표 버튼을 클릭하여 이전 주차의 스케줄을 확인할 수 있습니다.

### ℹ️[수험 정보]

![image](https://github.com/user-attachments/assets/6be8da7a-1657-4201-89f6-d02b341ab0d7)

### **1. 태그 별 필터링**

- 사용자는 상단의 태그를 클릭하여 관심 있는 분야의 게시물만 필터링할 수 있습니다.
- 예: #감정평가사, #회계사 등

### **2. 게시물 10개씩 보여짐**

- 각 페이지에서 최대 10개의 게시물을 표시하여 사용자가 쉽게 탐색할 수 있도록 합니다.

### **3. 페이지네이션 최적화**

- **`createPaginationNumbers`** 함수를 통해 페이지네이션을 최적화하여, 현재 페이지 주변의 번호를 효과적으로 표시합니다.
- 총 페이지 수가 10 이하인 경우 모든 페이지 번호를 표시하며, 그 이상일 경우 현재 페이지를 중심으로 10개의 번호를 보여줍니다.

### ✍️[글쓰기]

![image](https://github.com/user-attachments/assets/e1b105b0-fa1d-40e9-b86c-d2697da30ec9)

https://github.com/user-attachments/assets/b20d6a84-8a91-419b-8fd6-90e888b0126b


### 1. 텍스트 편집 도구

- draft-js를 활용한 텍스트 편집기가 구현되어 있습니다.
- 굵게(B), 기울임꼴(I), 밑줄(U) 등의 기본적인 텍스트 스타일링 옵션이 제공됩니다.
- 글자 크기 조절, 서식 지정 등의 추가 옵션도 있습니다.

### 2. 태그 선택

- 제목 입력란 옆에 태그를 선택할 수 있는 드롭다운 메뉴가 있습니다. 현재 "#기타"가 선택되어 있습니다.

### 3. 내용 작성

- 편집기 본문에 글을 작성할 수 있습니다. 현재 샘플 텍스트가 입력되어 있습니다.

### 4. 등록 버튼

- 페이지 하단 우측에 초록색 "등록" 버튼이 있어, 작성한 글을 게시할 수 있습니다.

### 5. 취소 버튼

- "등록" 버튼 옆에 "취소" 버튼이 있어, 글 작성을 취소하고 이전 페이지로 돌아갈 수 있습니다.

### ⚙️[마이페이지]

![image](https://github.com/user-attachments/assets/15e471df-5560-409f-91ce-d403b9725f0f)

### **1. 프로필 정보 표시**

- 사용자의 이름과 이메일 주소가 상단에 표시됩니다.

### **2. D-DAY 관리**

- "D-DAY 관리" 섹션이 있어 중요한 날짜를 확인하고 관리할 수 있습니다.
- "더보기 >" 버튼을 통해 D-DAY 설정 페이지로 이동할 수 있습니다.

### **3. 작성 글 모아보기**

- "작성한 글" 탭에서 사용자가 작성한 게시글 목록을 확인할 수 있습니다.
- 각 게시글의 제목, 작성 날짜, 조회수, 좋아요 수, 댓글 수가 표시됩니다.

### **4. 작성 댓글 모아보기**

- "작성한 댓글" 탭을 통해 사용자가 작성한 댓글 목록을 볼 수 있습니다.

### **5. 스크랩한 글 모아보기**

- "스크랩한 글" 탭에서 사용자가 스크랩한 게시글 목록을 확인할 수 있습니다.

### **6. 게시글 필터링 및 정렬**

- "작성한 글", "작성한 댓글", "스크랩한 글" 탭을 통해 각 카테고리별로 내용을 필터링할 수 있습니다.

### **7. 페이지네이션**

- 게시글 목록 하단에 페이지 번호가 표시되어 여러 페이지의 내용을 탐색할 수 있습니다.

이 마이페이지는 사용자의 활동 내역을 한눈에 볼 수 있게 구성되어 있으며, D-DAY 관리 기능을 통해 중요한 일정도 함께 관리할 수 있도록 설계되었습니다. 사용자는 자신의 글쓰기 활동, 댓글 활동, 관심 있는 글 등을 효과적으로 관리하고 확인할 수 있습니다.

### ✨[D-Day]

![image](https://github.com/user-attachments/assets/a9f3d69f-7ee3-40d6-8701-60cedda50437)


https://github.com/user-attachments/assets/d52fbf42-c5da-4b02-8675-533475687f69

**고정된 D-DAY가 타이머 페이지에 별도로 표시된 모습**
![{B112AA8A-D0CA-428B-8475-CD9D4F308DBD}](https://github.com/user-attachments/assets/9e487aa1-04d1-4b22-aca9-43aa78a337ec)

### **1. D-DAY 관리**

- 사용자는 중요한 날짜를 D-DAY로 설정하고 관리할 수 있습니다.
- 왼쪽 패널에 설정된 D-DAY 목록이 표시됩니다.
- D-DAY를 클릭 시 해당 D-DAY로 캘린더가 이동하고 수정 모드가 활성화됩니다.
- 수정 모드에서 삭제도 가능합니다.
- D-DAY 좌측 핀 버튼 클릭 시 해당 D-DAY를 고정할 수 있습니다.
- 고정된 D-DAY는 초록색 배경을 가지며 타이머 페이지에 별도로 표시되어 강조됩니다.

### **2. D-DAY 추가**

- 오른쪽 패널에서 새로운 D-DAY를 추가할 수 있습니다.
- 제목 입력란에 D-DAY의 이름을 입력할 수 있습니다.

### **3. 날짜 선택**

- 캘린더 인터페이스를 통해 D-DAY 날짜를 쉽게 선택할 수 있습니다.
- 연도와 월을 상단에서 선택할 수 있으며, 날짜는 캘린더에서 직접 클릭하여 선택합니다.

### **4. 등록 기능**

- 날짜 선택 후 하단의 '등록' 버튼을 클릭하여 새로운 D-DAY를 저장할 수 있습니다.

### **5. 실시간 업데이트**

- 새로운 D-DAY가 추가되면 왼쪽 패널의 목록이 실시간으로 업데이트됩니다.

### **6. 직관적인 UI**

- 사용자 친화적인 인터페이스로 설계되어 있어 쉽고 빠르게 D-DAY를 관리할 수 있습니다.

### **7. 타 페이지와의 연동**

- 설정된 D-DAY 정보는 타이머 페이지 등 다른 페이지에서도 표시되어 사용자가 중요한 날짜를 항상 인지할 수 있게 합니다.

이 D-Day 페이지를 통해 사용자는 중요한 시험일정이나 목표 날짜를 효과적으로 관리하고, 학습 계획을 세우는 데 도움을 받을 수 있습니다. 직관적인 인터페이스와 실시간 업데이트 기능은 사용자 경험을 향상시키고, 학습 동기 부여에 기여합니다.

## **📝 프로젝트 후기**



PlanMate 프로젝트는 제가 프론트엔드 개발자로서 성장하는 데 있어 중요한 시작점이 되었습니다. Typescript, React, Redux, Github, React Query 등 모든 기술이 처음이었지만, 프로젝트에 대한 열정과 도전 정신으로 완성할 수 있었습니다.

이 프로젝트는 다양한 기능과 넓은 디자인으로 인해 마크업부터 CSS, 기능 구현까지 모든 과정을 경험할 수 있는 기회였습니다. 이를 통해 CSS에 대한 이해도가 크게 향상되었고, Typescript에 익숙해질 수 있었으며, React와 Redux의 사용에 있어 실전 경험을 쌓을 수 있었습니다.
특히, 깃허브에서는 단일 브랜치만 사용했지만, 로컬에서는 다양한 브랜치를 활용하며 Git CLI 명령어에 익숙해질 수 있었습니다. 이는 이후 팀 프로젝트에서 협업 능력을 발휘하는 데 큰 도움이 되었습니다.

PlanMate는 단순한 프로젝트 이상의 의미를 가집니다. 개발 과정에서 부딪힌 수많은 시행착오와 문제 해결 경험은 저를 한 단계 성장시켰고, 프론트엔드 개발자로서의 자신감을 갖게 해주었습니다. 이 프로젝트는 앞으로도 제가 새로운 기술을 학습하고 역량을 발전시키는 데 있어 소중한 자산이 될 것입니다.
PlanMate 개발을 통해 얻은 경험을 바탕으로, 앞으로도 사용자 중심의 인터페이스 설계와 효율적인 상태 관리, 클린 코드 작성 등 프론트엔드 개발의 베스트 프랙티스를 추구하며 성장해 나가고자 합니다. 이 프로젝트는 제 개발자 인생에 있어 값진 첫걸음이었으며, 앞으로도도 끊임없이 도전하고 배우겠습니다.
