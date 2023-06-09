import React, { useEffect } from "react";
import qList from "../../assets/qlist.svg";
import time from "../../assets/time.svg";
import TestModal from "../testModal/TestModal";

const Home = () => {
  useEffect(() => {
    localStorage.removeItem("remainingTime");
  }, []);

  return (
    <div>
      <div className="flex h-screen items-center justify-center bg-indigo-50 px-4">
        <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl w-80 h-64">
          <h1 className="py-6 px-3 font-bold bg-blue-100">
            Topic Test (Quiz for Git)
          </h1>
          <div className="p-5 space-y-4">
            <div className="flex justify-start items-center gap-5">
              <img className="w-6 h-6" src={qList} alt="" />
              <p>11 Questions</p>
            </div>
            <div className="flex justify-start items-center gap-5">
              <img className="w-6 h-6" src={time} alt="" />
              <p>15 min</p>
            </div>
          </div>
          <div className="flex justify-end mx-5 mt-7">
            {/* {result ? (
              <Link to="/result">
                <label className="px-3 rounded-md bg-blue-600  py-2 text-indigo-100 hover:shadow-md duration-75 uppercase hover:cursor-pointer">
                  View Analysis
                </label>
              </Link>
            ) : ( */}
            <label
              htmlFor="test-modal"
              className="px-3 rounded-md bg-blue-600  py-2 text-indigo-100 hover:shadow-md duration-75 uppercase hover:cursor-pointer"
            >
              attempt
            </label>
            {/* )} */}
          </div>
        </div>
      </div>
      <TestModal></TestModal>
    </div>
  );
};

export default Home;
