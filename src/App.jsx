import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  return (
    <>
      <div
        className="w-full h-screen duration-200 "
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center bg-white px-3 py-2 rounded-2xl shadow-xl">
            <button
              className="outline-none px-4 py-1 rounded-full text-white font-bold"
              style={{ backgroundColor: "red" }}
              onClick={() => {
                setColor("red");
              }}
            >
              Red
            </button>

            <button
              className="outline-none px-4 py-1 rounded-full text-white font-bold"
              style={{ backgroundColor: "purple" }}
              onClick={() => {
                setColor("purple");
              }}
            >
              Purple
            </button>

            <button
              className="outline-none px-4 py-1 rounded-full text-white font-bold"
              style={{ backgroundColor: "green" }}
              onClick={() => {
                setColor("green");
              }}
            >
              Green
            </button>

            <button
              className="outline-none px-4 py-1 rounded-full text-white font-bold"
              style={{ backgroundColor: "blue" }}
              onClick={() => {
                setColor("blue");
              }}
            >
              Blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;