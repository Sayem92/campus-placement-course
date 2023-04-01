import React, { useEffect, useState } from "react";
import Time from "../time/Time";
import circleCheck from "../../assets/circle-check.svg";
import rightArrow from "../../assets/arrow-right.svg";
import rightArrowWhite from "../../assets/right-arrow-white.svg";
import QList from "../qList/QList";
import ViewModal from "../testModal/ViewModal";
import { useQuery } from "@tanstack/react-query";
import { seenQuiz } from "../../api/SeenQuiz";
import { markQuiz } from "../../api/MarkQuiz";
import FinishedModal from "../testModal/FinishedModal";

const LiveTest = () => {
  // filter data
  const [mainData, setMainData] = useState([]);
  const [singleData, setSingleData] = useState({});
  //   checked for data save ------
  const [selected, setSelected] = useState([]);
  const [selectId, setSelectId] = useState("64269ff173199d3a8804891b");
  const [focus, setFocus] = useState({
    id: selectId,
    active: "border border-4 border-black",
  });
  const [load, setLoad] = useState(false);

  const { refetch } = useQuery({
    queryKey: ["allQuiz"],
    queryFn: async () => {
      try {
        const res = await fetch(`http://localhost:5000/allQuiz`);
        const data = await res.json();
        setMainData(data);
        return data;
      } catch (err) {
        console.log(err);
      }
    },
  });

  useEffect(() => {
    if (mainData) {
      const filterData = mainData?.filter((data) => data._id === selectId);
      setSingleData(filterData[0]);
    }
  }, [selectId, mainData]);

  // console.log(mainData);
  // console.log(singleData);
  // console.log(selected);

  useEffect(() => {
    // console.log(singleData);
    if (singleData?.theme === undefined || singleData?.mark === undefined) {
      console.log("first undefined", singleData?.theme, singleData?.mark);

      const active = { id: selectId, active: "border border-4 border-black" };
      setFocus(active);

      const viewQuiz = { theme: "bg-[#cd7c7c]", mark: "Mark" };

      // seen quiz api call
      seenQuiz(selectId, viewQuiz, refetch);
    }
  }, [selectId, singleData, refetch]);

  // mark for the quiz
  const handleMarkSelect = (singleData) => {
    const { _id, mark } = singleData;
    console.log("handle mark", _id, mark);

    if (mark === "Mark") {
      const markData = { mark: "UnMark" };
      // mark quiz api call
      markQuiz(_id, markData, refetch);
    } else {
      const markData = { mark: "Mark" };
      // mark quiz api call
      markQuiz(_id, markData, refetch);
    }
  };

  // reload after get check quiz
  useEffect(() => {
    if (!selected.length) {
      fetch("http://localhost:5000/checkQuiz")
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setSelected(data);
        });
    }
  }, [selected, load]);

  const handleOptionSelect = (questionId, option, correctAnswer) => {
    // remove previously selected option for the same question
    const filteredSelected = selected.filter(
      (item) => item.questionId !== questionId
    );
    // add newly selected option
    setSelected([...filteredSelected, { questionId, option, correctAnswer }]);

    // console.log(questionId, option, correctAnswer);
    const selectOption = { questionId, option, correctAnswer };
    fetch(`http://localhost:5000/checkQuiz/${questionId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(selectOption),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("select option data", data);
      });

    // color change for selected
    fetch(`http://localhost:5000/themeQuiz/${questionId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ theme: "bg-[#a5cd7c]" }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("theme change data", data);
        refetch();
      });
  };

  // selectId question -------
  const handleSelectQuestion = (id, newTheme, newMark) => {
    setSelectId(id);
    const active = { id: id, active: "border border-4 border-black" };
    setFocus(active);

    if (newTheme === undefined || newMark === undefined) {
      console.log("default click", newTheme, newMark);
      const viewQuiz = { theme: "bg-[#cd7c7c]", mark: "Mark" };
      // seen quiz api call
      seenQuiz(id, viewQuiz, refetch);
    } else {
      console.log("value ace click", newTheme, newMark);
      const viewQuiz = { theme: newTheme, mark: newMark };
      // seen quiz api call
      seenQuiz(id, viewQuiz, refetch);
    }
  };

  //  next option
  const handleClick = () => {
    const currentIndex = mainData.findIndex((item) => item._id === selectId);
    const nextIndex =
      currentIndex === mainData.length - 1 ? 0 : currentIndex + 1;
    const currentId = mainData[nextIndex]._id;
    setSelectId(currentId);
    const active = {
      id: currentId,
      active: "border border-4 border-black",
    };
    setFocus(active);

    // update
    const filter = mainData.filter((data) => data._id === currentId);
    const updateTheme = filter[0]?.theme;
    const updateMark = filter[0]?.mark;

    // default value set
    if (updateTheme === undefined || updateMark === undefined) {
      console.log("default", updateMark, updateTheme);
      const viewQuiz = { theme: "bg-[#cd7c7c]", mark: "Mark" };
      // seen quiz api call
      seenQuiz(currentId, viewQuiz, refetch);
    } else {
      console.log("value ace", updateMark, updateTheme);
      const viewQuiz = { theme: updateTheme, mark: updateMark };
      // seen quiz api call
      seenQuiz(currentId, viewQuiz, refetch);
    }
  };

  // reset
  const handleReset = () => {
    fetch(`http://localhost:5000/resetQuiz/${selectId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ theme: "bg-[#cd7c7c]" }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("reset data", data);
        refetch();
        setLoad(true);
        // remove the setSelect from the checkboxes
        setSelected(selected.filter((obj) => obj?.questionId !== selectId));
      });
  };

  return (
    <div>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 h-[100vh]">
        {/* left section  */}
        <div className="border border-gray-300 ">
          <Time></Time>
          <p className="border border-gray-300"></p>
          <QList
            focus={focus}
            handleSelectQuestion={handleSelectQuestion}
            mainData={mainData}
          ></QList>

          <div className="px-5 lg:pt-28 py-10 text-center space-y-2">
            <div className="flex justify-center items-center gap-2 mb-2">
              <img className="w-5 h-5" src={circleCheck} alt="" />
              <p>Progress saved</p>
            </div>
            <label
              htmlFor="view-modal"
              className="text-blue-600 hover:cursor-pointer"
            >
              View Instructions
            </label>
            <ViewModal></ViewModal>
            <label htmlFor="finished-Modal" className="btn bg-[#4caf50] hover:bg-[#47bd4b] border-none">
              Finished Test
            </label>
            <FinishedModal></FinishedModal>
          </div>
        </div>

        {/* middle section  */}
        <div className="md:col-span-2 lg:col-span-3 border-b border-gray-300">
          {/* middle top section */}
          <div className="flex justify-between items-center p-4 border border-b-2 bg-slate-100">
            <div className="flex justify-center items-center gap-1">
              <img className="w-6 h-5" src={rightArrow} alt="" />
              <h1 className="font-bold">Single Correct</h1>
            </div>
            <div className="flex items-center">
              <p
                className="text-[#4caf50] border border-gray-300 p-2 rounded-l-md"
                title="3.00 marks will be rewarded for correct answer"
              >
                + 3.00
              </p>
              <p
                className="text-[#db2020] border border-l-0 border-gray-300 p-2 rounded-r-md"
                title="1.00 mark will be deducted for wrong answer"
              >
                - 1.00
              </p>
            </div>
          </div>
          <div>
            <div key={singleData?._id}>
              <h3 className="font-bold px-5 py-7">{singleData?.question}</h3>
              <div>
                {singleData?.options?.map((option, index) => (
                  <div
                    key={index}
                    className=" px-5 py-5 border-t border-gray-300"
                  >
                    <label>
                      <input
                        type="checkbox"
                        className="checkbox checkbox-xs checkbox-success border-gray-400 mr-4"
                        value={option}
                        checked={selected.some(
                          (item) =>
                            item.questionId === singleData._id &&
                            item.option === option
                        )}
                        onChange={() =>
                          handleOptionSelect(
                            singleData._id,
                            option,
                            singleData?.correctAnswer
                          )
                        }
                      />
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* right section  */}
        <div className="lg:border lg:border-gray-300 md:border-white px-16 py-10 lg:pt-20 space-y-5">
          <button
            onClick={() => handleMarkSelect(singleData)}
            className="w-full py-2 px-4 rounded-md font-semibold text-black bg-gray-300 border-none"
          >
            {singleData?.mark && `${singleData?.mark}`}
            {!singleData?.mark && "Mark"}
          </button>
          <button
            onClick={handleReset}
            className="w-full py-2 px-4 rounded-md font-semibold text-black bg-gray-300 border-none"
          >
            Reset
          </button>

          <button
            onClick={handleClick}
            className="w-full py-2 px-4 rounded-md font-semibold text-white bg-blue-600 border-none"
          >
            <img className="w-10 h-10 mx-auto" src={rightArrowWhite} alt="" />{" "}
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveTest;
