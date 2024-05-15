"use client";
import Image from "next/image";
import { gsap } from "gsap";
import Link from "next/link";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import React, { useRef, useState } from "react";
gsap.registerPlugin(ScrollTrigger);
type keyboardType = {
  id: number;
  title: string;
  slug: string;
  price: number;
  link: string;
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
          //   markers: true,
        },
      });
    }
  });
  return (
    <div className="p-8 ">
      <div className="object-cover h-full flex-1 flex justify-center pb-20 border-b-2 border-gray">
        <div className="md:flex md:gap-12">
          <div
            ref={imageRef}
            className=" relative md:h-[800px] md:w-[800px] h-96 w-96"
          >
            {" "}
            <Image
              fill
              className="rounded-3xl "
              src={JSON.parse(keyboard.image)[0]}
              alt={keyboard.title}
            />
          </div>
          <div ref={textRef} className=" text-black  leading-loose	w-96	">
            <h1>{keyboard.brand}</h1>
            <h1 className="text-4xl font-bold">{keyboard.title}</h1>
            <h1 className="">{keyboard.summary}</h1>
            <h1 className="text-xl">€{keyboard.price}</h1>
            <div className="pt-4">
              {" "}
              <button className="p-2 bg-lime-600 hover:bg-lime-500 rounded-xl w-32">
                <Link href={keyboard.link}>Buy now </Link>
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
      <div>
        <div className="md:p-8 ">
          <div className="md:flex justify-center">
            <div className=" relative md:h-[800px] md:w-[800px] h-96 w-96">
              {" "}
              <Image
                fill
                className=" "
                src={JSON.parse(keyboard.image)[1]}
                alt={keyboard.title}
              />
            </div>
            <div className=" relative md:h-[800px] md:w-[800px] h-96 w-96 ">
              {" "}
              {JSON.parse(keyboard.image)[2] && (
                <Image
                  fill
                  className=" "
                  src={JSON.parse(keyboard.image)[2]}
                  alt={keyboard.title}
                />
              )}
            </div>
          </div>
          <div className="md:flex justify-center">
            {" "}
            <div className=" relative md:h-[800px] md:w-[800px] h-96 w-96 ">
              {" "}
              {JSON.parse(keyboard.image)[3] && (
                <Image
                  fill
                  className=" "
                  src={JSON.parse(keyboard.image)[3]}
                  alt={keyboard.title}
                />
              )}
            </div>
            <div className=" relative md:h-[800px] md:w-[800px] h-96 w-96 ">
              {" "}
              {JSON.parse(keyboard.image)[4] && (
                <Image
                  fill
                  className=""
                  src={JSON.parse(keyboard.image)[4]}
                  alt={keyboard.title}
                />
              )}
            </div>
          </div>

          <div className="md:flex justify-center">
            {" "}
            <div className=" relative md:h-[800px] md:w-[800px] h-96 w-96 ">
              {" "}
              {JSON.parse(keyboard.image)[5] && (
                <Image
                  fill
                  className=" "
                  src={JSON.parse(keyboard.image)[5]}
                  alt={keyboard.title}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
