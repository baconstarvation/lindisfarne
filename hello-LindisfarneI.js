var http = require('http');
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Kestrels Breed,\nLooking further than I can see\nWithout tact to read,\nShe\'d take a shine to me\nBeacon don\'t fly too high\nBeacon don\'t fly too high\n\nFor all your time,\nPlayful crime in rain\nWorth it being cold,\nRoofing for the lanes\nA lesson lost again\nA lesson lost again\n\nCute but I\'ll take the bus,\nWith fees and favours gone\nCracks in savers pass,\nAnd a white that sometimes shone\nWanton borrowed gun\nWanton borrowed gun\n\nKestrels breed,\nLooking further than I can see\nWithout tact to read,\nShe\'d take a shine to me\nBeacon don\'t fly too high\nBeacon don\'t fly too high\n');
			
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337');