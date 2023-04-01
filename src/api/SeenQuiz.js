export const seenQuiz = (id, viewQuiz, refetch) => {
  fetch(`https://campus-placement-course-server.vercel.app/seenQuiz/${id}`, {
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
