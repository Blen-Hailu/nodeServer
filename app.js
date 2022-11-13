import require from 'express';


const express = require('express');

const app = express();
const PORT = process.env.SERVER_PORT || 8000;

app.use((req, res, next) =>{
  res.setHeader("Access-Controll-Allow-Origin", "*", "https://yoursite.com");
  res.header(
  "Access-Controll-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept"
  );

next();
  }
);

app.get("/api",(req, res)=> {
  res.json("Hello");
});


app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running, and App is listening on port "+ PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);
