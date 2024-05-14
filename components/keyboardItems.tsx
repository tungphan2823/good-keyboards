import { getKeyboards } from "@/lib/keyboards";
import Image from "next/image";
import Link from "next/link";
export async function KeyboardItems() {
  const keyboards = await getKeyboards();
  console.log(keyboards);

  return (
    <div className="grid grid-cols-4 gap-4">
      {keyboards.map((keyboard, index) => (
        <div className="p-8 w-96 object-cover " key={index}>
          <Link href={`/keyboards/${keyboard.slug}`}>
            <div className="">
              <div className=" relative h-80 ">
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
  );
}
