import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Box from "./Box";

const Card = () => {
  const cardData = [
    { id: 1, content: "First Card" },
    { id: 2, content: "Second Card" },
    { id: 3, content: "Third Card" },
    { id: 4, content: "Fourth Card" },
    { id: 5, content: "Fifth Card" },
    { id: 6, content: "Sixth Card" },
    { id: 7, content: "Seventh Card" },
    { id: 8, content: "Eighth Card" },
    { id: 9, content: "Ninth Card" },
    { id: 10, content: "Tenth Card" },
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    start: 0,
    end: "bottom top",
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `${-10 * (cardData.length - 2)}%`]
  );

  return (
    <div className="w-full flex bg-primary py-10 text-secondary justify-center">
      <div className="w-full overflow-hidden flex flex-col gap-20 ">
        {/* card slde animation  */}
        <div
          ref={ref}
          className="bg-secondary text-primary py-5 relative h-[400px]"
        >
          <motion.div className="flex absolute gap-10 px-10" style={{ x }}>
            {cardData.map((card) => (
              <div
                key={card.id}
                className="rounded h-[300px] w-[300px] bg-primary m-4"
              >
                {card.content}
              </div>
            ))}
          </motion.div>
        </div>
        <div className="flex h-[500px]">
          <div className="w-1/2 ">
            <p className="text-3xl text-white font-bold">
              <Box />
            </p>
          </div>
          <div className="w-1/2 bg-secondary text-primary h-full rounded-s flex flex-col p-5 justify-between items-center">
            <div>:D</div>
            <button className=" rounded-2xl border-2 border-dashed border-primary bg-white px-6 py-3 font-semibold uppercase text-primary transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_gray] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
              Check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
