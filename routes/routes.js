
const express = require("express");
const router = express.Router();
const validUrl = require("valid-url");
const shortId = require("shortid");
const mongoose = require("mongoose");
const config = require("config");


const urlSchema = require("../models/url");
const Url = mongoose.model("Url",urlSchema)

router.get("/api",(req,res)=>{
 let List = Url.find({},(err,docs)=>{
  if(err){
   console.log(err)
  }else{
   console.log(docs)
   res.send(docs)
  }
 });
 
})

router.post("/shorten",async (req,res)=>{
  // res.send("Post request sent successfully");

  //Get the URL  
  const {longUrl} = req.body;
  const baseUrl = config.get("baseURL")

  // Check if the url is valid
  if(!validUrl.isUri(baseUrl)){
   res.status(401).json("Invalid Url")
  }else{
   console.log("yp")
  }
  console.log(longUrl)

  // Check url code
  const urlCode = shortId.generate();
  console.log(urlCode)

  // Check the long url
  if(validUrl.isUri(longUrl)){
    try{
      let url =  await Url.findOne({longUrl});
      if(url){
       res.json(url);
      }else{
       const shortUrl = baseUrl + "/" + urlCode;

       let url = new Url({
        longUrl,
        shortUrl,
        urlCode,
        date : new Date()
       })

       url.save();

       res.json(url);
      }
    }catch(err){
       if(err){
        console.log(err)
       }
    }
  }else{
   res.status(401).json("url invalid")
  }
  
 })

module.exports = router;