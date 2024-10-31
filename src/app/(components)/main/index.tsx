"use client";
import Heading from "@/components/basic/heading";
import { CircularProgressbar } from "react-circular-progressbar";

export default function Main() {
  return (
    <main className="absolute z-10 top-0 bg-black inset-0 flex items-center justify-center">
      <div className="flex flex-col items-center bg-[#ffa8b6] p-4 rounded-xl">
        <Heading level={5} className="mb-5">
          Project Complete
        </Heading>
        <div className="border-4 border-black w-[130px] h-[130px] flex items-center justify-center rounded-full">
          <CircularProgressbar
            className="font-mont w-[100px] h-[100px]"
            value={65}
            text={`${65}%`}
            styles={{
              path: {
                stroke: "pink",
              },
            }}
          />
        </div>
        <div className="flex flex-col items-center pt-5">
          <Heading level={3}>2.5K</Heading>
          <span className="font-mont">Completed 2.5K Projects</span>
        </div>
      </div>
    </main>
  );
}
