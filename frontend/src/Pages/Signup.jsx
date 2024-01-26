import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate} from "react-router-dom";

export default function Signup() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate =  useNavigate();

  function handleName(e) {
    const newName = e.target.value;
    setName(newName);
  }

  function handleEmail(e) {
    const newEmail = e.target.value;
    setEmail(newEmail);
  }

  function handlePassword(e) {
    const newPassword = e.target.value;
    setPassword(newPassword);
  }

  const collectData = async () => {
    console.log(name, email, password);
    let result = await fetch("http://localhost:5500/signup", {
      method: "Post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    result = await result.json();;
    localStorage.setItem("user", JSON.stringify(result))
    navigate("/home")
  };

  return (
    <>
      <Header />
      <div className="'h-screen">
        <h1 className="text-black text-5xl flex justify-center py-5 font-serif italic">
          {" "}
          Register Yourself
        </h1>
        <div className="flex justify-center">
          <div>
            <p className="font-serif ">Enter Your Name:</p>
            <input
              className="w-48 h-8 mx-6 my-4 px-7 py-4 border-current border-2 focus:bg-cyan-200"
              type="text"
              placeholder="name"
              onChange={handleName}
              value={name}
            />{" "}
            <br />
            <p className="font-serif ">Enter Your Email:</p>
            <input
              className="w-48 h-8 mx-6 my-4 px-7 py-4 border-current border-2 focus:bg-cyan-200"
              type="email"
              placeholder="email"
              onChange={handleEmail}
              value={email}
            />{" "}
            <br />
            <p className="font-serif ">Create a Strong Password:</p>
            <input
              className="w-48 h-8 mx-6 my-4 px-7 py-4 border-current border-2 focus:bg-cyan-200"
              type="password"
              placeholder="password"
              onChange={handlePassword}
              value={password}
            />{" "}
            <br />
            <div className="flex justify-center">
              <button
                onClick={collectData}
                className="border-2 h-12 w-16 border-current rounded-full bg-purple-500 text-white hover:bg-white hover:text-slate-900"
              >
               Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
