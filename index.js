const express = require("express");
const ejsMate = require("ejs-mate")
const methodOverride=require("method-override");
const path = require("path")
const app = express();
const mongoose = require("mongoose");
const port = 8080;
app.engine("ejs",ejsMate)
const Listing = require("./models/listing.js")
app.use(express.urlencoded({extended : true}))
app.set("view engine", "ejs")
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"/public")));
// getting-started.js
app.use(methodOverride('_method'))
main().then((res)=>{
    console.log(res)
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/dreamstay');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
app.get("/listings" , async (req,res)=>{
    let allListing= await Listing.find({})
        res.render("./listings/index.ejs", {allListing});
})
//new listing
app.get("/listings/new" ,(req,res)=>{
    res.render("listings/new.ejs")
})
app.post("/listings/new",async (req,res)=>{
    let {title,description,image,price,location,country} = req.body;
    const data = [
  {
    title: title,
    description:
      description,
    image: {
      filename: "listingimage",
      url: image,
    },
    price: price,
    location: location,
    country: country,
  }]
  let savedata = await Listing.insertOne(data[0]);
   await  savedata.save();
  res.redirect("/listings");
})
//search
app.get("/listings/:id" , async(req,res)=>{
    let {id} = req.params;
    try{
    let listing = await Listing.findById(id);
    res.render("./listings/show.ejs",{listing});
    }catch(err){
        console.log(err)
    }

})


//update
app.get("/listings/:id/edit", async (req,res)=>{
  let {id} = req.params;
     try{
    let listing = await Listing.findById(id);
    res.render("./listings/update.ejs",{listing});
    }catch(err){
        console.log(err)
    }
})
app.patch("/listings/:id/edit", async (req,res)=>{
    let {id} = req.params;
    let {title,description,image,price,location,country} = req.body;
    const data = [
  {
    title: title,
    description:
      description,
    image: {
      filename: "listingimage",
      url: image,
    },
    price: price,
    location: location,
    country: country,
  }]
  try{
  await Listing.findByIdAndUpdate(id , data[0] );
  res.redirect(`/listings/${id}`)
  }catch(err){
    console.log(err);
  }

})
app.delete("/listings/:id" , async (req,res)=>{
  let {id} = req.params;
  try{
  await Listing.findByIdAndDelete(id);
  res.redirect("/listings");
  }catch(err){
    console.log(err);
  }

})
app.get("/about",(req,res)=>{
  res.render("./About/about.ejs");
})
app.listen(port,(req,res)=>{
    console.log("listening to port  : ",port);
})