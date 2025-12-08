"use client";
import Image from "next/image";
import kimstar from "@/public/assets/kimstar.jpeg";

export default function Profile() {
  return (
    <>
      {/* 프로필 카드 */}
      <div className="mt-4 w-full md:max-w-[280px] lg:max-w-60 self-start rounded-3xl border-4 border-[#25284911] bg-[#FFF] p-2 shadow-[0_8px_0_#F1F0EC] md:mt-10">
        <div className="aspect-4/5 w-full rounded-[18px] bg-linear-to-tr from-[#FF9BC8] via-[#FFE76E] to-[#7FD6FF] relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center text-center text-sm font-bold text-[#252849] backdrop-blur-[2px] bg-white/10">
            <Image src={kimstar} alt="profile" />
          </div>
        </div>
        <div className="text-center">
          <p className="mt-2 text-xs font-semibold text-[#000000]">
            <span className="font-bold">김별이</span>{" "}
            <span className="font-bold">1996.03.12 (만29세)</span>
          </p>
          <p className="text-xs text-[#000000]">
            MBTI : <span className="font-semibold">ESTJ</span>{" "}
            <span>(정상)</span>
          </p>
        </div>
      </div>
    </>
  );
}
