import { create } from "zustand";

// 5가지 결과 타입키
export type ResultKey =
  | "steady" // 안정적인 팀 기둥형
  | "spark" // 아이디어 불꽃형
  | "bridge" // 소통 브릿지형
  | "craft" // 디테일 장인형
  | "growth"; // 성장 드리븐형

export type QuestionOption = {
  id: string;
  label: string;
  result: ResultKey;
};

export type Question = {
  id: number;
  text: string;
  options: QuestionOption[];
};

export type MatchResult = {
  key: ResultKey;
  title: string;
  subtitle: string;
  description: string;
};

/** 테스트 문항 */
const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "회사는 어떤 분위기에 더 가깝나요?",
    options: [
      {
        id: "1A",
        label: "안정적인 프로세스로 체계가 정리된 팀",
        result: "steady",
      },
      {
        id: "1B",
        label: "새로운 시도를 좋아하고 실험적인 팀",
        result: "spark",
      },
    ],
  },
  {
    id: 2,
    text: "협업 방식에 대해 더 와닿는 문장은?",
    options: [
      {
        id: "2A",
        label: "회의 전에 자료를 공유하고 합의된 방향대로 움직인다",
        result: "bridge",
      },
      {
        id: "2B",
        label: "일단 빠르게 만들어 보면서 틀을 잡고 조율한다",
        result: "growth",
      },
    ],
  },
  {
    id: 3,
    text: "작업 중 우선 순위는?",
    options: [
      {
        id: "3A",
        label:
          "픽셀, 디테일, 인터랙션부터 성능 검수까지 하나하나 꼼꼼하게 챙기는 걸 선호",
        result: "craft",
      },
      {
        id: "3B",
        label: "완벽보단 일정 안에 모든 일감을 처리하는 게 우선",
        result: "steady",
      },
    ],
  },
  {
    id: 4,
    text: "새로운 기술을 도입할 때 더 가까운 쪽은?",
    options: [
      {
        id: "4A",
        label: "팀 전체가 이해하고 함께 쓸 수 있을 때까지 충분히 설명하고 설득",
        result: "bridge",
      },
      {
        id: "4B",
        label: "작게라도 적용하며 만들어 보고 점차적으로 확대",
        result: "growth",
      },
    ],
  },
  {
    id: 5,
    text: "회사와 잘 맞는 동료를 떠올린다면?",
    options: [
      {
        id: "5A",
        label: "유연한 태도로 커뮤니케이션하고 분위기를 부드럽게 만드는 사람",
        result: "bridge",
      },
      {
        id: "5B",
        label: "꼼꼼하고 책임감 있고 끝까지 결과를 만들어내는 사람",
        result: "craft",
      },
    ],
  },
];

