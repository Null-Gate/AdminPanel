// Import necessary dependencies
import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxDash } from "react-icons/rx";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import { mainMenu } from "./Path";
import { BiMessageDots } from "react-icons/bi";

interface PropsType {
  opened: boolean;
}

const Sidebar = ({ opened }: PropsType) => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const nav = useNavigate();

  // Update the active item based on the current path
  useEffect(() => {
    const matchingItem = mainMenu.find((item) =>
      location.pathname.startsWith(item.path)
    );
    if (matchingItem) {
      setActiveItem(matchingItem.id);
    } else {
      setActiveItem(null);
    }
  }, [location.pathname]);

  // Logout handler
  const logoutHandler = () => {
    Cookies.remove("token");
    Cookies.remove("refreshToken");
    nav("/login");
  };

  return (
    <div
      className={`pb-10 ${
        opened ? "md:w-3/12 w-full" : "hidden"
      } h-[100vh] flex flex-col justify-between items-center gap-10`}
    >
      <div className="flex flex-col gap-5 w-full">
        <h1 className="font-bold text-3xl w-full h-[10vh] flex items-center justify-center border rounded">
          Welcome Mate!
        </h1>
        <div className="w-[90%] flex flex-col gap-8">
          {mainMenu.map((el) => (
            <div key={el.id}>
              <NavLink
                to={el.path}
                className={`${
                  activeItem === el.id ? "bg-white shadow-lg" : ""
                } py-3 rounded-lg hover:shadow cursor-pointer text-gray-500 flex justify-between px-10 items-center`}
              >
                <div className="flex gap-5 items-center">
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{
                      scale: activeItem === el.id ? 1.1 : 1,
                      backgroundColor: activeItem === el.id ? "cyan" : "white",
                    }}
                    className={`${
                      activeItem === el.id
                        ? "bg-gradient-to-r from-green-400 to-green-500 text-white shadow-lg"
                        : "bg-white"
                    } text-md p-3 rounded-lg shadow-lg`}
                  >
                    {el.icon}
                  </motion.div>
                  <p>{el.name}</p>
                </div>
                <div>
                  {el.child ? (
                    <motion.div
                      initial={false}
                      animate={{ rotate: activeItem === el.id ? 180 : 0 }}
                    >
                      <MdOutlineKeyboardArrowDown />
                    </motion.div>
                  ) : (
                    <RxDash />
                  )}
                </div>
              </NavLink>
              {el.child && activeItem === el.id && (
                <motion.div
                  className="text-gray-600 flex flex-col mt-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {el.child.map((ch) => (
                    <NavLink
                      key={ch.id}
                      to={ch.path}
                      className={`${
                        location.pathname.includes(ch.path)
                          ? "text-gray-800 font-bold"
                          : ""
                      } py-3 rounded-lg cursor-pointer text-gray-500 flex justify-between px-10 items-center`}
                    >
                      <div className="flex gap-5 items-center">
                        <motion.div
                          initial={{ scale: 1 }}
                          animate={{
                            scale: location.pathname.includes(ch.path)
                              ? 1.1
                              : 1,
                          }}
                          className="text-md p-3 rounded-lg"
                        >
                          <BiMessageDots />
                        </motion.div>
                        <p>{ch.name}</p>
                      </div>
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
      <button
        className="w-[70%] py-2 rounded-3xl hover:bg-red-500 hover:text-white text-red-500 border border-red-500 transition duration-300"
        onClick={logoutHandler}
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
