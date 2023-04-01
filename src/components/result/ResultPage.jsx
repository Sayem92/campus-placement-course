import React from "react";
import { Link } from "react-router-dom";

const ResultPage = () => {
  return (
    <div className="my-32 mx-20">
      {/* <div className="mx-5">
        <h3 className=" text-lg text-left">Test Summary</h3>
        <div className="grid grid-cols-5 border my-4 shadow-md">
          <div className="space-y-5">
            <p className="border-b-2 py-4 bg-slate-100">Section</p>
            <p className="py-4 pb-6"> </p>
          </div>
          <div className="space-y-5">
            <p className="border-b-2 py-4 bg-slate-100">No of Questions</p>
            <p className="py-4 pb-6">11</p>
          </div>
          <div className="space-y-5">
            <p className="border-b-2 py-4 bg-slate-100">Answered</p>
            <p className="py-4 pb-6">2</p>
          </div>
          <div className="space-y-5">
            <p className="border-b-2 py-4 bg-slate-100"> Marked for Review</p>
            <p className="py-4 pb-6">5</p>
          </div>
          <div className="space-y-5">
            <p className="border-b-2 py-4 bg-slate-100">Not Visited</p>
            <p className="py-4 pb-6">3</p>
          </div>
        </div>
      </div> */}
      <h1 className=" font-bold text-4xl">
        See all review for quiz. Upcoming page
      </h1>
      <Link to="/liveTest">
        <button
          type="button"
          className="btn mt-10 btn-sm hover:bg-blue-500 bg-blue-500 text-white border-none"
        >
          Back
        </button>
      </Link>
    </div>
  );
};

export default ResultPage;
