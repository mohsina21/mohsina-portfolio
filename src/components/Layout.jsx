import React from "react";
import FloatingHearts from "./FloatingHearts";

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <FloatingHearts />
      {children}
    </div>
  );
};

export default Layout;
