"use client";

import Link from "next/link";

type BgProps = {
  children: React.ReactNode;
};

export default function Bg({ children }: BgProps) {
  return (
    <>
      <main className="min-h-screen bg-[#F1F0EC] flex items-center justify-center px-4 py-10">
        <Link className="absolute top-2" href="/">
          ⭐
        </Link>
        <div className="relative w-full max-w-4xl overflow-hidden rounded-4xl border-[6px] border-[#F1F0EC] bg-[#FFFDF5] shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
          {children}
        </div>
      </main>
    </>
  );
}
