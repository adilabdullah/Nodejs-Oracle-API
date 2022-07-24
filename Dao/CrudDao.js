var http=require('http')
var conn=require('../Connection/OracleConnection');
var express = require('express');
var oracledb=require('oracledb');


// Function to insert data
function InsertData(sno,fname,lname,age,cnic,cell,country,salary){
 conn.oracledb.getConnection(conn.oracleConn,
  function(err, connection)
  {
   if(err)
   	{throw err;}

 var sql="insert into saeed.nodejs"+
"(SNO,F_NAME,L_NAME,DOB,AGE,CNIC,CELL,COUNTRY,SALARY,INSERT_DATE,UPDATE_DATE) values"+
"("+sno+",'"+fname+"','"+lname+"','07/11/2005',"+age+",'"+cnic+"','"+cell+"','"+country+"',"+salary+",null,null)";

    connection.execute(sql,
      [],{autoCommit:true},function (err, result){
         if (err) { 
      //   loger.PrintLog(err);
        //  console.log(err);
          return err.message;
        }

        else { console.log(result); 
        //loger.PrintLog(result);
       //  console.log(result);
           return "S";
        }
      });
  });
}



// Function to get all data
function SelectData(){
 conn.oracledb.getConnection(conn.oracleConn,
  function(err, connection)
  {
   if(err)
   	{throw err;}

 var sql="select * from saeed.nodejs";

    connection.execute(sql,
      [],{autoCommit:true},function (err, result){
         if (err) { 
      //   loger.PrintLog(err);
       //   console.log(err);
          return 0;
        }

        else { 
        //	result.rows.forEach( (row) => {
  		//	console.log('${row.F_NAME}  ${row.L_NAME}  ${row.DOB}  ${row.AGE}  ${row.CNIC}  ${row.CELL}');
		  
		//  });
         //   console.log(result.rows[0][2]);
        //  console.log(result);
          return result.toString();
        }
      });
  });
}



// Function to get specific data against serial no sno
function SelectSpecific(sno){
 conn.oracledb.getConnection(conn.oracleConn,
  function(err, connection)
  {
   if(err)
   	{throw err;}

 var sql="select * from saeed.nodejs where sno="+sno;

    connection.execute(sql,
      [],{autoCommit:true},function (err, result){
         if (err) { 
      //   loger.PrintLog(err);
        //  console.log(err);
           return 0;
        }

        else { 
        //loger.PrintLog(result);
        console.log(JSON.stringify(result));
          return result;
        }
      });
  });
}


// Function to delete data against serial no sno
function DeleteData(sno){
 conn.oracledb.getConnection(conn.oracleConn,
  function(err, connection)
  {
   if(err)
   	{throw err;}

 var sql="delete from saeed.nodejs where sno="+sno;

    connection.execute(sql,
      [],{autoCommit:true},function (err, result){
         if (err) { 
      //   loger.PrintLog(err);
       //   console.log(err);
           return err.message;
        }

        else { 
        //loger.PrintLog(result);
        // console.log(result);
          return 1;
        }
      });
  });
}


// Function to update data against serial no sno
function UpdateData(sno,fname,lname,age,cnic,cell,country,salary){
 conn.oracledb.getConnection(conn.oracleConn,
  function(err, connection)
  {
   if(err)
   	{throw err;}

// var sql="insert into saeed.nodejs"+
//"(SNO,F_NAME,L_NAME,DOB,AGE,CNIC,CELL,COUNTRY,SALARY,INSERT_DATE,UPDATE_DATE) values"+
//"("+sno+",'"+fname+"','"+lname+"','07/11/2005',"+age+",'"+cnic+"','"+cell+"','"+country+"',"+salary+",null,null)";
var sql="UPDATE saeed.nodejs SET F_NAME='"+fname+"'"+
",L_NAME='"+lname+"'"+
",AGE="+age+
",CNIC='"+cnic+"'"+
",CELL='"+cell+"'"+
",COUNTRY='"+country+"'"+
",SALARY="+salary+" WHERE SNO="+sno;
    connection.execute(sql,
      [],{autoCommit:true},function (err, result){
         if (err) { 
      //   loger.PrintLog(err);
       //   console.log(err);
           return err.message;
        }

        else { console.log(result); 
        //loger.PrintLog(result);
       //  console.log(result);
          return 1
        }
      });
  });
}


module.exports={InsertData,SelectData,SelectSpecific,DeleteData,UpdateData};