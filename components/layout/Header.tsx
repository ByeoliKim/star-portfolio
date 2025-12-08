"use client";

import Link from "next/link";
import Profile from "./Profie";

export default function Header() {
  return (
    <>
      {/* 타이틀 영역 */}
      <section className="relative flex flex-col pt-10 px-6 md:flex-row md:items-end md:justify-between lg:justify-evenly">
        <div className="space-y-3">
          <ul className="flex justify-between md:justify-start lg:justify-start gap-2 tracking-tighter sm:text-md md:text-xl lg:text-xl text-black/70 font-semibold">
            <li className="hover:text-black/90 transition-colors border-b">
              <Link href="/mbti">회사와 나의 궁합 테스트 🤍</Link>
            </li>
            <li className="hover:text-black/90 transition-colors">
              <Link href="/card">명함 저장</Link>
            </li>
          </ul>
          <div className="inline-flex items-center gap-2 rounded-full border-[3px] border-[#252849] bg-[#ededed] px-4 py-1 text-xs font-semibold tracking-tight text-[#252849] shadow-[0_4px_0_#252849]">
            <span className="rounded-full bg-[#FFDF6F] px-2 py-0.5 text-[10px]">
              DEV
            </span>
            <span>WEB FRONTEND</span>
          </div>
          <div className="leading-tight">
            <h1 className="mt-1 text-7xl md:text-[160px] lg:text-[160px] tracking-tight text-[#f8f8f8] drop-shadow-[0_4px_0_#252849] text-stroke font-custom text-rotate">
              김별이
              <strong className="block text-[#88d3f5]">연구소</strong>
            </h1>
          </div>
        </div>
        <Profile />
      </section>
    </>
  );
}
