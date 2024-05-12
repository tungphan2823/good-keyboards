export default function CircleText() {
    return (
      <div className="animate-spin-slow max-w-64 p-4 relative ">
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className=" fill-lightOrange bg-blueLight rounded-full"
  
        >
          <path id="MyPath" fill="none" d="M50 10 a 40 40 0 1 0 0.00001 0" />
          <text>
            <textPath href="#MyPath">
             Best keyboard in town.
            </textPath>
          </text>
        </svg>
      </div>
    );
  }
  