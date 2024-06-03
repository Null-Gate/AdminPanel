/* eslint-disable @typescript-eslint/no-explicit-any */
import { Drawer } from "@mantine/core";
import { useEffect, useState } from "react";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { twMerge } from "tailwind-merge";
import SideBar from "./SideBar";
import NavBar from "./NavBar";

interface ChildProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: ChildProps) => {
  const matches = useMediaQuery("(max-width: 796px)");
  const [opened, { toggle, close, open }] = useDisclosure(true);

  // Automatically close or open the sidebar based on the viewport width
  useEffect(() => {
    if (matches) close();
    else open();
  }, [close, matches, open]);

  const [data, setData] = useState<any>([]);

  useEffect(() => {
    // Creating a WebSocket connection
    const socket = new WebSocket("ws://54.169.162.141:443/nf");

    socket.onopen = () => {
      socket.onmessage = (event) => {
        const newData = JSON.parse(event.data);
        socket.send("start");

        setData((prevData) => {
          return [...prevData, newData];
        });
      };

      socket.onerror = (error) => {
        console.error("WebSocket Error: ", error);
      };
    };

    return () => {
      socket.close();
    };
  }, []);

  console.log(data);

  return (
    <div className="flex items-start h-screen overflow-hidden">
      {/* Drawer for mobile screens */}
      {matches && (
        <Drawer
          opened={opened}
          onClose={close}
          withCloseButton={false}
          classNames={{
            // content: "w-3/12",
            body: "p-0",
          }}
        >
          <SideBar opened={opened} />
        </Drawer>
      )}

      {/* Sidebar for larger screens */}
      {!matches && <SideBar opened={opened} />}

      <div
        className={twMerge(
          "h-full transition-all duration-300 ease-in-out w-full"
          // opened && !matches ? "w-[calc(100%-260px)]" : "w-full"
        )}
      >
        <NavBar data={data} toggle={toggle} />
        <div className="w-full h-[90vh] overflow-y-scroll scrollbar-thin bg-gray-50/80 flex justify-between flex-col">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
