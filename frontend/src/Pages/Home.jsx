import React from "react";
import Header from "./Header";
import { Link} from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="h-fit">
        <Header />
        <h1 className="text-black text-5xl flex justify-center py-5 font-serif italic">
          Home Page
        </h1>
        <div className="flex justify-center space-x-4">
          <button className="border-1 bg-yellow-50 hover:bg-white py-2 px-4 border-black cursor-pointer text-black rounded-full text-xl">
            <Link to="/home/to-do">To-do</Link>
          </button>
          <button className="border-1 bg-yellow-50 hover:bg-white py-2 px-4 border-black cursor-pointer text-black rounded-full text-xl">
            <Link to="/home/notes">Notes</Link>
          </button>
        </div>
      </div>
    </>
  );
}
