import CircleText from "./circleText";
export default function Footer() {
  return (
    <div className="bg-neutral-700 bg-cover  font-Cairo">
      <div className="md:flex ">
        <div>
          <div className=" text-5xl p-16">GoodSwitch* </div>
          <div className="p-12">
            <CircleText />
          </div>
        </div>

        <div className="flex flex-1 md:justify-end w-20 md:text-2xl text-lg gap-4 p-16">
          <div className="leading-loose	cursor-pointer">
            <h1>Contact Me</h1>
            <h2>tungphann.work@gmail.com</h2>
          </div>
          <div className="leading-loose	cursor-pointer">
            <h1>Menu</h1>
            <h2>Home</h2>
            <h2>Keyboards</h2>
            <h2>Accessories</h2>
            <h2>About</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
