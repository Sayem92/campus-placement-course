export const seenQuiz = (id, viewQuiz, refetch) => {

    fetch(`http://localhost:5000/seenQuiz/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(viewQuiz),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("default seen data", data);
          refetch();
        });

};