/** 결과 문구 */
const RESULTS: Record<ResultKey, MatchResult> = {
  steady: {
    key: "steady",
    title: "단단한 기둥형",
    subtitle: "안정적인 구조 속에서 흔들림 없이 꾸준히 성장하는 회사",
    description:
      "이 회사... 정직한 프로세스에 탄탄한 루틴으로 일하는 느낌입니다!💪🏻\n김별이도 이런 환경에 적응을 잘하는 편입니다.\nNotion, Trello, Jira 등을 활용하여 수정사항이나 협업, 개발 일정들을 꼼꼼하게 살펴보고 정직하게 지킵니다. 😊\n결론: 이 회사와 김별이가 만난다면 평화롭고 효율적으로 일할 수 있겠군요!⭐",
  },
  spark: {
    key: "spark",
    title: "불🔥꽃 아이디어🔥🎉",
    subtitle: "새로운 시도와 변화를 즐기는 회사",
    description:
      "새로운 시도를 좋아하고, 신기술을 도입하는 걸 무서워하지 않는 팀 분위기인가요?!\n김별이 또한 매일매일 달라지는 프론트엔드 생태계에서 살아남기 위해 신기술을 공부하는 걸 좋아합니다. 다같이 영!차!영!차 해 본다면, 상상하는 모든 것을 현실로 뽑아낼 수 있을 것 같습니다.\n 결론: 이 회사 + 김별이 = 에너지 MAX 🔥",
  },
  bridge: {
    key: "bridge",
    title: "자유로운 커뮤니케이션 지향",
    subtitle: "커뮤니케이션은 팀의 힘이다!💪🏻🔥",
    description:
      "이 회사는 소통과 협업을 중요하게 생각하는 것 같습니다.\n김별이 또한 원활한 커뮤니케이션을 지향하는 파워EEE 로서 이런 환경에서 빛납니다.\n기획/디자인/개발/PM 여러 포지션들과의 커뮤니케이션 자신있습니다.\n결론: 같이 일하면 스트레스도 줄어들고 일의 효율도 올라갑니다. 벌써 팀워크 맛집 예정. ^^;;",
  },
  craft: {
    key: "craft",
    title: "디테일은 생명이다!",
    subtitle: "완성도와 퀄리티를 중요하게 생각하는 회사",
    description:
      "하나의 이슈도 Fail N/A로 냅둘 수 없다.🏃‍♀️\n일정 안에서 최상의 퀄리티와 완성도를 뽑아내는 회사군요! 김별이는 모니터가 뚫어져라 신경 쓸 줄 압니다. 옆에서 조금 같이 봐 준다면 효율이 더 올라갑니다.🔥",
  },
  growth: {
    key: "growth",
    title: "성장 추진형 회사!",
    subtitle: "실험과 학습을 반복하며 성장하는 회사",
    description:
      "빠르게 바뀌는 환경에서 계속 배우고 성장하는 회사군요!\n3년차 웹프론트엔드 개발자인 김별이도 성장이 고픕니다.\n서로 가속도를 올려 주는 완벽한 시너지를 이뤄볼 수 있을 것 같아요. 함께 성장해봐요!💪🏻 ",
  },
};

type CompanyMatchState = {
  questions: Question[];
  results: Record<ResultKey, MatchResult>;
  currentIndex: number;
  answers: ResultKey[];
  finished: boolean;
  resultKey: ResultKey | null;
  /** 현재 문항에 대한 선택 */
  selectOption: (result: ResultKey) => void;
  /** 처음부터 다시 */
  reset: () => void;
};

export const useCompanyMatchStore = create<CompanyMatchState>((set, get) => ({
  questions: QUESTIONS,
  results: RESULTS,
  currentIndex: 0,
  answers: [],
  finished: false,
  resultKey: null,

  selectOption: (result) =>
    set((state) => {
      if (state.finished) return state;

      const newAnswers = [...state.answers, result];
      const isLast = state.currentIndex >= state.questions.length - 1;

      if (!isLast) {
        // 다음 문항으로
        return {
          ...state,
          answers: newAnswers,
          currentIndex: state.currentIndex + 1,
        };
      }

      // 마지막 문항이면 결과 계산
      const scores: Record<ResultKey, number> = {
        steady: 0,
        spark: 0,
        bridge: 0,
        craft: 0,
        growth: 0,
      };

      newAnswers.forEach((key) => {
        scores[key] += 1;
      });

      // 가장 점수 높은 타입 고르기 (동점이면 앞에 있는 타입이 선택됨)
      let bestKey: ResultKey = "steady";
      let bestScore = -1;

      (Object.entries(scores) as [ResultKey, number][]).forEach(
        ([key, value]) => {
          if (value > bestScore) {
            bestScore = value;
            bestKey = key;
          }
        }
      );

      return {
        ...state,
        answers: newAnswers,
        finished: true,
        resultKey: bestKey,
      };
    }),

  reset: () =>
    set({
      currentIndex: 0,
      answers: [],
      finished: false,
      resultKey: null,
    }),
}));
