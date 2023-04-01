import React from "react";

const QList = ({ handleSelectQuestion, focus, mainData }) => {
  //  console.log(focus);
  //  console.log(mainData[1]?.theme);

  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 gap-y-1 gap-x-2 px-5 my-3">
      {mainData?.map((data, index) => (
        <div key={data?._id}>
          <button
            onClick={() =>
              handleSelectQuestion(`${data?._id}`, data?.theme, data?.mark)
            }
            className={`px-5 py-3 w-14  ${
              focus?.id === `${data?._id}` ? focus?.active : ""
            }
            ${data?.theme === undefined ? "bg-gray-300" : data?.theme}  ${
              data?.mark === "UnMark" ? "border-r-8 border-black" : ""
            }`}
          >
            {index + 1}
          </button>
        </div>
      ))}

      {/* <div>
        <button
          onClick={() =>
            handleSelectQuestion(
              `${mainData[0]?._id}`,
              mainData[0]?.theme,
              mainData[0]?.mark
            )
          }
          className={`px-5 py-3 w-14  ${
            focus?.id === `${mainData[0]?._id}` ? focus?.active : ""
          }
          ${
            mainData[0]?.theme === undefined
              ? "bg-gray-300"
              : mainData[0]?.theme
          }  ${mainData[0]?.mark === "UnMark" ? "border-r-8 border-black" : ""}`}
        >
          1
        </button>
      </div> */}
      {/* <div>
        <button
          onClick={() =>
            handleSelectQuestion(
              `${mainData[1]?._id}`,
              mainData[1]?.theme,
              mainData[1]?.mark
            )
          }
          className={`px-5 py-3 w-14 ${
            focus?.id === `${mainData[1]?._id}` ? focus?.active : ""
          } ${
            mainData[1]?.theme === undefined
              ? "bg-gray-300"
              : mainData[1]?.theme
          }  ${mainData[1]?.mark === "UnMark" ? "border-r-8 border-black" : ""}`}
        >
          2
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            handleSelectQuestion(
              `${mainData[2]._id}`,
              mainData[2]?.theme,
              mainData[2]?.mark
            )
          }
          className={`px-5 py-3 w-14 ${
            focus?.id === `${mainData[2]?._id}` ? focus?.active : ""
          } ${
            mainData[2]?.theme === undefined
              ? "bg-gray-300"
              : mainData[2]?.theme
          }  ${mainData[2]?.mark === "UnMark" ? "border-r-8 border-black" : ""}`}
        >
          3
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            handleSelectQuestion(
              `${mainData[3]?._id}`,
              mainData[3]?.theme,
              mainData[3]?.mark
            )
          }
          className={`px-5 py-3 w-14 ${
            focus?.id === `${mainData[3]?._id}` ? focus?.active : ""
          } ${
            mainData[3]?.theme === undefined
              ? "bg-gray-300"
              : mainData[3]?.theme
          }  ${mainData[3]?.mark === "UnMark" ? "border-r-8 border-black" : ""}`}
        >
          4
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            handleSelectQuestion(
              `${mainData[4]?._id}`,
              mainData[4]?.theme,
              mainData[4]?.mark
            )
          }
          className={`px-5 py-3 w-14 ${
            focus?.id === `${mainData[4]?._id}` ? focus?.active : ""
          } ${
            mainData[4]?.theme === undefined
              ? "bg-gray-300"
              : mainData[4]?.theme
          }  ${mainData[4]?.mark === "UnMark" ? "border-r-8 border-black" : ""}`}
        >
          5
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            handleSelectQuestion(
              `${mainData[5]?._id}`,
              mainData[5]?.theme,
              mainData[5]?.mark
            )
          }
          className={`px-5 py-3 w-14 ${
            focus?.id === `${mainData[5]?._id}` ? focus?.active : ""
          }  ${
            mainData[5]?.theme === undefined
              ? "bg-gray-300"
              : mainData[5]?.theme
          }  ${mainData[5]?.mark === "UnMark" ? "border-r-8 border-black" : ""}`}
        >
          6
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            handleSelectQuestion(
              `${mainData[6]?._id}`,
              mainData[6]?.theme,
              mainData[6]?.mark
            )
          }
          className={`px-5 py-3 w-14 ${
            focus?.id === `${mainData[6]?._id}` ? focus?.active : ""
          } ${
            mainData[6]?.theme === undefined
              ? "bg-gray-300"
              : mainData[6]?.theme
          }  ${mainData[6]?.mark === "UnMark" ? "border-r-8 border-black" : ""}`}
        >
          7
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            handleSelectQuestion(
              `${mainData[7]?._id}`,
              mainData[7]?.theme,
              mainData[7]?.mark
            )
          }
          className={`px-5 py-3 w-14 ${
            focus?.id === `${mainData[7]?._id}` ? focus?.active : ""
          } ${
            mainData[7]?.theme === undefined
              ? "bg-gray-300"
              : mainData[7]?.theme
          }  ${mainData[7]?.mark === "UnMark" ? "border-r-8 border-black" : ""}`}
        >
          8
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            handleSelectQuestion(
              `${mainData[8]?._id}`,
              mainData[8]?.theme,
              mainData[8]?.mark
            )
          }
          className={`px-5 py-3 w-14 ${
            focus?.id === `${mainData[8]?._id}` ? focus?.active : ""
          }  ${
            mainData[8]?.theme === undefined
              ? "bg-gray-300"
              : mainData[8]?.theme
          }  ${mainData[8]?.mark === "UnMark" ? "border-r-8 border-black" : ""}`}
        >
          9
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            handleSelectQuestion(
              `${mainData[9]?._id}`,
              mainData[9]?.theme,
              mainData[9]?.mark
            )
          }
          className={`px-5 py-3 w-14 ${
            focus?.id === `${mainData[9]?._id}` ? focus?.active : ""
          } ${
            mainData[9]?.theme === undefined
              ? "bg-gray-300"
              : mainData[9]?.theme
          }  ${mainData[9]?.mark === "UnMark" ? "border-r-8 border-black" : ""}`}
        >
          10
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            handleSelectQuestion(
              `${mainData[10]?._id}`,
              mainData[10]?.theme,
              mainData[10]?.mark
            )
          }
          className={`px-5 py-3 w-14 ${
            focus?.id === `${mainData[10]?._id}` ? focus?.active : ""
          } ${
            mainData[10]?.theme === undefined
              ? "bg-gray-300"
              : mainData[10]?.theme
          }  ${mainData[10]?.mark === "UnMark" ? "border-r-8 border-black" : ""}`}
        >
          11
        </button>
      </div> */}
    </div>
  );
};

export default QList;
