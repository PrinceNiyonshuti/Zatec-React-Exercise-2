import React from "react";

function NavBar() {
  return (
    <div>
      <div className="relative shadow-md bg-white flex-shrink-0">
        <div className="flex justify-between items-center h-16 px-12">
          <div>
            <div className="relative ">
              <div className="relative z-50">
                <ul className="flex">
                  <li className="mr-6">
                    <a className="text-blue-500 hover:text-gray-600" href="#home">
                      Home
                    </a>
                  </li>
                  <li className="mr-6">
                    <a className="text-blue-500 hover:text-gray-600" href="#about">
                      About
                    </a>
                  </li>
                  <li className="mr-6">
                    <a className="text-blue-500 hover:text-gray-600" href="#service">
                      Services
                    </a>
                  </li>
                  <li className="mr-6">
                    <a className="text-blue-500 hover:text-gray-600" href="#team">
                      Our Team
                    </a>
                  </li>
                  <li className="mr-6">
                    <a className="text-blue-500 hover:text-gray-600" href="#contact">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
