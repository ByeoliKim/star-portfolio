"use client";

import { useRef, useState } from "react";
import * as htmlToImage from "html-to-image";
import Image from "next/image";
import starIcon from "@/public/assets/star.png";

type DecoId = "none" | "star" | "star2" | "heart" | "note";

type DecoOption = {
  id: DecoId;
  label: string;
  emoji: string;
};

const decoOptions: DecoOption[] = [
  {
    id: "none",
    label: "사용 안 함",
    emoji: "",
  },
  {
    id: "star",
    label: "별 스티커",
    emoji: "⭐",
  },
  {
    id: "star2",
    label: "별 스티커2",
    emoji: "✨",
  },
  { id: "heart", label: "하트", emoji: "🩷" },
  { id: "note", label: "음표", emoji: "🎵" },
];

const bgPresets = [
  { value: "#FFFDF5", label: "아이보리" },
  { value: "#FFE7FF", label: "연보라+핑크", grad: true },
  { value: "#E3F4FF", label: "연하늘" },
  { value: "#FFF4D6", label: "라이트 옐로우" },
  { value: "#DFF9E8", label: "라이트 민트" },
];

export default function Card() {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [bgColor, setBgColor] = useState<string>("FFFDF5");
  const [useGradient, setUseGradient] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>("");
  const [name, setName] = useState<string>("김별이");
  const [deco1, setDeco1] = useState<DecoId>("star");
  const [deco2, setDeco2] = useState<DecoId>("star2");
  const [deco3, setDeco3] = useState<DecoId>("note");
  const [downloading, setDownloading] = useState(false);

  const getDecoById = (id: DecoId) =>
    decoOptions.find((d) => d.id === id) || decoOptions[0];

  const handleDownload = async () => {
    if (!cardRef.current || downloading) return;

    try {
      setDownloading(true);

      const node = cardRef.current;

      // html-to-image 사용
      const dataUrl = await htmlToImage.toPng(node, {
        cacheBust: true,
        pixelRatio: 2, // 해상도 업
      });

      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `business-card-${Date.now()}.png`;
      link.click();
    } catch (error) {
      console.error(error);
      alert("이미지 저장 중 오류가 발생했습니다. 😑");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <main className="min-h-screen relative mt-16 mx-auto">
      <h1 className="mt-1 px-4 md:px-0 lg:px-0 text-5xl md:text-7xl lg:text-7xl tracking-tight text-[#222] font-custom font-black text-center">
        김별이 명함 저장
      </h1>
      <div className="w-full max-w-5xl grid gap-8 md:grid-cols-[1.3fr,1fr] mt-25 md:mt-16 lg:mt-16 p-10">
        {/* 명함 프리뷰 */}
        <section className="flex flex-col items-center gap-4">
          <div
            ref={cardRef}
            className="relative max-w-md aspect-video border border-[#000000] w-[300px] h-[400px] bg-white overflow-hidden flex items-center justify-center"
            style={{
              background: useGradient
                ? "linear-gradient(135deg,#FFE7FF,#E3F4FF)"
                : bgColor,
            }}
          >
            {/* 내부 레이아웃 */}
            <div className="relative h-full w-full px-6 py-5 flex flex-col justify-between text-[#00000]">
              {/* 상단 영역 */}
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="">
                    <Image src={starIcon} alt="star icon" width={130} />
                  </div>
                  <p className="text-lg font-normal tracking-tighter">
                    3년차 웹프론트엔드 개발자
                  </p>
                  <p className="text-5xl font-black leading-none tracking-tighter">
                    {name}
                  </p>
                </div>

                {/* 데코1: 오른쪽 위 */}
                {deco1 !== "none" && (
                  <span className="text-3xl drop-shadow-[0_2px_0_rgba(0,0,0,0.25)]">
                    {getDecoById(deco1).emoji}
                  </span>
                )}
              </div>

              {/* 소개 영역 */}
              <div className="text-xs leading-relaxed tracking-tighter">
                <p className="font-normal">
                  사용자 경험 중심의 감정을 움직이는
                  <br />
                  인터랙티브 웹을 만들고 싶습니다.
                </p>
                <p className="text-[#000000]/75">
                  팀과 함께 성장하는 협업을 중요하게 생각해요.
                </p>
              </div>

              {/* 하단 정보 + 데코2/3 */}
              <div className="flex items-end justify-between">
                <div className="space-y-1 text-[11px]">
                  <p className="font-semibold">
                    Phone :{" "}
                    <span className="font-bold">
                      {phone || "010-4855-6720"}
                    </span>
                  </p>
                  <p className="font-semibold">
                    Email :{" "}
                    <span className="font-medium">213069@naver.com</span>
                  </p>
                  <p className="font-semibold">
                    GitHub :{" "}
                    <span className="font-medium">github.com/ByeoliKim</span>
                  </p>
                </div>

                <div className="flex flex-col items-end gap-2 pr-1">
                  {/* 데코2: 오른쪽 아래 아이콘 */}
                  {deco2 !== "none" && (
                    <span className="text-2xl drop-shadow-[0_2px_0_rgba(0,0,0,0.25)]">
                      {getDecoById(deco2).emoji}
                    </span>
                  )}
                  {/* 데코3: 살짝 겹치게 */}
                  {deco3 !== "none" && (
                    <span className="text-xl translate-x-3 translate-y-1 drop-shadow-[0_2px_0_rgba(0,0,0,0.25)]">
                      {getDecoById(deco3).emoji}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleDownload}
            disabled={downloading}
            className="rounded-full bg-[#FFDF6F] px-6 py-2 text-lg font-medium text-[#000000]  transition-transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 cursor-pointer"
          >
            {downloading ? "이미지 생성 중..." : "이미지(PNG)로 저장하기"}
          </button>
          <p className="text-sm text-[#252849]/60">
            * PC에서는 자동 다운로드, 모바일은 이미지 보기 후 저장하세요.
          </p>
        </section>

        {/* 컨트롤 패널 */}
        <section className=" bg-white/70 p-5 flex flex-col gap-5">
          <h2 className="text-lg font-medium text-[#000000]">명함 꾸미기 🎨</h2>

          {/* 배경 선택 */}
          <div className="space-y-2">
            <p className="text-xs font-semibold text-[#252849]">
              1. 배경 색 선택
            </p>
            <div className="flex flex-wrap gap-2">
              {bgPresets.map((bg) => (
                <button
                  key={bg.value}
                  type="button"
                  onClick={() => {
                    setBgColor(bg.value);
                    setUseGradient(!!bg.grad);
                  }}
                  className={`h-9 rounded-full border border-[#000000] px-3 text-sm font-semibold flex items-center gap-2 cursor-pointer ${
                    bgColor === bg.value && useGradient === !!bg.grad
                      ? "ring-2 ring-[#FF8BC2]"
                      : ""
                  }`}
                  style={{
                    background: bg.grad
                      ? "linear-gradient(135deg,#FFE7FF,#E3F4FF)"
                      : bg.value,
                  }}
                >
                  <span>{bg.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold text-[#252849]">2. 요소 선택</p>
            <DecoSelect
              label="요소 1 (오른쪽 상단)"
              value={deco1}
              onChange={setDeco1}
            />
            <DecoSelect
              label="요소 2 (오른쪽 하단)"
              value={deco2}
              onChange={setDeco2}
            />
            <DecoSelect
              label="요소 3 (요소2 옆)"
              value={deco3}
              onChange={setDeco3}
            />
          </div>
        </section>
      </div>
    </main>
  );
}

type DecoSelectProps = {
  label: string;
  value: DecoId;
  onChange: (id: DecoId) => void;
};

function DecoSelect({ label, value, onChange }: DecoSelectProps) {
  return (
    <div className="space-y-1">
      <p className="text-[11px] font-semibold text-[#252849]/80">{label}</p>
      <div className="flex flex-wrap gap-2">
        {decoOptions.map((opt) => (
          <button
            type="button"
            key={opt.id}
            onClick={() => onChange(opt.id)}
            className={`flex items-center gap-1 rounded-full border border-[#000000] bg-white px-3 py-1 text-sm font-semibold cursor-pointer ${
              opt.id === value ? "bg-[#FFE7FF]" : ""
            }`}
          >
            <span>{opt.emoji || "⛔"}</span>
            <span>{opt.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
