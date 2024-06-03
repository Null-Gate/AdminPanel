import { IoInformationCircleOutline, IoSettingsOutline } from "react-icons/io5";
import { IoIosChatbubbles } from "react-icons/io";
import { Avatar } from "@mantine/core";
import { SetStateAction, useState } from "react";
import { motion } from "framer-motion";

const icons = [
  { component: <IoInformationCircleOutline size={20} />, key: "info" },
  { component: <IoSettingsOutline size={20} />, key: "settings" },
  { component: <IoIosChatbubbles size={20} />, key: "chat" },
];

const Chat = () => {
  // Track which icon is active
  const [activeIndex, setActiveIndex] = useState(2);

  const handleIconClick = (index: SetStateAction<number>) => {
    setActiveIndex(index);
  };

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   // Creating a WebSocket connection
  //   const socket = new WebSocket("ws://localhost:9080/nf");

  //   socket.onopen = () => {
  //     socket.send("start");

  //     socket.onmessage = (event) => {
  //       const newData = JSON.parse(event.data);

  //       setData((prevData) => {
  //         const isDuplicate = prevData.some(
  //           (item) => item.event === newData.event
  //         );
  //         if (!isDuplicate) {
  //           return [...prevData, newData];
  //         }
  //         return prevData;
  //       });
  //     };

  //     socket.onerror = (error) => {
  //       console.error("WebSocket Error: ", error);
  //     };
  //   };

  //   return () => {
  //     socket.close();
  //   };
  // }, []);

  // console.log(data);

  return (
    <div className="w-full h-full bg-slate-200 p-5">
      <div className="flex flex-col rounded w-full h-[500px] pb-3">
        <div className="flex justify-between items-center bg-white/50 backdrop-blur-lg rounded-t-lg">
          <div className="flex gap-3 pl-5">
            {icons.map((icon, index) => (
              <div
                className="rounded-3xl relative w-12 h-12 cursor-pointer"
                key={icon.key}
                onClick={() => handleIconClick(index)}
              >
                <motion.div
                  initial={{ y: 0, backgroundColor: "#ffffff" }}
                  animate={{
                    y: activeIndex === index ? 15 : 0,
                    backgroundColor:
                      activeIndex === index ? "rgb(64,192,87)" : "#ffffff",
                    color: activeIndex === index ? "white" : "rgb(134,154,178)",
                  }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className={`w-full font-semibold h-full rounded-full flex items-center justify-center absolute ${
                    activeIndex === index ? "bg-[rgb(64,192,87)]" : "bg-white"
                  }`}
                >
                  {icon.component}
                </motion.div>
              </div>
            ))}
          </div>
          <div className="p-3 bg-slate-200 rounded-es-[50px] rounded-ss-[50px]">
            <Avatar
              size="lg"
              radius="100%"
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
            />
          </div>
        </div>
        <div className="w-full h-full rounded p-5 z-10 flex rounded-se-[40px] bg-white/50 backdrop-blur-lg rounded-b-lg">
          <div className="w-full h-full bg-white rounded p-5 z-10 flex"></div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
