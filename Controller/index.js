// importing the dependencies
var comon = require('../Common/CommonFunc');
var crud = require('../Dao/CrudDao');

var url = require('url');
var http=require('http');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();


// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

//var response={code:100,description:};

// to insert record
app.post('/Insert', (req, res) => {
  try{
  var data={father:req.body.father};
    if(comon.validateReq(req.originalUrl,req.method,req.headers['content-type'])==1)
    {
   	 req.header('Content-Type','application/json');
     if(crud.InsertData(req.body.sno,
     	req.body.fname,
     	req.body.lname,
     	req.body.age,
     	req.body.cnic,
     	req.body.cell,
     	req.body.country,
     	req.body.salary)=="S")
     {
     	res.send(JSON.stringify({code:100,description:'SUCCESS'}));
     }
 	 else
 	 {
 	 	res.send(JSON.stringify({code:95,description:'FAILED'}));
 	 }
      //res.send(JSON.stringify(data));
    }
	else
	{
     res.send(JSON.stringify({error:comon.validateReq(req.originalUrl,req.method,req.headers['content-type'])}));
	}  
  //  res.send(req.protocol+"+"+req.get("host")+"+"+req.originalUrl);
  }
catch(err)
{
	 var data={error:err.message};
	 res.send(JSON.stringify(data));
}    
//   res.send(common.validateReq("Insert",req.method,req.headers.content-type));
});


// to update specific record against serial no
app.put('/Update', (req, res) => {
  try{
  var data={father:req.body.father};
    if(comon.validateReq(req.originalUrl,req.method,req.headers['content-type'])==1)
    {
   	 req.header('Content-Type','application/json');
     if(crud.UpdateData(req.body.sno,
     	req.body.fname,
     	req.body.lname,
     	req.body.age,
     	req.body.cnic,
     	req.body.cell,
     	req.body.country,
     	req.body.salary)==1)
     {
     	res.send(JSON.stringify({code:100,description:'SUCCESS'}));
     }
 	 else
 	 {
 	 	res.send(JSON.stringify({code:95,description:'FAILED'}));
 	 }
    }
	else
	{
     res.send(JSON.stringify({error:comon.validateReq(req.originalUrl,req.method,req.headers['content-type'])}));
	}  
  //  res.send(req.protocol+"+"+req.get("host")+"+"+req.originalUrl);
  }
catch(err)
{
	 var data={error:err.message};
	 res.send(JSON.stringify(data));
}    
//   res.send(common.validateReq("Insert",req.method,req.headers.content-type));
});


// to delete record against serial no
app.delete('/Delete', (req, res) => {
  try{
  var data={father:req.body.father};
    console.log(req.originalUrl.substr(0,req.originalUrl.indexOf('?')));
    if(comon.validateReq(req.originalUrl.substr(0,req.originalUrl.indexOf('?')),req.method,req.headers['content-type'])==1)
    {
   	 req.header('Content-Type','application/json');
     if(crud.DeleteData(req.query.sno)==1)
     {
     	res.send(JSON.stringify({code:100,description:'SUCCESS'}));
     }
 	 else
 	 {
 	 	res.send(JSON.stringify({code:95,description:'FAILED'}));
 	 }
    }
	else
	{
     res.send(JSON.stringify({error:comon.validateReq(req.originalUrl,req.method,req.headers['content-type'])}));
	}  
  //  res.send(req.protocol+"+"+req.get("host")+"+"+req.originalUrl);
  }
catch(err)
{
	 var data={error:err.message};
	 res.send(JSON.stringify(data));
}    
//   res.send(common.validateReq("Insert",req.method,req.headers.content-type));
});


// to get all records
app.get('/All', (req, res) => {
  try{
  var data={father:req.body.father};
    if(comon.validateReq(req.originalUrl,req.method,req.headers['content-type'])==1)
    {
   	 req.header('Content-Type','application/json');
     if(crud.SelectData()==0)
     {
 	 	res.send(JSON.stringify({code:95,description:'FAILED'}));
     }
 	 else
 	 {
 	 	res.send(JSON.stringify(crud.SelectData()));

 	 }
    }
	else
	{
     res.send(JSON.stringify({error:comon.validateReq(req.originalUrl,req.method,req.headers['content-type'])}));
	}  
  //  res.send(req.protocol+"+"+req.get("host")+"+"+req.originalUrl);
  }
catch(err)
{
	 var data={error:err.message};
	 res.send(JSON.stringify(data));
}    
//   res.send(common.validateReq("Insert",req.method,req.headers.content-type));
});


// to get specific record against serial no
app.get('/Specific', (req, res) => {
  try{
  var data={father:req.body.father};
    if(comon.validateReq(req.originalUrl.substr(0,req.originalUrl.indexOf('?')),req.method,req.headers['content-type'])==1)
    {
   	 req.header('Content-Type','application/json');
      res.setHeader('Content-Type', 'application/json');
     if(crud.SelectSpecific(req.query.sno)==0)
     {
     	res.send(JSON.stringify({code:95,description:'FAILED'}));
     }
 	 else
 	 {
 	 	console.log(crud.SelectSpecific(req.query.sno));
 	 	res.json(JSON.stringify(crud.SelectSpecific(req.query.sno)));
 	 //   res.send(crud.SelectSpecific(req.query.sno));
 	 }
    }
	else
	{
     res.send(JSON.stringify({error:comon.validateReq(req.originalUrl,req.method,req.headers['content-type'])}));
	}  
  //  res.send(req.protocol+"+"+req.get("host")+"+"+req.originalUrl);
  }
catch(err)
{
	 var data={error:err.message};
	 res.send(JSON.stringify(data));
}    
//   res.send(common.validateReq("Insert",req.method,req.headers.content-type));
});
// starting the server
app.listen(3002, () => {
  console.log('listening on port 3001');
});

