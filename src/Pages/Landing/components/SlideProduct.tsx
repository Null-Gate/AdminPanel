/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const SlideProduct = () => {
  // ajust with the WIDTH OF top bar animation AND DECORATION WIDTH
  const [data, setData] = useState([
    {
      id: 1,
      header: "CRASHING HARD",
      title: "BLANKE & CASEY COOK",
      image:
        "https://cdx.monstercat.com/?encoding=webp&url=https%3A%2F%2Fwww.monstercat.com%2Frelease%2F742779550354%2Fcover&width=1920",
      active: true,
    },
    {
      id: 2,
      header: "BLACK FRIDAY",
      title: "GET EARLY ACCESS",
      image:
        "https://i.pinimg.com/564x/41/5d/9c/415d9cca091edb7d2e8509c9710965c3.jpg",
      active: false,
    },
    {
      id: 3,
      header: "FALL APART",
      title: "HARD & CRASH",
      image:
        "https://i.pinimg.com/564x/33/92/1f/33921fcef270a84ff1d2bd7236cd877c.jpg",
      active: false,
    },
    {
      id: 4,
      header: "BRICK VEX DUCK",
      title: "BURN IN HELL",
      image:
        "https://i.pinimg.com/736x/38/00/99/380099a3045934f870924f5802fe0f8a.jpg",
      active: false,
    },
  ]);

  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    //ajust for the showing seecond
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 4000);

    // Set the active property based on activeIndex
    const updatedData = data.map((el, index) => ({
      ...el,
      active: index === activeIndex,
    }));

    // Update the state with the modified data
    setData(updatedData);

    return () => clearInterval(interval);
  }, [activeIndex]);

  // console.log(activeIndex);

  return (
    <div className=" overflow-hidden relative ">
      {/* top bar active animation */}
      <div className="lg:flex lg:absolute lg:flex-row hidden z-30 w-full justify-center mt-20">
        <div className="flex gap-16 w-[80%]">
          {data.map((el) => (
            <div key={el.id} className="flex flex-col gap-5 w-3/12">
              <div className="w-full h-3 border relative overflow-hidden">
                {/* animation div */}
                <motion.div
                  className={`w-full h-full bg-white absolute `}
                  initial={{ translateX: el.active ? 0 : -350 }}
                  animate={{ translateX: el.active ? 0 : -350 }}
                  whileHover={{ translateX: 0 }}
                  transition={{ duration: 1.5 }}
                ></motion.div>
              </div>
              <div className="text-white text-sm">
                <p>{el.title}</p>
                <p>{el.header}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* background decoration and inner data  */}
      <motion.div
        className="w-[400vw] h-[100vh] flex relative"
        animate={{ right: `${activeIndex * 100}vw` }}
        transition={{ duration: 0.5 }}
      >
        {data.map((el) => (
          <motion.div
            key={el.id}
            className="w-[100vw] h-full relative"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* background decoration  */}
            <div className="">
              <img
                className="w-full h-full object-cover z-0 absolute"
                src={el.image}
                alt=""
              />
              <div className="w-full h-full img-decoration z-10 absolute"></div>
              <div className="w-full h-full z-20 absolute bg-black/10 backdrop-blur-sm"></div>
            </div>
            {/* inner data  */}
            <motion.div
              initial={{ opacity: 0, justifyContent: "flex-end" }}
              animate={{
                opacity: el.active ? 1 : 0,
                justifyContent: el.active ? "center" : "flex-end",
              }}
              transition={{ duration: 1.5 }}
              className="w-full h-full relative flex items-center  z-50"
            >
              <div className=" lg:w-[60%] lg:h-[50%] w-[80%] h-[60%]  flex lg:flex-row flex-col ">
                {/* left image  */}
                <div className="lg:w-2/4 w-full h-full relative">
                  <img
                    className=" h-full w-full object-cover absolute z-10"
                    src={el.image}
                    alt=""
                  />
                  <div className="h-full w-full inner-img-deco absolute z-20"></div>
                </div>

                {/* right data and button */}
                <div className="lg:w-2/4 h-full  flex items-center text-white relative z-50">
                  <div className=" lg:absolute lg:-left-28 flex flex-col gap-5">
                    <div className="flex flex-col lg:text-5xl gap-5">
                      <p>{el.header}</p>
                      <p>{el.title}</p>
                    </div>
                    <div className="flex lg:justify-between relative gap-10">
                      <button className="btn ">View Release</button>
                      <button className="btn-outline ">
                        Listen On Playlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SlideProduct;
