export const markQuiz = (_id, markData, refetch) => {

    fetch(`http://localhost:5000/markQuiz/${_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(markData),
      })
        .then((res) => res.json())
        .then((data) => {
           console.log("handle mark data", data);
          refetch();
        });

};