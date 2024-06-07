import React from "react";
import Marquee from "react-fast-marquee";
import data from "@/app/data.json";

export default function Banner() {
  return (
    <section className="relative w-screen h-[80vh] mx-auto bg-[#]">
      <div className="h-[40vh] flex justify-center pt-40">
        <code className="w-[50vw] font-extralight text-xl text-center">
          As a highly motivated and skilled software engineer,
          <br /> I bring a strong combination of technical expertise,
          problem-solving abilities, <br /> and a proactive mindset to deliver
          innovative solutions.
        </code>
      </div>
      <Marquee speed={200} className="bg-[#] h-max mt-20">
        {data.technologies.map((t) => {
          return (
            <p className="bg-[#] py-5 text-[100px] font-light px-[40px]">
              {t.name}
            </p>
          );
        })}
      </Marquee>
    </section>
  );
}
