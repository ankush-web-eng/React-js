import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setGivenEmail] = React.useState("");
  const [password, setGivenPassword] = React.useState("");
  const navigate = useNavigate();

  const loginStart = async () => {
    let result = await fetch("http://localhost:5500/login", {
      method: "Post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "Application/JSON",
      },
    });
    result = await result.json();
    if (result.name) {
      const save = JSON.stringify(result);
      localStorage.setItem("user", save);
      navigate("/home");
    } else {
      alert("Invalid Credentials!!")
    }
  };

  return (
    <div className="h-screen">
      <Header />
      <h1 className="text-black text-5xl flex justify-center py-5 font-serif italic">
        Welcome back
      </h1>
      <div className="flex justify-center">
        <div className="">
          <p className="font-serif">Your Registered Email</p>
          <br />
          <input
            className="w-48 h-8 mx-6 my-1 px-7 py-4 border-current border-2 focus:bg-cyan-200"
            type="email"
            placeholder="email"
            onChange={(e) => {
              setGivenEmail(e.target.value);
            }}
            value={email}
          />{" "}
          <br /> <br />
          <p className="font-serif my-1">Your Password</p> <br />
          <input
            className="w-48 h-8 mx-6  px-7 py-4 border-current border-2 focus:bg-cyan-200"
            type="password"
            placeholder="password"
            onChange={(e) => {
              setGivenPassword(e.target.value);
            }}
            value={password}
          />
          <br />
          <button
            onClick={loginStart}
            className="border-2 mx-20 my-6 h-12 w-16 border-current rounded-full bg-purple-500 text-white hover:bg-white hover:text-slate-900"
          >
            Submit
          </button>{" "}
        </div>
      </div>
      <Footer />
    </div>
  );
}
