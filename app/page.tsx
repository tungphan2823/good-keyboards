import Image from "next/image";
import keyboard from "../public/keyboard/testkeyboard.jpg";
import keyboard1 from "../public/keyboard/switch.gif";
import SouthIcon from "@mui/icons-material/South";
import NavBar from "@/components/navBar";
import AutoScrolling from "@/components/autoScroll";
import kb81 from "../public/keyboard/kb81.jpg";
export default function Home() {
  return (
    <main>
      {" "}
      <NavBar />
      <div
        className="flex flex-1  gap-4 border-b-2 border-black

"
      >
        {" "}
        <div className="border-r-2 border-black w-1/2 h-[90vh] content-end grid font-Freeman text-black">
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
        <div className="w-1/2 text-black flex justify-center  items-end  font-Freeman p-8 text-2xl">
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
        <div className="grid grid-cols-4 gap-4">
          <div className="p-8 w-96 ">
            <div>
              <Image className="rounded-3xl  " src={kb81} alt=""></Image>
              <h1 className="text-black p-4 ">
                Keyboard 81 Pro QMK/VIA Wireless Custom Mechanical Keyboard
              </h1>
            </div>
          </div>
          <div className="p-8 w-96 ">
            <div>
              <Image className="rounded-3xl  " src={kb81} alt=""></Image>
              <h1 className="text-black p-4 ">
                Keyboard 81 Pro QMK/VIA Wireless Custom Mechanical Keyboard
              </h1>
            </div>
          </div>
          <div className="p-8 w-96 ">
            <div>
              <Image className="rounded-3xl  " src={kb81} alt=""></Image>
              <h1 className="text-black p-4 ">
                Keyboard 81 Pro QMK/VIA Wireless Custom Mechanical Keyboard
              </h1>
            </div>
          </div>
          <div className="p-8 w-96 ">
            <div>
              <Image className="rounded-3xl  " src={kb81} alt=""></Image>
              <h1 className="text-black p-4 ">
                Keyboard 81 Pro QMK/VIA Wireless Custom Mechanical Keyboard
              </h1>
            </div>
          </div>
          <div className="p-8 w-96 ">
            <div>
              <Image className="rounded-3xl  " src={kb81} alt=""></Image>
              <h1 className="text-black p-4 ">
                Keyboard 81 Pro QMK/VIA Wireless Custom Mechanical Keyboard
              </h1>
            </div>
          </div>
          <div className="p-8 w-96 ">
            <div>
              <Image className="rounded-3xl  " src={kb81} alt=""></Image>
              <h1 className="text-black p-4 ">
                Keyboard 81 Pro QMK/VIA Wireless Custom Mechanical Keyboard
              </h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
