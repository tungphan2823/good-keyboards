import Image from "next/image";
import keyboard from "../public/keyboard/testkeyboard.jpg";
import keyboard1 from "../public/keyboard/switch.gif";
import SouthIcon from "@mui/icons-material/South";
import NavBar from "@/components/navBar";
import AutoScrolling from "@/components/autoScroll";
import kb81 from "../public/keyboard/kb81.jpg";
import { KeyboardItems } from "@/components/keyboardItems";
import nuphy from "../public/company/nuphy.png";
import epo from "../public/company/epo.png";
import akko from "../public/company/akko.png";
import keychron from "../public/company//keychron.png";
export default function Home() {
  return (
    <main>
      {" "}
      {/* <NavBar /> */}
      <div className="flex flex-1  gap-4 border-b-2 border-black">
        {" "}
        <div className="md:border-r-2 border-black w-1/2 h-[90vh] content-end grid font-Freeman text-black">
          <div className="  p-8  text-4xl">
            <div>Good Switch * </div>
            <h1>— find your next </h1>
            <h1>favorite keyboard.</h1>
          </div>
          <div className="p-6">
            — Keyboard recommendations from the most <br></br> successful and
            interesting company in the world.
          </div>
        </div>
        <div className=" hidden w-1/2 text-black md:flex justify-center  items-end  font-Freeman p-8 text-2xl">
          <Image src={keyboard1} alt="" />
          <div>
            Most recommended keyboards <SouthIcon className="animate-bounce" />
          </div>
        </div>
      </div>
      <div className="border-b-2 border-black p-8 text-black ">
        <div className="text-2xl font-Freeman">Famous Brand</div>
        <AutoScrolling scrollType="tool" />
      </div>
      <div className="p-8">
        <h1 className="font-Freeman text-2xl text-black">
          Top recommended keyboards
        </h1>
        <KeyboardItems fetchType="limit" />
      </div>
      <div className="p-8">
        <h1 className="font-Freeman text-2xl text-black">
          Explore their brand
        </h1>
        <div className="flex justify-center">
          <div className="text-black font-Freeman md:grid md:grid-cols-4 ">
            <div className="p-4">
              <div className="flex md:w-96 md:h-64 w-64 h-32 justify-center items-center p-8 gap-4 cursor-pointer bg-imageWhite rounded-2xl hover:border-2 hover:border-black transition-all">
                <Image src={nuphy} alt="nuphy" />
              </div>
            </div>
            <div className="p-4">
              {" "}
              <div className="flex md:w-96 md:h-64 w-64 h-32 justify-center items-center p-8 gap-4 cursor-pointer bg-imageWhite rounded-2xl hover:border-2 hover:border-black transition-all">
                <Image src={epo} alt="epo" />
              </div>
            </div>
            <div className="p-4">
              {" "}
              <div className="flex md:w-96 md:h-64 w-64 h-32 justify-center items-center p-8 gap-4 cursor-pointer bg-imageWhite rounded-2xl hover:border-2 hover:border-black transition-all">
                <Image src={akko} alt="akko" />
              </div>
            </div>
            <div className="p-4">
              {" "}
              <div className="flex md:w-96 md:h-64 w-64 h-32 justify-center items-center p-8 gap-4 cursor-pointer bg-imageWhite rounded-2xl hover:border-2 hover:border-black transition-all">
                <Image src={keychron} alt="keychron" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
