import { Avatar, Button, Indicator } from "@mantine/core";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { IconType } from "react-icons/lib";
import { MdNotifications } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface PropsType {
  toggle: () => void;
  Icon?: IconType;
  withShadow?: boolean;
  wrapperClassName?: string;
  data: [];
}

const NavBar = ({
  toggle,
  Icon = FaBarsStaggered,
  withShadow,
  wrapperClassName,
  data,
}: PropsType) => {
  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    toggle();
  };

  const nav = useNavigate();
  const { pathname } = useLocation();

  // console.log(location.pathname)
  return (
    <div
      className={twMerge(
        "w-full sm:h-[10vh] h-[50px] bg-white flex items-center justify-between lg:px-4 px-1 border-b",
        withShadow && "shadow-md",
        wrapperClassName
      )}
    >
      <Button color="green" onClick={onClickHandler}>
        <Icon color="white" className="lg:text-lg text-base" />
      </Button>

      <div className="flex items-center gap-5">
        <button className="flex items-center gap-1">
          <p className="lg:text-base text-sm ">Vixx Grego</p>
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ6O8ojjcSZRioKmwtpHKVkfvOD-XXSlsdTg&usqp=CAU"
            alt="Denny Kate"
            size="md"
            className="rounded-full"
          />
        </button>

        <Indicator
          inline
          size={15}
          onClick={() => nav("/notification")}
          color="red"
          label={pathname === "/notification" ? 0 : data?.length}
        >
          <MdNotifications size={25} color="hsl(130.78,50.39%,50.2%)" />
        </Indicator>

        <Button color="green">
          <IoSettings color="white" className="lg:text-xl text-lg" />
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
