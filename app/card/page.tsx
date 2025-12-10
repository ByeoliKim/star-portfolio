"use client";

import { useEffect, useRef, useState } from "react";
import * as htmlToImage from "html-to-image";
import Image from "next/image";
import starIcon from "@/public/assets/star.png";

type StickerType = "star" | "star2" | "heart" | "note";

type Sticker = {
  id: string;
  type: StickerType;
  x: number;
  y: number;
};

const STICKER_TYPES: { type: StickerType; label: string; emoji: string }[] = [
  { type: "star", label: "별 스티커", emoji: "⭐" },
  { type: "star2", label: "별 스티커2", emoji: "✨" },
  { type: "heart", label: "하트", emoji: "💗" },
  { type: "note", label: "음표", emoji: "🎵" },
];

const bgPresets = [
  { value: "#FFFDF5", label: "따뜻한 아이보리" },
  { value: "#FFE7FF", label: "연보라+핑크", grad: true },
  { value: "#E3F4FF", label: "하늘하늘" },
  { value: "#FFF4D6", label: "노랑노랑" },
  { value: "#DFF9E8", label: "민트민트" },
];

export default function Card() {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const dragBoundsRef = useRef<DOMRect | null>(null);

  const [bgColor, setBgColor] = useState<string>("#FFFDF5");
  const [useGradient, setUseGradient] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>("");
  const [name, setName] = useState<string>("김별이");

  const [stickers, setStickers] = useState<Sticker[]>([]);
  const [activeSticker, setActiveSticker] = useState<StickerType | null>(null);
  const [draggingId, setDraggingId] = useState<string | null>(null);

  const [downloading, setDownloading] = useState(false);

  const addSticker = (type: StickerType) => {
    setStickers((prev) => [
      ...prev,
      {
        id: `${type}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        type,
        x: 50 + (Math.random() * 20 - 10),
        y: 50 + (Math.random() * 20 - 10),
      },
    ]);
  };

  useEffect(() => {
    if (!draggingId) return;

    const handleMove = (e: PointerEvent) => {
      if (!dragBoundsRef.current) return;
      const rect = dragBoundsRef.current;

      const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
      const yPercent = ((e.clientY - rect.top) / rect.height) * 100;

      const clampedX = Math.max(0, Math.min(100, xPercent));
      const clampedY = Math.max(0, Math.min(100, yPercent));

      setStickers((prev) =>
        prev.map((s) =>
          s.id === draggingId ? { ...s, x: clampedX, y: clampedY } : s
        )
      );
    };

    const handleUp = () => {
      setDraggingId(null);
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
    window.addEventListener("pointercancel", handleUp);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
      window.removeEventListener("pointercancel", handleUp);
    };
  }, [draggingId, setStickers]);

  const handleStickerPointerDown = (
    e: React.PointerEvent<HTMLButtonElement>,
    id: string
  ) => {
    e.preventDefault();
    e.stopPropagation();
    if (!cardRef.current) return;
    dragBoundsRef.current = cardRef.current.getBoundingClientRect();
    setDraggingId(id);

    // 모바일에서 pointercapture 잡아두면 더 안정적
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  // png 로 다운로드 기능
  const handleDownload = async () => {
    if (!cardRef.current || downloading) return;

    try {
      setDownloading(true);

      const node = cardRef.current;

      // 렌더링 안정화를 위해 두 프레임 정도 기다리기
      await new Promise((r) =>
        requestAnimationFrame(() => requestAnimationFrame(r))
      );

      // 워밍업 캡처 (결과는 버림)
      try {
        await htmlToImage.toPng(node, {
          cacheBust: false,
          pixelRatio: 2,
        });
      } catch (e) {
        console.warn("warmup capture failed (무시 가능):", e);
      }

      // 더 대기하면 모바일에서 특히 도움됨
      await new Promise((r) => setTimeout(r, 120));

      // html-to-image 사용
      const dataUrl = await htmlToImage.toPng(node, {
        cacheBust: false,
        pixelRatio: 2,
      });

      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `business-card-kimbyeoli.png`;
      link.click();
    } catch (error) {
      console.error(error);
      alert("이미지 저장 중 오류가 발생했습니다. 😑");
    } finally {
      setDownloading(false);
    }
  };

  const clearStickers = () => {
    setStickers([]);
    setActiveSticker(null); // 스티커 선택 active 제거
  };
  const getEmoji = (type: StickerType) =>
    STICKER_TYPES.find((s) => s.type === type)?.emoji || "⭐";

  return (
    <main className="min-h-screen relative mt-20 md:mt-16 lg:mt-16 mx-auto">
      <h1 className="mt-1 px-4 md:px-0 lg:px-0 text-4xl md:text-7xl lg:text-7xl tracking-tight text-[#222] font-custom font-black text-center">
        김별이 명함 저장
      </h1>
      <div className="w-full max-w-5xl grid gap-8 md:grid-cols-[1.3fr,1fr] mt-25 md:mt-16 lg:mt-16 p-0 md:p-10 lg:p-10">
        {/* 명함 프리뷰 */}
        <section className="flex flex-col items-center gap-4">
          <div
            ref={cardRef}
            className="relative max-w-md aspect-video border border-black/20 w-[300px] h-[400px] bg-white overflow-hidden flex items-center justify-center"
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
                  {/* next 이미지 로더 때문에 간헐적으로 저장이 같이 안 되는 이슈 때문에 img 태그로 대체  */}
                  <div className="ImgWrap">
                    {/* <Image src={starIcon} alt="star icon" width={130} /> */}
                    <img
                      src={starIcon.src}
                      alt="star icon"
                      width={130}
                      height={130}
                      className="block"
                    />
                  </div>
                  <p className="text-lg font-normal tracking-tighter">
                    3년차 웹프론트엔드 개발자
                  </p>
                  <p className="text-5xl font-black leading-none tracking-tighter">
                    {name}
                  </p>
                </div>
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

              {/* 하단 정보 */}
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
              </div>
              {/* 드래그 가능한 스티커들 */}
              {stickers.map((sticker) => (
                <button
                  key={sticker.id}
                  type="button"
                  onPointerDown={(e) => handleStickerPointerDown(e, sticker.id)}
                  className="absolute cursor-move select-none text-3xl drop-shadow-[0_2px_0_rgba(0,0,0,0.25)]"
                  style={{
                    touchAction: "none",
                    left: `${sticker.x}%`,
                    top: `${sticker.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {getEmoji(sticker.type)}
                </button>
              ))}
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
          <button
            type="button"
            onClick={clearStickers}
            className="rounded-full bg-white border border-black/20 px-4 py-1.5 text-xs font-medium text-[#000000] cursor-pointer"
          >
            스티커 모두 지우기
          </button>
          <p className="text-xs text-black/60 px-6">
            * 스티커는 클릭해서 추가하고, 카드 위에서 드래그해서 위치를 조정할
            수 있어요.
          </p>
        </section>

        {/* 컨트롤 패널 */}
        <section className=" bg-white/70 p-5 flex flex-col gap-5 border-dotted border border-black/10 m-2">
          <h2 className="text-lg font-medium text-[#000000]">명함 꾸미기 🎨</h2>

          {/* 배경 선택 */}
          <div className="space-y-2">
            <p className="text-md font-semibold text-black/80 tracking-tight">
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
                  className={`h-9 rounded-full border border-black/20 px-3 text-sm font-semibold flex items-center gap-2 cursor-pointer ${
                    bgColor === bg.value && useGradient === !!bg.grad
                      ? "ring-2 ring-[#c9c9c9]"
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
          {/* 스티커 팔레트 */}
          <div className="space-y-2">
            <p className="text-md font-semibold text-black/80 tracking-tight">
              2. 스티커 선택 후 카드 위에 놓고 드래그해서 꾸미기
            </p>
            <div className="flex flex-wrap gap-2">
              {STICKER_TYPES.map((s) => (
                <button
                  key={s.type}
                  type="button"
                  onClick={() => {
                    setActiveSticker(s.type);
                    addSticker(s.type);
                  }}
                  className={`flex items-center gap-1 rounded-full border h-9 border-black/20 bg-white px-3 py-1 text-xs font-semibold cursor-pointer ${
                    activeSticker === s.type ? "ring-2 ring-[#c9c9c9]" : ""
                  }`}
                >
                  <span>{s.emoji}</span>
                  <span>{s.label}</span>
                </button>
              ))}
            </div>
            <p className="text-xs text-[#000000]/60">
              * 같은 스티커 여러 개도 추가할 수 있어요. (예: 하트 도배 ❤️)
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
