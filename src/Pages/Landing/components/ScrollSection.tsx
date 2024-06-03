import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";

const ScrollSection = () => {
  const lenis = new Lenis();

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  const overScroll = useRef();
  const { scrollYProgress } = useScroll({
    target: overScroll,
    offset: ["start center", "1 1"],
  });

  const opacityProgess = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.5, 0.6, 0.9, 1],
    [0, 0.9, 1, 1, 0.8, 0.6, 0.3, 0]
  );

  // console.log(scrollYProgress);
  return (
    <div className="flex bg-white flex-col justify-center items-center ">
      <div
        ref={overScroll}
        className="h-[250vh] relative overflow-hidden justify-center lg:w-[40%]  "
      >
        <motion.img
          className=" lg:w-[40vw] w-full fixed z-0 bottom-0 lg:right-[30vw] lg:left-[30vw] object-cover"
          style={{ opacity: opacityProgess }}
          src="https://i.pinimg.com/564x/06/ad/39/06ad39c14f5c2c86f9330d7590719693.jpg"
          alt=""
        />
        <p className="mt-[150vh] px-5 lg:px-0 relative z-50 select-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nemo
          dignissimos est, enim laboriosam perferendis veritatis sint laborum,
          atque magnam officia. Labore id deleniti quae, ullam odit
          reprehenderit debitis accusantium!Lorem Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Expedita a mollitia aliquid reiciendis
          architecto debitis atque enim, laborum illo incidunt assumenda hic
          eligendi consequatur exercitationem quas eum et rerum omnis.lor Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Eius quia rerum
          architecto expedita voluptate quasi? Repellendus vel beatae blanditiis
          temporibus nobis. Atque fugit dolor animi aperiam molestias
          praesentium voluptas reiciendis!
        </p>
      </div>
    </div>
  );
};

export default ScrollSection;
