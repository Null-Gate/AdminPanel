import Hero from "./components/Hero";
import ChangeBody from "./components/ChangeBody";
import SlideProduct from "./components/SlideProduct";
import BlackOut from "./components/BlackOut";
import Card from "./components/Card";

const LandingPage = () => {
  return (
    <div className="  ">
      <div className=" relative z-0 scrollbar-thin scroll-smooth">
        <Hero />
        {/* <Body /> */}
        <ChangeBody />
        <Card />
      </div>
      <BlackOut />
      <SlideProduct />
      {/* <ContactUs/> */}
    </div>
  );
};

export default LandingPage;
