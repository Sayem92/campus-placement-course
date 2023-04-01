import React from "react";

const QList = ({ handleSelectQuestion, focus, mainData }) => {
  //  console.log(focus);
  //  console.log(mainData[1]?.theme);

  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 gap-y-2 gap-x-2 px-5 my-3">
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
    </div>
  );
};

export default QList;
