import {
  Button,
  CloseButton,
  Menu,
  MultiSelect,
  TextInput,
  rem,
} from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import {
  IconMessageCircle,
  IconPhoto,
  IconSettings,
  IconStack,
  IconTrash,
} from "@tabler/icons-react";
import { useState } from "react";
import { BiMenu, BiSolidChevronsDown } from "react-icons/bi";

export const CarFiltering = () => {
  const [value, setValue] = useState<string>();

  return (
    <>
      <DateTimePicker
        label="Start Date"
        placeholder="Pick a Date"
        defaultValue={new Date("2000-10-03 02:10:00Z")}
      />
      <DateTimePicker
        label="End Date"
        placeholder="Pick a Date"
        defaultValue={new Date("2000-10-03 02:10:00Z")}
      />
      <MultiSelect
        label="Choose Type"
        placeholder="Pick value"
        data={["All", "Pending", "Confirm", "Reject"]}
        clearable
        variant="filled"
      />
      <MultiSelect
        label="Your favorite libraries"
        placeholder="Pick value"
        data={["All", "Pending", "Confirm", "Reject"]}
        clearable
        variant="filled"
      />
      <TextInput
        label="License"
        placeholder="Enter License Number"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        leftSection={<BiSolidChevronsDown />}
        rightSectionPointerEvents="all"
        rightSection={
          <CloseButton
            aria-label="Clear input"
            onClick={() => setValue("")}
            style={{ display: value ? undefined : "none" }}
          />
        }
      />
      <TextInput
        label="Enter Text"
        placeholder="Enter Driver Name"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        leftSection={<BiSolidChevronsDown />}
        rightSectionPointerEvents="all"
        rightSection={
          <CloseButton
            aria-label="Clear input"
            onClick={() => setValue("")}
            style={{ display: value ? undefined : "none" }}
          />
        }
      />
    </>
  );
};

export const CarResult = () => {
  return (
    <div className="flex flex-col gap-2 bg-gray-100 rounded p-5">
      {/* title  */}
      <div className="grid grid-cols-4 text-gray-500 text-center text-md font-semibold">
        <h1>User</h1>
        <h1>Post Date</h1>
        <h1>Report</h1>
        <h1>Action</h1>
      </div>
      {/* table  */}
      <div className="grid grid-cols-4 gap-5 text-sm bg-white rounded p-2">
        <div className=" bg-gray-200 rounded flex justify-center items-center text-gray-700">
          Vixx
        </div>
        <div className=" bg-gray-200 rounded flex justify-center items-center text-gray-700">
          idontknow
        </div>
        <div className=" bg-gray-200 rounded flex justify-center items-center text-gray-700">
          HateSpeech
        </div>

        <Menu
          trigger="hover"
          openDelay={100}
          closeDelay={400}
          shadow="md"
          width={200}
        >
          <Menu.Target>
            <Button color="green">
              <BiMenu size={30} />
            </Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label>Application</Menu.Label>
            <Menu.Item
              leftSection={
                <IconSettings style={{ width: rem(14), height: rem(14) }} />
              }
            >
              Settings
            </Menu.Item>
            <Menu.Item
              leftSection={
                <IconMessageCircle
                  style={{ width: rem(14), height: rem(14) }}
                />
              }
            >
              Messages
            </Menu.Item>
            <Menu.Item
              leftSection={
                <IconPhoto style={{ width: rem(14), height: rem(14) }} />
              }
            >
              View
            </Menu.Item>
            <Menu.Divider />

            <Menu.Label>Sensitive Zone</Menu.Label>

            <Menu.Item
              color="red"
              leftSection={
                <IconStack style={{ width: rem(14), height: rem(14) }} />
              }
            >
              Ban this account
            </Menu.Item>
            <Menu.Item
              color="red"
              leftSection={
                <IconTrash style={{ width: rem(14), height: rem(14) }} />
              }
            >
              Disable this account
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
    </div>
  );
};
