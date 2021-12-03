const express=require("express");
const app=express();
const mysql=require("mysql");
const connection = mysql.createPool({
    host:"us-cdbr-east-04.cleardb.com", 
    user:"b67965676b9bc1",
    password:"fef70fef",
    database:"heroku_f7b0b0e3718ae7b",
});
var cors = require('cors')
app.use(cors()) 
// connecting to db
connection.getConnection((err,data)=>{
    if (err){
    console.log(err);
    }
    if(data){
        console.log("sucessfully corrected to the database");
    }
});
app.listen(3001,()=>{
    console.log("server is started");
});
// displaying inspirationposts
app.get("/inspirationposts",(req,res)=>{
    connection.query("select * from inspirationposts",(err,rows,feilds)=>{
        if(err){
           res.send("there are some error"); 
        return;
          }
          res.status(200).json(rows);
    })
    
});
//insert into inspirationposts
app.get("/insertinspirationposts",(req,res)=>{
    
    let post = {post: req.query.post, usertype: "anonymous", date: (new Date()).toISOString()}
    let sql = 'Insert into inspirationposts Set ?'
    let query = connection.query(sql,post,err => {
        if(err){
           res.send("there are some error"); 
        
          }
          res.send("inspiration post added"); 
         
    })
   
});
// displaying mainposts
app.get("/mainposts",(req,res)=>{
    connection.query("select * from mainposts",(err,rows,feilds)=>{
        if(err){
           res.send("there are some error");
        return;
          }
          res.status(200).json(rows);
    })
   
 });
  
 //insert into mainposts
  
 app.get("/insertmainposts",(req,res)=>{
   
    let post = {post: req.query.post, usertype: "anonymous", date: (new Date()).toISOString()}
    let sql = 'Insert into mainposts Set ?'
    let query = connection.query(sql,post,err => {
        if(err){
           res.send("there are some error");
       
          }
          res.send("mainposts post added");
        
    })
  
 });
  
 
app.get("/events",(req,res)=>{
    connection.query("select * from events",(err,rows,feilds)=>{
        if(err){
           res.send("there are some error"); 
        return;
          }
          res.status(200).json(rows);
    })

})
