var net = require('net');
var color = require('colors');

console.log(color.red('Licensed under GPLv3 by DutchCodeGeeks'));
console.log(color.green('GeekServer ')+color.white('is starting up.'));

var port = 25565;

var server = net.createServer(function(c) {
});
server.listen(port, function() {
  console.log(color.green('server bound to port: ') + port);
});