import logo from "../../../../public/Logo.jpg";
import Intro from "./Intro";
const Hero = () => {
  return (
    <div className="flex lg:flex-row flex-col-reverse bg-[rgb(255,251,232)] justify-around h-[100vh] overflow-hidden">
      {/* left information  */}
      <div className="lg:w-3/6 text-primary flex flex-col justify-center items-center ">
        <Intro />
        <div className="flex flex-col gap-5 text-center lg:text-start">
          <p className="text-lg lg:text-3xl">
            to
            <span className="text-xl lg:text-6xl text-primary">
              KAR GATE ECOSYSTEM
            </span>
            is
          </p>
          <p className="text-lg lg:text-3xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="text-sm lg:text-lg">
            Join us on this journey as we revolutionize the creators' economy
            and
          </p>
          <p className="text-sm lg:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
            facere nesciunt incidunt.
          </p>
        </div>
      </div>
      {/* right logo  */}
      <div className="lg:w-3/6 lg:h-full flex items-center self-center">
        <img
          className=" rounded-es-[100px] w-full h-full object-cover"
          src={logo}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
