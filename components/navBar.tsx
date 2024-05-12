export default function NavBar() {
  return (
    <div className="flex items-center  p-8  text-black  top-0  sticky font-Cairo border-b-2 border-slate-800 backdrop-blur-lg z-10">
      <div className="flex gap-8 text-xl cursor-pointer">
        <div>Home</div>
        <div>Keyboards</div>
        <div>Accessories</div>
        <div>About</div>
      </div>
      <div className="flex justify-end flex-1 text-3xl">GoodSwitch * </div>
    </div>
  );
}
