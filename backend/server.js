const express = require("express");
const cors  = require("cors");
const mysql = require("mysql")
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"aadhardb"
})

app.post('/otp-form',(req,res) => {
    const sql = "SELECT STATUS FROM METADATA WHERE `AadharNo` = ?";
    db.query(sql,[req.body.value1],(err,data)=> {
        const record = JSON.stringify(data);
        const val = (record.match("yes")) ? 1 : 0;

        if(err){
            console.log("error : "+err);
            return res.json("Error");
        }
        if(val){
            return res.json("yes");
        }
        if(!val){
            return res.json("no");
        }
    })
})

app.post('/Dashboard',(req,res) =>{
    const sql = "UPDATE METADATA SET STATUS='yes' WHERE `AadharNo` = ?";
    db.query(sql, [req.body.value],(err,data)=>{
        if(err){
            console.log("errror : "+ err);
            return res.json("Error");
        }
        if(data.affectedRows > 0){
            console.log(data);
            return res.json("Success");
        }
    })
})

app.post('/login',(req,res) =>{
    const sql = "SELECT role FROM METADATA WHERE `AadharNo` = ?";
    db.query(sql, [req.body.value],(err,data)=>{
        const record = JSON.stringify(data);
        const val = (record.match("admin")) ? 1 : 0;

        if(err){
            console.log(err);
            return res.json("Error");
        }
        if(val){
            return res.json("admin");
        }
        if(data.length>0){
            return res.json("Success");
        }
        else{
            return res.json("Failed");
        }
    })
})

app.listen(8081, ()=>{
    console.log("Listening...");
})
