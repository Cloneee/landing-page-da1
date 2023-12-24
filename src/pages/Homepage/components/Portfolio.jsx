import React from "react";
import hashIcon from "./assets/hash.svg";
import SCREEN1 from "./assets/screen1.png";
import SCREEN2 from "./assets/screen2.png";
import SCREEN3 from "./assets/screen3.png";
import SCREEN4 from "./assets/screen4.png";

function Portfolio() {
  return (
    <div className="p-8">
      <div className="flex w-full flex-col items-center gap-12 text-5xl font-bold">
        Portfolio
        <div className="w-24 h-2 bg-gradient-to-r from-[#33BFFD] to-[#D7F51B]" />
      </div>
      <div className="flex">
        <div className="flex flex-1 gap-8">
          <div className="inline-flex h-11 items-center justify-start gap-2 rounded-3xl bg-zinc-100 p-3">
            <div className="h-4 w-4">
              <img src={hashIcon} alt="" />
            </div>
            <div className="text-base font-bold leading-tight tracking-tight text-neutral-900">
              Ecommerce
            </div>
          </div>
          <div className="inline-flex h-11 items-center justify-start gap-2 rounded-3xl bg-zinc-100 p-3">
            <div className="h-4 w-4">
              <img src={hashIcon} alt="" />
            </div>
            <div className="text-base font-bold leading-tight tracking-tight text-neutral-900">
              Travel
            </div>
          </div>
          <div className="inline-flex h-11 items-center justify-start gap-2 rounded-3xl bg-zinc-100 p-3">
            <div className="h-4 w-4">
              <img src={hashIcon} alt="" />
            </div>
            <div className="text-base font-bold leading-tight tracking-tight text-neutral-900">
              Corporate
            </div>
          </div>
        </div>
        <div className="inline-flex h-11 w-36 items-center justify-center rounded-tl-xl rounded-br-xl border-2 border-stone-950 gap-2.5">
          <div className="text-center text-xs font-black text-stone-950">
            LEARN MORE
          </div>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-2 grid-rows-2 gap-8">
        <div className="relative h-64 w-full rounded-tl-3xl rounded-br-3xl bg-orange-400 p-4">
          <div className="flex h-full flex-col text-white ">
            <div className="font-black">HAPPY HUMAN</div>
            <div># Ecommerce</div>
            <div className="mt-auto font-bold">2022</div>
          </div>
          <img
            src={SCREEN1}
            alt=""
            className="absolute bottom-0 right-0 w-48"
          />
        </div>
        <div className="relative h-64 w-full rounded-tl-3xl rounded-br-3xl bg-violet-600 p-4">
          <div className="flex h-full flex-col text-white ">
            <div className="font-black">EVER DEAN</div>
            <div># Ecommerce</div>
            <div className="mt-auto font-bold">2022</div>
          </div>
          <img
            src={SCREEN2}
            alt=""
            className="absolute bottom-0 right-0 w-48"
          />
        </div>
        <div className="relative h-64 w-full rounded-tl-3xl rounded-br-3xl bg-emerald-600 p-4">
          <div className="flex h-full flex-col text-white ">
            <div className="font-black">BOLD WOLF</div>
            <div># Travel</div>
            <div className="mt-auto font-bold">2022</div>
          </div>
          <img
            src={SCREEN3}
            alt=""
            className="absolute bottom-0 right-0 w-48"
          />
        </div>
        <div className="relative h-64 w-full rounded-tl-3xl rounded-br-3xl bg-cyan-500 p-4">
          <div className="flex h-full flex-col text-white ">
            <div className="font-black">1927</div>
            <div># Corporate</div>
            <div className="mt-auto font-bold">2022</div>
          </div>
          <img
            src={SCREEN4}
            alt=""
            className="absolute bottom-0 right-0 w-48"
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
