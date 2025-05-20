import express, { urlencoded } from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie-parser";
import airoutes from "./routes/ai.routes.js";

import bodyParser from "body-parser";
import { GoogleGenAI , Models } from "@google/genai";

import { response } from "express";

import cors from "cors";


const app=express();
app.use(bodyParser.json());
app.use(express.json());

app.use(cors());
app.use(cookie())


mongoose.connect("mongodb+srv://iamsouvikbhowmick:SB9875sb@@cluster0.d1jfxfr.mongodb.net//MultiMaster");
const userschema =mongoose.Schema;
const dataschema=new userschema({
    email:String,
    password:String
});
const collection1 =mongoose.model("student",dataschema);


app.use("/ai",airoutes);

app.post("/signup", (req,res)=>{
    const {email,password}=req.body;
        console.log(password);

        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(password,salt,async(err,hash)=>{
             const newdata=await collection1.create({
                email,
                password:hash
            });
        
    //    const token= jwt.sign({email},"secret");
    //    res.cookie("save password",token);
    //    res.redirect("/login");
       
  res.json({ message: 'User registered successfully' });

    // res.send(`hiii its work`);
    


        });
    });
});

 app.post("/signin", async (req,res)=>{


    try{
        const check=await collection1.findOne({email:req.body.email})
        bcrypt.compare(req.body.password,check.password,(err,result)=>{
            if(result){
                // let token=jwt.sign({email:check.email},"passwordsave");
                // res.cookie("save password",token);
                 res.json({ message: 'User login successfully' });

            }
            else{
    
                res.redirect("/login");
            }
        });
           
    }
    catch{
        res.send("wrong details");
    }

});











export default app;
