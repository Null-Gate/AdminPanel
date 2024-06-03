import { useState } from "react";
import NavIndicator from "./components/Pending/NavIndicator";
import { PackageFiltering, PackageResult } from "./components/Pending/Package";
import { CarFiltering, CarResult } from "./components/Pending/Car";
import { DriverFiltering, DriverResult } from "./components/Pending/Driver";

const Pending = () => {
  const [navIndicate, setNavIndicate] = useState<string>("Packages");
  // console.log(navIndicate);

  const renderFilteringComponent = () => {
    switch (navIndicate) {
      case "Packages":
        return <PackageFiltering />;
      case "Cars":
        return <CarFiltering />;
      case "Drivers":
        return <DriverFiltering />;
      default:
        return <div>No filtering component available</div>;
    }
  };

  const renderResultComponent = () => {
    switch (navIndicate) {
      case "Packages":
        return <PackageResult />;
      case "Cars":
        return <CarResult />;
      case "Drivers":
        return <DriverResult />;
      default:
        return <div>No result component available</div>;
    }
  };

  return (
    <div className="flex flex-col p-5 gap-5">
      <NavIndicator setNavIndicate={setNavIndicate} />
      {/* filtering  */}
      <div className=" border rounded-lg shadow">
        <div className=" grid grid-cols-3 gap-5 p-5 bg-white justify-around w-full">
          {renderFilteringComponent()}
        </div>
      </div>
      {/* result */}
      <div>{renderResultComponent()}</div>
    </div>
  );
};

export default Pending;
