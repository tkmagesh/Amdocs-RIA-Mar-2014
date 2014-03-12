var nws = require('nodejs-websocket');
var server = nws.createServer(function(conn){
	console.log("a new connection is established");
	conn.on("text",function(msg){
		for(var i=0;i<server.connections.length;i++){
			server.connections[i].sendText(msg);
		}
	});	
	
}).listen(9090);
console.log("Socket server is listening on port 9090...");