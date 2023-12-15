import React from "react";
import Sidebar from "../components/Sidebars";
import { ConfigRoutes } from "../routes";

const HomeScreen = () => {
  return (
    <>
      <Sidebar>
        <ConfigRoutes />
      </Sidebar>
    </>
  );
};

export default HomeScreen;
