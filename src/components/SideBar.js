import React from "react";

function SideBar() {
  return (
    <div className="flex-shrink-0 w-64 bg-gray-800">
      <div className="flex items-center h-16 px-4 bg-white text-xl text-white font-medium">
        <div className="ml-2 text-gray-800">Zatec Showroom</div>
      </div>
      <div>
        <div className="px-2 py-2">
          <div></div>
        </div>
        <div className="px-6 py-6">
          <h4 className="text-sm text-gray-600 uppercase font-bold tracking-widest">
            Recent News
          </h4>
          <ul className="mt-3 text-white">
            <li className="mt-3">
                Tailwind Css
            </li>
            <li className="mt-3">
                JavaScript
            </li>
            <li className="mt-3">
                React
            </li>
            <li className="mt-3">
                Assignments
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
