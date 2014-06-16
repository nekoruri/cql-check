var cql = require('cql-client');
var nopt = require('nopt');

var options = nopt({"host": String});

if (!options.host) {
	options.host = 'localhost';
}

var client = cql.createClient({
	hosts: [options.host],
	connectTimeout: 1000
});

process.on('uncaughtException', function(err) {
	console.log("0");
	console.log("exception: " + err);
	process.exit(2);
});

client.execute('select peer from system.peers;', function(err, rs) {
	if (err) {
		console.log("0");
		console.log("CQL failed: " + err);
		process.exit(2);
	}
	console.log("1");
	process.exit(0);
});

