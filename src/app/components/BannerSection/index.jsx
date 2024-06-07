import React from "react";
import Marquee from "react-fast-marquee";
import data from "@/app/data.json";

export default function Banner() {
  return (
    <section className="relative w-screen h-screen mx-auto bg-[#]">
      <div className="h-[50vh]">d</div>
      <Marquee speed={300} className="bg-[#] h-max ">
        {data.technologies.map((t) => {
          return (
            <p className="bg-[] h-[70px] text-[100px] text-white uppercase font-light px-10">
              <img className="h-full" src={t.image} alt={t.name} />
            </p>
          );
        })}
      </Marquee>
    </section>
  );
}
