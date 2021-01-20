const express= require("express");
const mongoose = require("mongoose")
const bodyparser= require('body-parser')
const cors= require("cors")

const app = express();
app.use(bodyparser.json());
app.use(cors());

app.use("/posts", require("./routers/post"))

mongoose.connect("mongodb+srv://shirisha:Shirisha123@cluster0.0xvih.mongodb.net/mern-crud?retryWrites=true&w=majority",{
    useNewUrlParser: true, useUnifiedTopology: true
})





app.listen(8000);