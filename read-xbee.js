var util = require('util');
var SerialPort = require('serialport').SerialPort;
var xbee_api = require('xbee-api');
var C = xbee_api.constants;
var dataText = "";
var xbeeAPI = new xbee_api.XBeeAPI({
    api_mode: 1
});
var serialport = new SerialPort("/dev/ttyUSB0", {
    baudrate: 9600,
    parser: xbeeAPI.rawParser()
});

// All frames parsed by the XBee will be emitted here
xbeeAPI.on("frame_object", function (frame) {
    console.log(">>", frame.data.toString('ascii'));
});
