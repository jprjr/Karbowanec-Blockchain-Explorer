var api = window.location.protocol + '//' + window.location.hostname;
if(window.location.port !== undefined || window.location.port.length > 0) {
    api += ':' + window.location.port;
}
var blockTargetInterval = 240;
var coinUnits = 10;
var symbol = 'TRTL';
var refreshDelay = 30000;
// pools stats by MainCoins
var networkStat = {
    "trtl": [
		["turtlepool.space", "http://eu.turtlepool.space:8117"],
    ]
};

