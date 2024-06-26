import CircleText from "./circleText";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="bg-neutral-700 bg-cover  font-Cairo">
      <div className="lg:flex ">
        <div>
          <div className=" text-5xl p-16">GoodSwitch* </div>
          <div className="p-12">
            <CircleText />
          </div>
        </div>

        <div className="flex flex-1 lg:justify-end w-20 lg:text-2xl text-lg gap-4 p-12">
          <div className="leading-loose	cursor-pointer">
            <h1>Contact Me</h1>
            <h2>tungphann.work@gmail.com</h2>
          </div>
          <div className="leading-loose	cursor-pointer">
            <h1>Menu</h1>
            <h2><Link href="/">Home</Link></h2>
            <h2><Link href="/keyboards">Keyboards</Link></h2>
            
            <h2><Link href="/about">About</Link></h2>
          </div>
        </div>
      </div>
    </div>
  );
}
