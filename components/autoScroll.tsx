import Marquee from "react-fast-marquee";
import AcUnitIcon from "@mui/icons-material/AcUnit";
type ScrollingProps = {
  scrollType: string;
};
import Image from "next/image";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import akko from "../public/company/akko.png";
import divini from "../public/company/divini.png";
import logitech from "../public/company/logitech.png";
import RK from "../public/company/RK.png";
import nuphy from "../public/company/nuphy.png";
import keychron from "../public/company/keychron.png"
export default function AutoScrolling({ scrollType }: ScrollingProps) {
  return (
    <div className="">
      <div className="w-[50%] flex flex-col pt-14 "></div>

      {scrollType === "landing" && (
        <>
          <Marquee autoFill pauseOnClick>
            <div className=" m-1 rounded-xl flex space-x-5 p-16  font-bold text-xs cursor-pointer items-center gap-1">
              <div className=" animate-spin-slow	">
                <AcUnitIcon />
              </div>
              /SOFTWARE DEVELOPER /WEB DEVELOPER /STUDENT
            </div>
          </Marquee>
        </>
      )}
      {scrollType === "tool" && (
        <>
          <Marquee autoFill pauseOnClick>
            <div className=" m-1 rounded-xl flex space-x-5 p-16  font-bold text-xs cursor-pointer items-center gap-1 max-w-48">
              <Image src={akko} alt="js"></Image>
            </div>
            <div className=" m-1 rounded-xl flex space-x-5 p-16  font-bold text-xs cursor-pointer items-center gap-1 max-w-48">
              <Image src={divini} alt="ts"></Image>
            </div>
            <div className=" m-1 rounded-xl flex space-x-5 p-16  font-bold text-xs cursor-pointer items-center gap-1 max-w-48">
              <Image src={logitech} alt="rs"></Image>
            </div>
            <div className=" m-1 rounded-xl flex space-x-5 p-16  font-bold text-xs cursor-pointer items-center gap-1 max-w-48">
              <Image src={RK} alt="css"></Image>
            </div>
            <div className=" m-1 rounded-xl flex space-x-5 p-16  font-bold text-xs cursor-pointer items-center gap-1 max-w-48">
              <Image src={nuphy} alt="css"></Image>
            </div>
            <div className=" m-1 rounded-xl flex space-x-5 p-16  font-bold text-xs cursor-pointer items-center gap-1 max-w-48">
              <Image src={keychron} alt="css"></Image>
            </div>
          </Marquee>
        </>
      )}
    </div>
  );
}
