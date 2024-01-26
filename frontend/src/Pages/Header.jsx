import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const autt = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <nav className="bg-violet-500 flex justify-between h-16">
        <img
          className="h-12 w-12 rounded-full my-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRotUMC3Rd-rdwJeBYxNiCG6e8RvB_Hq2706A&usqp=CAU"
          alt=""
        />
        <ul className="flex justify-end space-x-6 ltr:px-3 my-4">
          {autt ? (
            <>
              <li>
                <Link
                  className="text-white text-base cursor-pointer"
                  to="/"
                  onClick={logout}
                >
                  Logout
                </Link>
              </li>{" "}
              <li>
                <Link
                  className="text-white text-base cursor-pointer"
                  to="/home"
                >
                  Home
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  className="text-white text-base cursor-pointer"
                  to="/login"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  className="text-white text-base cursor-pointer"
                  to="/signup"
                >
                  SignUp
                </Link>
              </li>
            </>
          )}

          <li>
            <Link className="text-white text-base cursor-pointer" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="text-white text-base cursor-pointer" to="/contact">
              Contact
            </Link>
          </li>
          <img
            className="h-6 w-6 my-1"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSghXTADwLXcxxCAo6w1Ahh8BXAhTh9-75TkA&usqp=CAU" alt=""
          />
        </ul>
      </nav>
      <hr />
    </>
  );
}
