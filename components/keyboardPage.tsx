"use client";
import Image from "next/image";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import React, { useRef, useState } from "react";
gsap.registerPlugin(ScrollTrigger);
type keyboardType = {
  id: number;
  title: string;
  slug: string;
  price: number;
  image: string;
  summary: string;
  specs: string;
  brand: string;
  dimensions: string;
  material: string;
};
export default function KeyboardPage({ keyboard }: { keyboard: keyboardType }) {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const textElement = textRef.current;
    const imageElement = imageRef.current;
    if (textElement && imageElement) {
      gsap.to(imageElement, {
        scrollTrigger: {
          trigger: textElement,
          start: "top 15%", 
          end: "bottom 95%", 
          pin: imageElement,
          pinSpacing: false, 
          markers: true,
        },
      });
    }
  });
  return (
    <div className="p-8 ">
      <div className="object-cover h-full flex-1 flex justify-center  ">
        <div className="flex gap-12">
          <div ref={imageRef} className=" relative h-[800px] w-[800px]">
            {" "}
            <Image
              fill
              className="rounded-3xl "
              src={JSON.parse(keyboard.image)[0]}
              alt={keyboard.title}
            />
          </div>
          <div ref={textRef} className=" text-black  leading-loose		">
            <h1>{keyboard.brand}</h1>
            <h1 className="text-4xl font-bold">{keyboard.title}</h1>
            <h1 className="">{keyboard.summary}</h1>
            <h1 className="text-xl">€{keyboard.price}</h1>
            <div className="pt-4">
              {" "}
              <button className="p-2 bg-lime-600 hover:bg-lime-500 rounded-xl w-32">
                Buy now{" "}
              </button>
            </div>
            <div>
              {" "}
              <h1 className="font-bold text-xl pt-8">
                Technical Specifications
              </h1>
              <p
                className=""
                dangerouslySetInnerHTML={{ __html: keyboard.specs }}
              ></p>
            </div>
            <div id="kbText">
              {" "}
              <h1 className="font-bold text-xl pt-8">Dimensions</h1>
              <p
                className=""
                dangerouslySetInnerHTML={{ __html: keyboard.dimensions }}
              ></p>
            </div>
            <div>
              {" "}
              <h1 className="font-bold text-xl pt-8">Material</h1>
              <p
                className=""
                dangerouslySetInnerHTML={{ __html: keyboard.material }}
              ></p>
            </div>
          </div>
        </div>
      </div>
      {Array.from({ length: 50 }, (_, index) => (
        <div key={index}>Hello</div>
      ))}
    </div>
  );
}
