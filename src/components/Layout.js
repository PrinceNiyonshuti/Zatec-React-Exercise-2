import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Main from "./Main";
import Footer from "./Footer";


function Layout() {
  return (
    <div>
      <div className="font-sans text-gray-900 antialiased">
        <div className="min-h-screen flex bg-gray-200">
          <SideBar/>
          <div className="flex-grow flex flex-col">
            <NavBar/>
            <Main/>
          </div>
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </div>
    </div>
  );
}
export default Layout;
