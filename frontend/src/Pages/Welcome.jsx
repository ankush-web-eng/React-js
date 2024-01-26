import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <>
      <Header />
      <div className="bg-cyan-300 h-screen">
        <div className="">
          <h1 className="text-6xl flex justify-center font-serif italic">
            My-blogs
          </h1>
          <br />{" "}
          <p className="flex justify-center font-thin ">
            Hey Stranger! Welcome to My-Blogs. A Place where you can organize
            your daily life. Explore more by creating your TO-Do List and
            Keeping your notes at a place together.
          </p>
        </div>
        <div className="flex justify-center mx-20 py-20 space-x-4">
          <button className=" bg-purple-600 text-white hover:text-black hover:bg-white rounded-full p-3 active:bg-red-500 active:text-slate-100">
            <Link to="/signup">SignUp</Link>
          </button>
          <button className=" bg-purple-600 text-white hover:text-black hover:bg-white rounded-full p-3 active:bg-red-500 active:text-slate-100">
            <Link to="/login">Login</Link>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
