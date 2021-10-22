import React from "react";
import PlanesList from "./List/PlanesList";
import CarsList from "./List/CarsList";

function Main() {
  return (
    <div>
      <div className="flex-grow flex flex-col">
        <div className="flex-grow">
          <div className=" py-8 mx-auto px-5">
            <div>
              <div className="flex items-baseline justify-between">
                <div>
                  <h2 className="text-lg">Welcome To Zatec Cars and Planes Shoow Room</h2>
                </div>
              </div>
              {/* List of planes */}
                <PlanesList/>
              {/* List of planes */}
                <CarsList/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
