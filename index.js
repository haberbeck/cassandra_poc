var express = require('express');
var app = express();
const cassandra = require('cassandra-driver');



var options ={
	contactPoints: ['208.68.39.71'],
	authProvider: new cassandra.auth.PlainTextAuthProvider('cassandra','cassandra'),
	keyspace: 'olympictest'
}


//const client = new cassandra.Client({ contactPoints: ['162.243.247.32'], keyspace: 'olympictest'});
const client = new cassandra.Client(options);
client.connect(function(err,result){
	if(err){
		console.log('erro: ' + err);
  	}else{		
  		console.log('Conectado');
	}
});

 
const query = 'SELECT * FROM tweets_by_hour';

client.execute(query, function(err, result) {
  if(err){
  	console.log(err);
  }else{
  	console.log('resultado: ' + result.rows[0].total)
  }


  //assert.ifError(err);
  //console.log('got user profile with email ' + result.rows[0].email);
});




var server = app.listen(3000, function(){
	console.log("servidor rodando.");
})
