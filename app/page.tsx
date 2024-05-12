import Image from "next/image";
import keyboard from "../public/keyboard/testkeyboard.jpg";
import keyboard1 from "../public/keyboard/switch.gif";
import SouthIcon from "@mui/icons-material/South";
import NavBar from "@/components/navBar";
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
          <div className="p-8">
            — Keyboard recommendations from the most <br></br> successful and interesting
            company in the world.
          </div>
        </div>
        <div className="w-1/2 text-black flex justify-center  items-end  font-Freeman p-8 text-2xl">
          <Image src={keyboard1} alt="" />
          <div>
            Most recommended keyboards <SouthIcon className="animate-bounce" />
          </div>
        </div>
      </div>
      <div>Hellodwdwdd</div>
      <div>Hellodwdwdd</div>
      <div>Hellodwdwdd</div>
     
    </main>
  );
}
