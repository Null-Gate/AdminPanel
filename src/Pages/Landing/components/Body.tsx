import { BsArrowRightShort } from "react-icons/bs";
// import Brand from "../Body/Brand";

const Body = () => {
  return (
    <div className="w-full flex bg-primary justify-center">
      <div className="w-[80%] text-white">
        {/* title header and button  */}
        <div className="flex flex-col gap-10 justify-center items-center">
          <h1 className="text-lg">
            LEADING THE MOVEMENT TOWARDS ARTIST SUSTAINABILITY
          </h1>

          <button className="btn-outline w-[300px] flex items-center justify-between text-sm">
            Learn More
            <BsArrowRightShort className="text-lg" />
          </button>
        </div>
        {/* Brands  */}
        {/* <Brand /> */}
      </div>
    </div>
  );
};

export default Body;
