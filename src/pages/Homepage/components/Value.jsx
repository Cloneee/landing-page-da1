import React from "react";

function Value() {
  return (
    <div className="p-8">
      <div className="flex w-full flex-col items-center gap-12 text-5xl font-bold">
        Value
        <div className="w-24 h-2 bg-gradient-to-r from-[#33BFFD] to-[#D7F51B]" />
      </div>
      <div className="mt-16 grid grid-cols-2 grid-rows-2 gap-8">
        <div className="relative h-64 w-full rounded-tl-3xl rounded-br-3xl bg-neutral-100">
          <span className="absolute right-4 bottom-4 text-8xl text-gray-200">
            1
          </span>
          <div className="relative z-10 flex flex-col gap-8 p-4">
            <div className="text-2xl font-bold tracking-tight text-teal-400">
              IDEATE
            </div>
            <div className="">
              Sub title here Sub title here Sub title here Sub title here{" "}
            </div>
            <div className="">
              We share our longstanding insights, experiences, and knowledge in
              product, engineering, marketing, and risk management with
              entrepreneurs to fuel the growth of their companies.
            </div>
          </div>
        </div>
        <div className="relative h-64 w-full rounded-tl-3xl rounded-br-3xl bg-neutral-100">
          <span className="absolute right-4 bottom-4 text-8xl text-gray-200">
            2
          </span>
          <div className="relative z-10 flex flex-col gap-8 p-4">
            <div className="text-2xl font-bold tracking-tight text-indigo-600">
              DESIGN
            </div>
            <div className="">
              Sub title here Sub title here Sub title here Sub title here{" "}
            </div>
            <div className="">
              We share our longstanding insights, experiences, and knowledge in
              product, engineering, marketing, and risk management with
              entrepreneurs to fuel the growth of their companies.
            </div>
          </div>
        </div>
        <div className="relative h-64 w-full rounded-tl-3xl rounded-br-3xl bg-neutral-100">
          <span className="absolute right-4 bottom-4 text-8xl text-gray-200">
            3
          </span>
          <div className="relative z-10 flex flex-col gap-8 p-4">
            <div className="text-2xl font-bold tracking-tight text-orange-500">
              BUILD
            </div>
            <div className="">
              Sub title here Sub title here Sub title here Sub title here{" "}
            </div>
            <div className="">
              We share our longstanding insights, experiences, and knowledge in
              product, engineering, marketing, and risk management with
              entrepreneurs to fuel the growth of their companies.
            </div>
          </div>
        </div>
        <div className="relative h-64 w-full rounded-tl-3xl rounded-br-3xl bg-neutral-100">
          <span className="absolute right-4 bottom-4 text-8xl text-gray-200">
            4
          </span>
          <div className="relative z-10 flex flex-col gap-8 p-4">
            <div className="text-2xl font-bold tracking-tight text-cyan-400">
              GO TO MARKET STRATEGY
            </div>
            <div className="">
              Sub title here Sub title here Sub title here Sub title here{" "}
            </div>
            <div className="">
              We share our longstanding insights, experiences, and knowledge in
              product, engineering, marketing, and risk management with
              entrepreneurs to fuel the growth of their companies.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Value;
