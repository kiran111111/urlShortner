// if(process.env.NODE_ENV !== 'production'){
 require('dotenv').config()
// }

const express = require("express");
const app = express();
const connectDB = require("./config/db")
const router = require("./routes/routes");
const bodyParser = require("body-parser")

// Connect to database
connectDB();

app.use(express.json({extended:true}));

app.use(express.static('source'))

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

const PORT  = process.env.PORT || 5000;

app.use("/uri",router)


app.listen(PORT,()=>{
 console.log(`Server runnig on port ${PORT}`)
})

