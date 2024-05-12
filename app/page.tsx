import Image from "next/image";
import keyboard from "../public/keyboard/testkeyboard.jpg";
import CircleText from "@/components/circleText";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function Home() {
  return (
    <main>
      {" "}
      <div className="flex items-center  p-8  text-black  top-0  sticky font-Cairo border-b-2 border-slate-800 backdrop-blur-lg ">
        <div className="flex gap-8 text-xl cursor-pointer">
          <div>Home</div>
          <div>Keyboards</div>
          <div>Accessories</div>
          <div>About</div>
        </div>
        <div className="flex justify-end flex-1 text-3xl">GoodSwitch * </div>
      </div>
      <div
        className="flex flex-1  gap-4 border-b-2 border-black

"
      >
        {" "}
        <div className="border-r-2 border-black w-1/2 h-[90vh] text-4xl grid text-black p-8   content-center font-Freeman">
          <div>Good Switch * </div>

          <h1>— find your next </h1>
          <h1>favorite keyboard.</h1>
        </div>
        <div className="w-1/2">Come to find the best keyboard for you? </div>
      </div>
      <div>Hello</div>
    </main>
  );
}
