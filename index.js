const express = require("express");
const ejsMate = require("ejs-mate")
const methodOverride=require("method-override");
const wrapAsync = require("./utils/wrapAsync.js")
const Expresserror = require("./utils/ExpressErrors.js")
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

app.get("/listings" , wrapAsync(async (req,res)=>{
    let h1 = "Explore All"
    let allListing= await Listing.find({})
        res.render("./listings/index.ejs", {allListing,h1});
}));
  app.get("/listings/apartments" , wrapAsync(async (req,res)=>{
    let h1 = "All Apartments"
    let category = "Apartment"
    let allListing= await Listing.find({category})
        res.render("./listings/index.ejs", {allListing,h1});
}));
  app.get("/listings/villas" , wrapAsync(async (req,res)=>{
     let h1 = "All Villas"
    let category = "Villa"
    let allListing= await Listing.find({category})
        res.render("./listings/index.ejs", {allListing,h1});
}));
 app.get("/listings/hotels" , wrapAsync(async (req,res)=>{
   let h1 = "All Hotels"
    let category = "Hotel"
    let allListing= await Listing.find({category})
        res.render("./listings/index.ejs", {allListing,h1});
}));
 app.get("/listings/cabins" , wrapAsync(async (req,res)=>{
   let h1 = "All Cabins"
    let category = "Cabin"
    let allListing= await Listing.find({category})
        res.render("./listings/index.ejs", {allListing,h1});
}));
 app.get("/listings/dormitories" , wrapAsync(async (req,res)=>{
   let h1 = "All Dormitories"
    let category = "Dormitory"
    let allListing= await Listing.find({category})
        res.render("./listings/index.ejs", {allListing,h1});
}));

 
//new listing
app.get("/listings/new" ,(req,res)=>{
    res.render("listings/new.ejs")
})
app.post("/listings/new",wrapAsync(async (req,res , next)=>{
    let {title,description,image,price,category,location,country} = req.body;
    if(price<=0){
     throw new Expresserror(400,"Negetive pricing not allowed");
    }
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
    category:category,
    location: location,
    country: country,
  }]
  let savedata = await Listing.insertOne(data[0]);
   await  savedata.save();
  res.redirect("/listings");
}));
//search
app.get("/listings/:id" , wrapAsync(async(req,res)=>{
    let {id} = req.params;
    try{
    let listing = await Listing.findById(id);
    res.render("./listings/show.ejs",{listing});
    }catch(err){
        console.log(err)
    }

}));


//update
app.get("/listings/:id/edit", wrapAsync(async (req,res)=>{
  let {id} = req.params;
     try{
    let listing = await Listing.findById(id);
    res.render("./listings/update.ejs",{listing});
    }catch(err){
        console.log(err)
    }
}));
app.patch("/listings/:id/edit", wrapAsync(async (req,res , next)=>{
    let {id} = req.params;
    let {title,description,image,price,location,country} = req.body;
    if(price<=0){
    throw new Expresserror(400,"Negetive pricing not allowed")
    }
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

}));
app.delete("/listings/:id" , wrapAsync(async (req,res)=>{
  let {id} = req.params;
  try{
  await Listing.findByIdAndDelete(id);
  res.redirect("/listings");
  }catch(err){
    console.log(err);
  }

}));
app.get("/about",(req,res)=>{
  res.render("./About/about.ejs");
})
app.all("/*splat",(req,res,next)=>{
  next(new Expresserror(404,"Page not found"))
})
app.use((err,req,res,next)=>{
  let {statusCode=500,message="Something went wrong"}=err;
  res.render("./Errors/error.ejs",{statusCode,message})

})
app.listen(port,(req,res)=>{
    console.log("listening to port  : ",port);
})