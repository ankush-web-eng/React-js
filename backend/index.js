import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";

const app = express();
const port = 5500;

const db = "mongodb://127.0.0.1:27017/asDB";
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/files",express.static("files"));

mongoose
  .connect(db, {})
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.log(err);
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const user = new mongoose.model("users", userSchema);

app.post("/signup", async (req, res) => {
  const newuser = new user({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  let result = await newuser.save();
  console.log(result);

  newuser
    .save()
    .then(() => {
      res.send(req.body);
      console.log("Saved successfully");
    })
    .catch((err) => {
      res.json("Error Occured while Saving!!");
      console.log(err);
    });
  result = delete result.password;
});

app.post("/login", async (req, res) => {
  if (req.body.email && req.body.password) {
    let customer = await user.findOne(req.body).select("-password");
    if (customer) {
      res.send(customer);
    } else {
      res.send({ result: "No User Found" });
    }
  } else {
    res.send({ result: "Try Again" });
  }
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

const pdfDetailsSchema = new mongoose.Schema({
  title: String,
  file: String
});
const pdf = new mongoose.model("notes", pdfDetailsSchema);

app.post("/notes", upload.single("file"), async (req, res) => {
  console.log(req.file);
  const newFile = new pdf({
    title : req.body.title,
    file: req.file.filename,
  });

  const result = await newFile.save();
  console.log(result)

  newFile.save()
  .then(()=>{
    console.log("Notes saved succesfully");
  })
  .catch((err)=>{
    res.send("Error Occured")
  });

});

app.get("/notes", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/get-notes", async(req,res)=>{
  try{
    pdf.find({}).then((data)=>{
      res.send({status:"OK", data: data})
      console.log(data);
    })
  }
  catch(err){
    res.send(err)
  }
})

app.listen(port, () => {
  console.log(`server running on ${port}!!`);
});
