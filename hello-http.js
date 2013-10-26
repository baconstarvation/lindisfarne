var sys = require("sys"),
	http = require("http");
	
http.createServer(function(request, response) {
	response.setHeader("200", {"Content-Type": "text/html"});
	response.write("Hello World!");
	response.end();
}).listen(8080);

sys.puts("Server running at http://localhost:8080/");