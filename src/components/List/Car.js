import React from "react";

function Car(props) {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full"
        src="https://source.unsplash.com/1600x900/?bmw"
        alt="{props.name}"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.name}</div>
        <p className="text-gray-700 text-base">
          <b> Car Name:</b> {props.name}
        </p>
        <p className="text-gray-700 text-base">
          <b> Car Model :</b> {props.model}
        </p>
        <p className="text-gray-700 text-base">
          <b> Color :</b> {props.color}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-blue-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{props.model}
        </span>
        <span className="inline-block bg-blue-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{props.color}
        </span>
      </div>
    </div>
  );
}

export default Car;
