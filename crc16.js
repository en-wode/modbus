/** Created by wanan on 2019-02-16
 *作者:wanan
 */
function crcCheck(msg, len) {
    var crc = Number(0);
    var current = Number(0);
    for (var i = 0; i < len; i++) {
        current = (msg[i] & 0x000000FF) << 8;
        for (var j = 0; j < 8; j++) {
            if ((crc ^ current) & 0x8000) {
                crc = (crc << 1) ^ 0x1021;
            }
            else {
                crc <<= 1;
            }
            crc &= 0x0000FFFF;
            current <<= 1;
        }
    }
    return crc;
};

// var buf = new Buffer([0xEA, 0xAE, 0x01, 0x02,0x59,0xAE]);
var buf = new Buffer.from([01, 03, 00, 01,00, 03]);

// var buf = new Buffer([0x01, 0x06, 0x00, 0x01,0x00,0x03]);
var crc16 = crcCheck(buf, buf.length);
console.log(crc16.toString(16));
console.log(buf.length);
// console.log("crc16[%j]=%j",buf.length,crc16.toString(16) );
