"use client";

import { useCompanyMatchStore } from "@/store/companyMatchStore";
import { motion, AnimatePresence } from "framer-motion";

export function CompanyMatchTest() {
  const {
    questions,
    results,
    currentIndex,
    finished,
    resultKey,
    selectOption,
    reset,
  } = useCompanyMatchStore();

  const total = questions.length;
  const progress = Math.round(
    ((currentIndex + (finished ? 1 : 0)) / total) * 100
  );

  const currentQuestion = questions[currentIndex];

  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1, ease: "easeIn" }}
        className="mt-1 px-4 md:px-0 lg:px-0 text-5xl md:text-7xl lg:text-7xl tracking-tight text-[#222] font-custom font-black text-center"
      >
        회사와 김별이의 궁합은?!
      </motion.h1>
      <section className="w-full max-w mx-auto rounded-xl bg-transparent p-6 mt-14">
        <div className="mb-4 flex items-baseline lg:items-center justify-between flex-col lg:flex-row">
          <div>
            <p className="text-xs font-semibold text-[#252849]/70">
              회사와 별이의 궁합 테스트 🔍
            </p>
            {!finished ? (
              <h2 className="text-lg font-extrabold text-[#252849]">
                Q{currentIndex + 1}. 더 가까운 선택지를 골라 주세요! 😊
              </h2>
            ) : (
              <h2 className="text-lg font-extrabold text-[#252849]">
                결과 확인 🎉
              </h2>
            )}
          </div>
          <div className="flex flex-row lg:flex-col items-center lg:items-end gap-1">
            <span className="text-xs font-semibold text-[#252849]/70">
              진행도 {progress}%
            </span>
            <div className="h-2 w-28 overflow-hidden rounded-full bg-[#E3E6FF]">
              <motion.div
                className="h-full rounded-full bg-[#555555] transition-all"
                initial={false}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>

        {/* 질문/결과 전환 애니메이션 */}
        <AnimatePresence mode="wait">
          {/* 질문 영역 */}
          {!finished && currentQuestion && (
            <motion.div
              key={`q-${currentIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.2, ease: "easeIn" }}
              className="space-y-4"
            >
              <p className="text-xl font-medium text-[#000000]">
                {currentQuestion.text}
              </p>

              <div className="mt-2 flex flex-col gap-3">
                {currentQuestion.options.map((option) => (
                  <motion.button
                    key={option.id}
                    type="button"
                    onClick={() => selectOption(option.result)}
                    className="w-full rounded-2xl border-2 border-black/50 bg-white px-4 py-3 text-left text-xl font-semibold text-[#000000] transition-transform   cursor-pointer"
                  >
                    {option.label}
                  </motion.button>
                ))}
              </div>

              <p className="mt-3 text-[14px] font-medium text-[#252849]/70">
                · 총 {total}문항 중 {currentIndex + 1}문항입니다. · 선택에
                정답/오답은 없습니다!
              </p>
            </motion.div>
          )}

          {/* 결과 영역 */}
          {finished && resultKey && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="space-y-4"
            >
              {(() => {
                const result = results[resultKey];
                return (
                  <>
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 }}
                      className="rounded-2xl bg-[#D4E4F1] px-4 py-3 border-[3px] border-[#252849]"
                    >
                      <p className="text-md font-bold text-[#252849]/80">
                        이 테스트는 회사와 김별이 지원자의 궁합을 알아보는
                        재미있고 간단한 테스트였습니다.
                      </p>
                      <p className="text-md font-medium text-[#252849]/70">
                        어떤 결과가 나오든, 결론은 하나입니다.
                        <span className="font-semibold text-lg">
                          {""} “저는 같이 일하기 좋은 동료입니다. 😎”
                        </span>
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="rounded-2xl border-[3px] border-[#252849] bg-white px-4 py-4 shadow-[0_6px_0_#252849]"
                    >
                      <p className="text-xs font-semibold text-[#252849]/70">
                        회사 타입
                      </p>
                      <h3 className="text-lg font-extrabold text-[#252849]">
                        {result.title}
                      </h3>
                      <p className="text-md font-semibold text-[#252849]/80">
                        {result.subtitle}
                      </p>
                      <p className="mt-3 text-lg leading-relaxed text-[#252849] whitespace-pre-wrap">
                        {result.description}
                      </p>
                    </motion.div>
                  </>
                );
              })()}

              <div className="flex items-center justify-between gap-2">
                <motion.button
                  type="button"
                  onClick={reset}
                  whileTap={{ scale: 0.96, y: 1 }}
                  className="rounded-full border-2 border-[#252849] bg-white px-4 py-1.5 text-xs font-semibold text-[#252849] shadow-[0_3px_0_#252849] cursor-pointer"
                >
                  다시 해보기
                </motion.button>
                <p className="bg-amber-200 text-[16px] text-right text-[#252849]/70 font-bold">
                  * 귀한 시간을 내 주셔서 정말 감사합니다! (꾸벅)
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
