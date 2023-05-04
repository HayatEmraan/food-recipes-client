import React from "react";
import Header from "../libs/shared/Header";
import { Outlet } from "react-router-dom";
import FooterOut from "../libs/shared/Footer";

const Screen = () => {
  return (
    <div>
      <Header />
      <div style={{ minHeight: "calc(100vh - 100px)" }}>
        <Outlet />
      </div>
      <div>
        <FooterOut />
      </div>
    </div>
  );
};

export default Screen;
