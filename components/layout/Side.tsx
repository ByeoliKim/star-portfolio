"use client";

export default function Side() {
  return (
    <>
      <div className="pointer-events-none absolute -top-7 left-1/2 z-20 -translate-x-1/2">
        <div className="h-9 w-28 rounded-t-3xl border-[6px] border-b-0 border-[#F1F0EC] bg-[#F1F0EC]" />
      </div>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-40 bg-[#ededed]  shadow-[0_12px_0_rgba(37,40,73,0.35)]" />
        {/* 구석 구석 도형들 */}
        <div className="absolute -left-10 top-24 h-24 w-24 rotate-[-8deg] rounded-4xl bg-[#fdcbdc]" />
        <div className="absolute -right-12 top-28 h-28 w-28 rotate-12 rounded-4xl bg-[#c0fcc7]" />
        <div className="absolute bottom-4 -left-8 h-60 w-60 rounded-full bg-[#fae8ad59]" />
        <div className="absolute bottom-14 right-6 h-24 w-24 rounded-[30px] border-4 border-dashed border-[#252849]/40" />
      </div>
    </>
  );
}
