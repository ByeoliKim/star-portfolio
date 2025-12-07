import Image from "next/image";
import kimstar from "@/public/assets/kimstar.jpeg";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-[#F1F0EC] flex items-center justify-center px-4 py-10">
        <div className="relative w-full max-w-4xl overflow-hidden rounded-4xl border-[6px] border-[#F1F0EC] bg-[#FFFDF5] shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
          {/* 상단 클립보드 */}
          <div className="pointer-events-none absolute -top-7 left-1/2 z-20 -translate-x-1/2">
            <div className="h-9 w-28 rounded-t-3xl border-[6px] border-b-0 border-[#F1F0EC] bg-[#F1F0EC]" />
          </div>

          {/* 배경 패턴 & 장식 */}
          <div className="pointer-events-none absolute inset-0">
            {/* 노란 체크배경 느낌 */}
            <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,#F6D96F_1px,transparent_0)] bg-bg-size-[36px_36px] opacity-40" />
            {/* 파란 상단 배경 */}
            <div className="absolute inset-x-0 top-0 h-40 bg-[#63B7FF] rounded-b-[48px] shadow-[0_12px_0_rgba(37,40,73,0.35)]" />
            {/* 구석 구석 도형들 */}
            <div className="absolute -left-10 top-24 h-24 w-24 rotate-[-8deg] rounded-4xl bg-[#FF8BC2]" />
            <div className="absolute -right-10 top-32 h-28 w-28 rotate-12 rounded-4xl bg-[#5FD2B5]" />
            <div className="absolute bottom-4 left-6 h-16 w-16 rounded-full bg-[#FFDF6F]" />
            <div className="absolute bottom-10 right-10 h-24 w-24 rounded-[30px] border-4 border-dashed border-[#252849]/40" />
          </div>

          {/* 실제 콘텐츠 */}
          <div className="relative z-10 px-6 pb-8 pt-16 md:px-10 md:pb-12 md:pt-20">
            {/* 타이틀 영역 */}
            <section className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full border-[3px] border-[#252849] bg-white px-4 py-1 text-xs font-semibold tracking-tight text-[#252849] shadow-[0_4px_0_#252849]">
                  <span className="rounded-full bg-[#FFDF6F] px-2 py-0.5 text-[10px]">
                    DEV
                  </span>
                  <span>WEB FRONTEND</span>
                </div>
                <div className="leading-tight">
                  {/* <p className="text-sm font-semibold text-white drop-shadow-[0_2px_0_rgba(0,0,0,0.4)]">
                    ✨ 오늘의 연구소
                  </p> */}
                  <h1 className="mt-1 text-5xl lg:text-[160px] tracking-tight text-[#f8f8f8] drop-shadow-[0_4px_0_#252849] text-stroke font-custom text-rotate">
                    김별이
                    <strong className="block text-[#42cb7c]">연구소</strong>
                  </h1>
                </div>
              </div>

              {/* 작은 프로필 카드 (사진 들어갈 자리) */}
              <div className="mt-4 w-full max-w-[180px] self-start rounded-3xl border-4 border-[#252849] bg-[#FFF] p-2 shadow-[0_8px_0_#252849] md:mt-0">
                <div className="aspect-4/5 w-full rounded-[18px] bg-linear-to-tr from-[#FF9BC8] via-[#FFE76E] to-[#7FD6FF] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-center text-sm font-bold text-[#252849] backdrop-blur-[2px] bg-white/10">
                    <Image src={kimstar} alt="profile" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="mt-2 text-xs font-semibold text-[#252849]">
                    <span className="font-bold">김별이</span>{" "}
                    <span className="font-bold">1996.03.12 (만29세)</span>
                  </p>
                  <p className="text-xs text-[#252849]">
                    MBTI : <span className="font-semibold">ESTJ</span>{" "}
                    <span>(정상)</span>
                  </p>
                </div>
              </div>
            </section>

            {/* 가운데 본문 영역 */}
            <section className="mt-8 grid gap-6 md:grid-cols-[1.2fr,1fr]">
              {/* 왼쪽 - 자기소개 & 스킬 */}
              <div className="space-y-4">
                {/* 자기소개 메모 */}
                <div className="relative rounded-3xl border-4 border-[#252849] bg-[#FFF7B3] px-5 py-4 shadow-[0_8px_0_#252849]">
                  <span className="absolute -top-3 left-6 inline-flex rounded-full bg-[#FF8BC2] px-3 py-0.5 text-xs font-bold text-white shadow-[0_3px_0_rgba(0,0,0,0.25)]">
                    자기소개 메모
                  </span>
                  <p className="text-sm font-semibold text-[#252849] leading-relaxed">
                    안녕하세요! <span>3년차 </span>
                    <span className="underline">웹 프론트엔드 개발자</span>{" "}
                    김별이입니다. ✨
                    <br />
                    사용자 경험 중심의 감정을 움직이는 인터랙티브 웹을 만들고
                    싶습니다.
                    <br />
                    팀과 함께 성장하는 협업을 중요하게 생각해요.
                  </p>
                  <p className="mt-3 text-xs text-[#252849]/80">
                    보유 기술 : React, Next.js, JavaScript, TypeScript, HTML,
                    CSS, TailwindCSS v4, Zustand 상태관리, 퍼블리싱 퀄리티
                    업그레이드 🔧
                  </p>
                </div>

                {/* 스킬 카드 */}
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-[20px] border-[3px] border-[#252849] bg-[#C7F4FF] px-3 py-3 text-xs font-semibold text-[#252849] shadow-[0_5px_0_#252849]">
                    <p className="text-[11px] uppercase tracking-wide">스킬</p>
                    <ul className="mt-1 space-y-0.5">
                      <li>Next.js / React</li>
                      <li>JavaScript / TypeScript</li>
                      <li>Basic CSS / Tailwind CSS</li>
                    </ul>
                  </div>
                  <div className="rounded-[20px] border-[3px] border-[#252849] bg-[#FFD6F1] px-3 py-3 text-xs font-semibold text-[#252849] shadow-[0_5px_0_#252849]">
                    <p className="text-[11px] uppercase tracking-wide">협업</p>
                    <ul className="mt-1 space-y-0.5">
                      <li>GIT / SVN</li>
                      <li>Figma / Zeplin / Photoshop</li>
                      <li>Notion / Jira / Slack</li>
                    </ul>
                  </div>
                  <div className="rounded-[20px] border-[3px] border-[#252849] bg-[#FFE9B8] px-3 py-3 text-xs font-semibold text-[#252849] shadow-[0_5px_0_#252849]">
                    <p className="text-[11px] uppercase tracking-wide">TMI</p>
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

              {/* 오른쪽 - 요일 스케줄 + 링크 */}
              <div className="space-y-4">
                {/* 연구 스케줄 */}
                <div className="rounded-3xl border-4 border-[#252849] bg-white px-4 py-4 text-xs text-[#252849] shadow-[0_8px_0_#252849]">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-sm font-extrabold">연구소 이력</p>
                    <span className="rounded-full bg-[#FFDF6F] px-2 py-0.5 text-[10px] font-semibold">
                      청강문화산업대학교 (2015. 03 ~ 2017. 02) 스마트폰 전공
                      졸업
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-[11px]">
                    <div className="rounded-[14px] bg-[#DBD3DC] px-2 py-2 text-black">
                      <p className="font-bold">노드게임즈 (2023.03~2025.12)</p>
                      <p>아트팀 소속 </p>
                      <p>웹 프론트엔드 개발 및 퍼블리싱 리드</p>
                    </div>
                    <div className="rounded-[14px] bg-[#DBD3DC] px-2 py-2 text-black">
                      <p className="font-bold">
                        디자인교과서 (2020.11 ~ 2022.05)
                      </p>
                      <p>프론트엔드1팀 소속</p>
                      <p>카페24 고도몰 기반 쇼핑몰 웹 퍼블리싱</p>
                    </div>
                    <div className="rounded-[14px] bg-[#DBD3DC] px-2 py-2 text-black">
                      <p className="font-bold">게임 QA</p>
                      <p>D 게임 회사 (2019.06 ~ 2020.03)</p>
                      <p>S 게임 회사 (2017.01 ~ 2019.01)</p>
                    </div>
                  </div>
                </div>

                {/* 링크 카드 */}
                <div className="rounded-3xl border-4 border-[#252849] bg-[#E3F0FF] px-4 py-4 text-xs text-[#252849] shadow-[0_8px_0_#252849]">
                  <p className="text-sm font-extrabold">
                    연구소 출입구로 들어오시면 저를 더 자세히 알 수 있습니다.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a
                      href="https://placid-ixia-e73.notion.site/a4ba4c25ca374e4984e39e4d51965aad"
                      target="_blank"
                      className="inline-flex items-center gap-1 rounded-full border-2 border-[#252849] bg-white px-3 py-1 text-[11px] font-semibold shadow-[0_3px_0_#252849]"
                    >
                      📒 Notion 이력서
                    </a>
                    <a
                      href="https://github.com/ByeoliKim"
                      target="_blank"
                      className="inline-flex items-center gap-1 rounded-full border-2 border-[#252849] bg-white px-3 py-1 text-[11px] font-semibold shadow-[0_3px_0_#252849]"
                    >
                      💻 GitHub
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* 하단 한 줄 */}
            <section className="mt-7 flex flex-wrap items-center justify-between gap-2 text-[10px] text-[#252849]/80">
              <p>#긍정 #실행력 #친화력</p>
              <p>모든 실험은 팀원과의 즐거운 협업 아래 진행됩니다 🧪</p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
