import React from "react";
import qList from "../../assets/qlist.svg";
import time from "../../assets/time.svg";

const Home = () => {
  return (
    <div>
      <div class="flex h-screen items-center justify-center bg-indigo-50 px-4">
        <div class="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl w-80 h-64">
          <h1 className="py-6 px-3 font-bold bg-blue-100">
            Topic Test (Quiz for Git)
          </h1>
          <div class="p-5 space-y-4">
            <div className="flex justify-start items-center gap-5">
              <img className="w-6 h-6" src={qList} alt="" />
              <p>11 Questions</p>
            </div>
            <div className="flex justify-start items-center gap-5">
              <img className="w-6 h-6" src={time} alt="" />
              <p>20 min</p>
            </div>
          </div>
          <div className="flex justify-end mx-5">
            <button class="px-3 rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75 uppercase">
              attempt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
