import React from "react";
import Header from "./Header";

export default function Todo() {
  const [items, setItems] = React.useState("");

  function AddItemsToTodo(e){
    e.preventDefault();
    setItems("");
  };

  return (
    <>
    <Header />
      <div  className="flex flex-col">
      <h1 className="text-3xl italic font-serif flex justify-center">Make your To-do list here</h1>
      <div className="border-0 border-black">
      <div className="flex justify-center">
          <form className="">
            <input className="border-2 border-current my-20 px-4 py-2"
              type="text"
              placeholder="List"
              value={items}
              onChange={(e) => {
                setItems(e.target.value);
              }}
            />
            <button
            onClick={AddItemsToTodo}
            className="border-2 mx-20 my-6 h-12 w-16 border-current rounded-full bg-purple-500 text-white hover:bg-white hover:text-slate-900"
          >
            Submit
          </button>
          </form>
        </div>
      </div>
      </div>
    </>
  );
}
