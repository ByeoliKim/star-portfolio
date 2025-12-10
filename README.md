## 🌟 김별이 연구소

Next.js / TypeScript / Tailwind CSS / Zustand 기반으로 만든 자기소개 페이지입니다.
정적인 느낌보다는 재미있게 만들어보고 싶었습니다.


## 🔗 배포

- 주요 페이지
  - `/mbti` : 회사와 나의 궁합 알아보기 (MBTI 느낌 테스트)
  - `/card` : 명함 꾸미기 & PNG 이미지 저장


## ✨ 주요 기능

### 1. 자기소개 랜딩 페이지

- 간단한 소개, 역할, 작업 스타일을 한 눈에 볼 수 있는 섹션
- Next.js App Router 기반 레이아웃
- Tailwind로 반응형 구성 (모바일 / 태블릿 / 데스크탑)

### 2. 회사와 나의 궁합 알아보기 (`/mbti`)

“이 회사와 별이는 잘 맞을까요?”를 5문항 테스트로 풀어낸 가벼운 궁합 테스트

- **Zustand**로 질문·답변·결과 상태 관리
- 5개의 질문에 답하면, 회사 타입에 따라 다음과 같은 결과 중 하나 노출

- 하지만 결론은 항상 하나입니다!
  - “어떤 타입이든, 이 회사와 별이는 잘 맞습니다”  
  - 성향, 협업 관점에서 저의 강점을 강조했어요.

### 3. 명함 꾸미기 & 저장하기 (`/card`)

직접 김별이의 명함을 꾸미고, PNG로 저장해 볼 수 있어요.

- 명함 배경 선택
  - 5가지 배경 색이 존재함.
- 명함 스티커로 꾸미기
  - 스티커 타입: ⭐ 별, ✨ 별2, 💗 하트, 🎵 음표
  - 스티커는 더 추가할 예정 *
  - 드래그로 위치 조정 (PC + 모바일 모두 대응)
- PNG 이미지로 명함 저장
  - `html-to-image` 라이브러리로 카드 영역만 캡처
  - 배포 환경 / 모바일에서의 첫 캡처 이슈를 고려한 안정화 처리를 했어요.

## 구현 디테일 & 트러블슈팅 포인트
1. Zustand로 테스트 로직 관리
- 질문 목록(QUESTIONS)
- 결과 타입(RESULTS)
- 현재 인덱스, 사용자가 고른 답변, 테스트 완료 여부를 모두 Zustand store 한 곳에서 관리하도록 설계했어요.
2. Pointer Events API 사용
- UX가 어지러워서 수정을 조금 했습니다.
- 모바일에서만 드래그가 안 되는 문제가 있어 onPointerDown 을 활용했어요.
- 드래그와 스크롤이 섞이면 모바일에서 버벅거리는 문제가 있어서 스티커 버튼에만 touchAction: "none"을 적용했어요.
3. html-to-image 캡처 안정화 (모바일 최초 캡처 시 버그 대응)
- 모바일 브라우저에서 최초 진입 시, 첫 저장에서만 이미지 요소가 캡처되지 않는 이슈가 발생했어요. 원인은 브라우저 렌더/페인트 타이밍과 캡처 타이밍의 미묘한 차이 때문이었습니다. 이를 해결하기 위해 캡처 전에 requestAnimationFrame 2회 + setTimeout으로 렌더 안정화 “워밍업 캡처”를 한 번 실행해 브라우저가 DOM을 확실히 그리게 한 뒤, 첫 캡처부터 명함 전체가 안정적으로 저장되도록 처리했습니다.

## 🧰 Tech Stack

- **Framework**
  - Next.js (App Router)
  - React
  - TypeScript

- **Styling**
  - Tailwind CSS
  - 반응형 레이아웃

- **State Management**
  - Zustand

- **Etc**
  - html-to-image
  - Pointer Events API

---

## 🧱 폴더 구조

```txt
src/
├─ app/
│  ├─ page.tsx              # 메인 자기소개 페이지
│  ├─ mbti/
│  │  └─ page.tsx           # 회사와 나의 궁합 테스트 페이지
│  ├─ card/
│  │  └─ page.tsx           # 명함 꾸미기 & PNG 저장 페이지
│  └─ globals.css           # Tailwind 및 전역 스타일
├─ store/
│  └─ companyMatchStore.ts  # Zustand 기반 궁합 테스트 상태 관리
└─ public/
   └─ assets/
      └─ star.png           # 명함 상단 아이콘 이미지
