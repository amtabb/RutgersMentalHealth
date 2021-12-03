const express=require("express");

var bodyParser = require('body-parser')
const app=express();
const mysql=require("mysql");

const connection = mysql.createPool({
    host:"us-cdbr-east-04.cleardb.com", 
    user:"b67965676b9bc1",
    password:"fef70fef",
    database:"heroku_f7b0b0e3718ae7b",
});
var cors = require('cors')
app.use(cors());

app.use(bodyParser.json());
// connecting to db
connection.getConnection((err,data)=>{
    if (err){
    console.log(err);
    }
    if(data){
        console.log("sucessfully connected to the database");
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
app.post("/insertinspirationposts",(req,res)=>{

    //const varpostid = req.body.postid
    //const varpost = req.body.post
    //const varusertype = req.body.usertype
    //const vardate = req.body.date
    console.log(req.body.inspirationpost);
    // postid should not be passed; DB can auto generate; same for date
    let post = {postid: 25, post: req.body.inspirationpost, usertype: "anonymous", date: (new Date()).toISOString()}
    let sql = 'Insert into inspirationposts Set ?'
    let query = connection.query(sql,post,err => {
        if(err){
           res.send("there are some error"); 
        
          }
          res.send("inspiration post added"); 
         
    })
    
   //const sqlinsert = "Insert into inspirationposts (postid, post, date, usertype) VALUES (?,?,getdate(),'anonymous')";
   //connection.query(sqlinsert,[varpostid,varpost],(err,result) => {});
});