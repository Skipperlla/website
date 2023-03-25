import { Footer, Nav } from "./components";
import React, { FC, PropsWithChildren } from "react";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="max-w-screen-md mx-auto px-4">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
