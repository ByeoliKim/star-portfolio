"use client";
import Header from "@/components/layout/Header";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Header />
      {/* 콘텐츠 영역 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        className="relative z-10 px-6 pb-8 pt-2 md:px-10 md:pb-12 md:pt-2"
      >
        <section className="mt-8 grid gap-6 md:grid-cols-[1.2fr,1fr]">
          <div className="space-y-4">
            {/* 자기소개 메모 */}
            <div className="relative rounded-3xl border-4 border-[#00000027] bg-[#F5EBC8] px-5 py-4">
              <span className="absolute -top-3 left-6 inline-flex rounded-full bg-[#f0708b] px-3 py-0.5 text-xs font-semibold text-white">
                NEW
              </span>
              <p className="text-xl font-semibold text-[#000000d3] leading-relaxed tracking-tight">
                안녕하세요! <span>3년차 </span>
                <span className="underline">웹 프론트엔드 개발자</span>{" "}
                김별이입니다. ✨
                <br />
                사용자 경험 중심의 감정을 움직이는 인터랙티브 웹을 만들고
                싶습니다..
                <br />
                팀과 함께 성장하는 협업을 중요하게 생각해요.
              </p>
              <p className="mt-3 text-xs text-[#252849]/80">
                보유 기술 : React, Next.js, JavaScript, TypeScript, Vue, HTML,
                CSS, TailwindCSS v4, Zustand 상태관리, 퍼블리싱 퀄리티
                업그레이드 🔧
              </p>
            </div>

            {/* 스킬 카드 */}
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border-[3px] border-[#00000027] bg-[#D4E4F1] px-3 py-3 text-xs font-medium text-[#000000]">
                <p className="text-[14px] tracking-wide">스킬</p>
                <ul className="mt-1 space-y-0.5">
                  <li>Next.js / React</li>
                  <li>JavaScript / TypeScript / Zustand</li>
                  <li>Basic CSS / Tailwind CSS</li>
                </ul>
              </div>
              <div className="rounded-xl border-[3px] border-[#00000027] bg-[#EBD8DC] px-3 py-3 text-xs font-medium text-[#000000]">
                <p className="text-[14px] tracking-wide">협업</p>
                <ul className="mt-1 space-y-0.5">
                  <li>GIT / SVN</li>
                  <li>Figma / Zeplin / Photoshop</li>
                  <li>Notion / Jira / Slack</li>
                </ul>
              </div>
              <div className="rounded-xl border-[3px] border-[#00000027] bg-[#F0D9CC] px-3 py-3 text-xs font-medium text-[#000000]">
                <p className="text-[14px] tracking-wide">TMI</p>
                <ul className="mt-1 space-y-0.5">
                  <li>하프 마라톤 완주 기록 02:25:57 🏃‍♀️</li>
                  <li>
                    리그오브레전드 포지션 정글 서포터{" "}
                    <span className="text-black/60">실버4 달성</span>
                  </li>
                  <li>로스트아크 6 서포터 육성 중</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {/* 경력사항 */}
            <div className="rounded-xl border-4 border-[#00000027] bg-[#FFFFFF] px-4 py-4 text-xs text-[#000000]">
              <div className="mb-2 flex items-center justify-between">
                <p className="w-20 md:w-auto lg:w-auto pr-2 text-xs lg:text-sm font-medium tracking-wide">
                  연구소 이력
                </p>
                <span className="rounded-sm bg-[#F1F0EC] px-2 py-1 text-[12px] font-medium">
                  청강문화산업대학교 (2015. 03 ~ 2017. 02) 스마트폰 전공 졸업
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="rounded-sm bg-[#F1F0EC] px-2 py-2 text-black">
                  <p className="font-bold wrap-break-word">
                    노드게임즈 (2023.03~2025.12)
                  </p>
                  <p>아트팀 소속 </p>
                  <p>웹 프론트엔드 개발 및 퍼블리싱 리드</p>
                </div>
                <div className="rounded-sm bg-[#F1F0EC] px-2 py-2 text-black">
                  <p className="font-bold wrap-break-word">
                    디자인교과서 (2020.11 ~ 2022.05)
                  </p>
                  <p>프론트엔드1팀 소속</p>
                  <p>카페24 고도몰 기반 쇼핑몰 웹 퍼블리싱</p>
                </div>
                <div className="rounded-sm bg-[#F1F0EC] px-2 py-2 text-black">
                  <p className="font-bold">게임 QA</p>
                  <p>D 게임 회사 (2019.06 ~ 2020.03)</p>
                  <p>S 게임 회사 (2017.01 ~ 2019.01)</p>
                </div>
              </div>
            </div>

            {/* 링크 카드 */}
            <div className="rounded-xl border-4 border-[#00000027] bg-[#FFFFFF] px-4 py-4">
              <p className="text-[20px] font-semibold text-black/80 tracking-tighter">
                연구소 출입구로 들어오시면 저를 더 자세히 알 수 있습니다.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-black/90">
                <a
                  href="https://placid-ixia-e73.notion.site/a4ba4c25ca374e4984e39e4d51965aad"
                  target="_blank"
                  className="inline-flex items-center gap-1 rounded-full border-2 border-[#c9d3c017] bg-white px-3 py-1 text-[12px] font-semibold shadow-[0_3px_0_#c9d3c02c]"
                >
                  📒 Notion 이력서
                </a>
                <a
                  href="https://github.com/ByeoliKim"
                  target="_blank"
                  className="inline-flex items-center gap-1 rounded-full border-2 border-[#c9d3c017] bg-white px-3 py-1 text-[12px] font-semibold shadow-[0_3px_0_#c9d3c02c]"
                >
                  💻 GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
