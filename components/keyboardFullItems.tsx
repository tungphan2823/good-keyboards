"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
export default function KeyboardFullItems({
  keyboard,
}: {
  keyboard: keyboardType[];
}) {
  const searchParams = useSearchParams();
  const [filter, setFilter] = useState("");
  const isFilter = searchParams.get("filter") === filter;
  const filteredKeyboards = keyboard.filter(
    (keyboard) => keyboard.brand === filter
  );

  return (
    <>
      <div>
        <h1 className="font-Freeman text-2xl text-black p-10">
          All recommended keyboards
        </h1>
        <label className="p-10 text-black font-Freeman">Brand</label>
        <div className="flex text-black gap-4 p-10 overflow-x-scroll md:overflow-x-hidden">
          <div
            className="p-4 bg-slate-50 rounded-full cursor-pointer "
            onClick={() => setFilter("NuPhy")}
          >
            <Link href={`?filter=${isFilter ? "normal " : "NuPhy"}`}>
              {" "}
              NuPhy
            </Link>
          </div>
          <div
            className="p-4 bg-slate-50 rounded-full cursor-pointer "
            onClick={() => setFilter("akko")}
          >
            <Link href={`?filter=${isFilter ? "normal " : "akko"}`}> Akko</Link>
          </div>
          <div
            className="p-4 bg-slate-50 rounded-full cursor-pointer "
            onClick={() => setFilter("keychron")}
          >
            <Link href={`?filter=${isFilter ? "normal " : "keychron"}`}>
              {" "}
              Keychron
            </Link>
          </div>
          <div className="p-4 bg-slate-50 rounded-full cursor-pointer "onClick={() => setFilter("Epomaker")}>
            <Link href={`?filter=${isFilter ? "normal " : "Epomaker"}`}>
              {" "}
              Epomaker
            </Link>
          </div>
        </div>
      </div>
      {!isFilter &&
        keyboard.map((keyboard, index) => (
          <div className="p-8   object-cover flex-initial " key={index}>
            <Link href={`/keyboards/${keyboard.slug}`}>
              <div className="">
                <div className=" relative h-40 w-40 md:w-96 md:h-96">
                  {" "}
                  <Image
                    fill
                    className="rounded-3xl "
                    src={JSON.parse(keyboard.image)[0]}
                    alt={keyboard.title}
                  />
                </div>
                <div className="text-black p-4">
                  {" "}
                  <h1 className="font-bold">{keyboard.title}</h1>
                  <p className="text-sm text-gray-600">{keyboard.summary}</p>
                  <p className=" "> €{keyboard.price}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      {isFilter &&
        filteredKeyboards.map((keyboard, index) => (
          <div className="p-8   object-cover flex-initial " key={index}>
            <Link href={`/keyboards/${keyboard.slug}`}>
              <div className="">
                <div className=" relative h-40 w-40 md:w-96 md:h-96">
                  {" "}
                  <Image
                    fill
                    className="rounded-3xl "
                    src={JSON.parse(keyboard.image)[0]}
                    alt={keyboard.title}
                  />
                </div>
                <div className="text-black p-4">
                  {" "}
                  <h1 className="font-bold">{keyboard.title}</h1>
                  <p className="text-sm text-gray-600">{keyboard.summary}</p>
                  <p className=" "> €{keyboard.price}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
    </>
  );
}
