import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import SideSetting from "../../componets/SideSetting/SideSetting";
export default function LayoutSettings() {
  const [first, setFirst] = useState(0);
  useEffect(() => {}, []);

  return (
    <>
      <div className="min-h-screen container-custom">
        <h1 className="border-b pb-6 text-4xl font-semibold dark:text-light-color">Settings</h1>
        <div className="grid grid-cols-8 pt-3 sm:grid-cols-10">
          <SideSetting />

          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}
