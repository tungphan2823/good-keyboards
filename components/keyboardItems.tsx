import { getKeyboards } from "@/lib/keyboards";
import Image from "next/image";
import Link from "next/link";
import Warpper from "./warpper";
import KeyboardFullItems from "./keyboardFullItems";
type keyboardType = {
  fetchType: string;
};
export async function KeyboardItems({ fetchType }: keyboardType) {
  const keyboards = await getKeyboards();

  return (
    <>
      {" "}
      {fetchType === "full" && (
        <div className="">
          <Warpper keyboard={keyboards} />
        </div>
      )}
      {fetchType === "limit" && (
        <div className="lg:grid lg:grid-cols-4 lg:gap-4 overflow-x-scroll  lg:overflow-x-hidden flex border-b-2 border-gray-50">
          {keyboards.slice(0, 8).map((keyboard, index) => (
            <div className="p-8   object-cover flex-initial " key={index}>
              <Link href={`/keyboards/${keyboard.slug}`}>
                <div className="">
                  <div className=" relative h-40 w-40 lg:w-96 lg:h-96">
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
        </div>
      )}
    </>
  );
}
