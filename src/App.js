import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Routes";

function App() {
  return (
    <div className="mx-w-[1440px] mx-auto h-[100vh]">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
