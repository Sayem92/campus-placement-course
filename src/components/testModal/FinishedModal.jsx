import React, { useState } from "react";
import { Link } from "react-router-dom";

const FinishedModal = () => {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);
  }

  return (
    <div>
      <input type="checkbox" id="finished-Modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
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

          <p className="text-blue-500 font-bold text-lg text-left">
            Are you sure want to submit this answers?
          </p>
          <div className="modal-actio flex justify-between items-center">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className="checkbox checkbox-info checkbox-sm"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <p className="text-left">
                I have verified the text summary shown above is correct
              </p>
            </div>
            <div className="space-x-7">
              <button
                type="button"
                disabled={!isChecked}
                className="btn btn-sm hover:bg-blue-500 bg-blue-500 text-white border-none"
              >
                <Link to="/result"> Yes </Link>
              </button>
              <label
                htmlFor="finished-Modal"
                className="px-4 py-1 border text-right rounded-md"
              >
                No
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishedModal;
