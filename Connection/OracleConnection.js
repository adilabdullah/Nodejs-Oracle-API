var http=require('http')
var oracledb=require('oracledb')

/*var con=oracledb.createConnection({
   host:'localhost',
   user:'alhamd',
   password:'adil12345',
   database:'XE'
  });  */

var oracleConn={
      user: "alhamd",
      password: "adil12345",
      connectString: "(DESCRIPTION ="+
    "(ADDRESS = (PROTOCOL = TCP)(HOST = hp)(PORT = 1521))"+
    "(CONNECT_DATA ="+
      "(SERVER = DEDICATED)"+
      "(SERVICE_NAME = XE)))"
};



var conn=oracledb.getConnection(oracleConn,(function(error){
	if(error)
	{
	 throw error;	
	} 

}));
 
module.exports={oracledb,oracleConn}


