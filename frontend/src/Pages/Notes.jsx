import React, { useEffect } from "react";
import Header from "./Header";
import axios from 'axios';

export default function Notes() {
  const [title, setTitle] = React.useState("");
  const [file, setFile] = React.useState("");
  const [allImage, setAllImage] = React.useState(null);

  const getAllImage = async (e)=>{
    const result = await axios.get("http://localhost:5500/get-notes");
    console.log(result.data.data);
    setAllImage(result.data.data);
  };

  useEffect(()=>{
    getAllImage()
  },[]);

  const Upload = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("file", file);
    console.log(title, file);
    let result = await axios.post("http://localhost:5500/notes", formdata, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(result);
  };

  const showPdf = (pdf)=>{
    window.open(`http://localhost:5500/files/${pdf}`, "_blank", "noreferrer")
  }
  
  return (
    <>
      <Header />
      <div className="h-screen flex flex-col">
        <div className="w-max p-4 justify-center items-center flex">
          <form className="mx-2">
            <h3 className="my-2">Upload your pdf here!!</h3> <br />
            <input
              className="my-2 border-current border-2 py-2 px-10"
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              required
            />{" "}
            <br />
            <input
              className="my-4 border-current border-2"
              type="file"
              placeholder="document"
              onChange={(e) => setFile(e.target.files[0])}
              required
            />{" "}
            <br />
            <button
              className="border-2 mx-20 my-6 h-12 w-16 border-current rounded-full bg-purple-500 text-white hover:bg-white hover:text-slate-900"
              onClick={Upload}
            >
              Upload
            </button>
          </form>
        </div>
        <div className="flex felx-col">
        <h4>Uploaded PDF:</h4>
        <br />
        <div className="flex justify-center w-max overflow-hidden overscroll-x-none">
          {allImage==null?"":allImage.map((data)=>{
            return(
              <div className="flex justify-around flex-col">
                <li >Title:{data.title}</li> <br/>
                <button onClick={()=>{showPdf(data.pdf)}} className="border-2 mx-20 my-6 h-12 w-16 border-current rounded-full bg-purple-500 text-white hover:bg-white hover:text-slate-900">Show PDF</button>
              </div>
            )
          })}
        </div>
      </div>
      </div>
      
    </>
  );
}
