import React from "react";
import breakfast from "../../../../assets/breakfast.png";
import launch from "../../../../assets/launch.png";
import dinner from "../../../../assets/dinner.png";

export default function Services() {
  return (
    <>
      <div className="bg-gray-50 mt-8 p-4">
        <p className="page-title text-center">OUR SERVICES</p>
        <div
          className="mt-20 flex gap-10 justify-center 
        items-center flex-col md:flex-row w-10/12 m-auto py-10"
        >
          <div className="pt-4 pb-1 w-full md:w-4/12 bg-red-50 border rounded-lg">
            <div className="flex justify-center">
              <img src={breakfast} alt="" />
            </div>
            <div className="mt-10 w-full bg-white">
              <h3 className="text-center text-xl text-gray-500">
                Breakfast Deal
              </h3>
            </div>
          </div>

          <div className="pt-4 pb-1 w-full md:w-4/12 bg-red-50 border rounded-lg">
            <div className="flex justify-center">
              <img src={launch} alt="" />
            </div>
            <div className="mt-10 w-full bg-white">
              <h3 className="text-center text-xl text-gray-500">
                Special Launch
              </h3>
            </div>
          </div>
          <div className="pt-4 pb-1 w-full md:w-4/12 bg-red-50 border rounded-lg">
            <div className="flex justify-center">
              <img src={dinner} alt="" />
            </div>
            <div className="mt-10 w-full bg-white">
              <h3 className="text-center text-xl text-gray-500">
                Special Dinner
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
