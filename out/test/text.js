"use strict";
var $__traceur_64_0_46_0_46_8__,
    $__quiver_45_stream_45_channel__,
    $___46__46__47_lib_47_stream_45_util__;
($__traceur_64_0_46_0_46_8__ = require("traceur"), $__traceur_64_0_46_0_46_8__ && $__traceur_64_0_46_0_46_8__.__esModule && $__traceur_64_0_46_0_46_8__ || {default: $__traceur_64_0_46_0_46_8__});
var createChannel = ($__quiver_45_stream_45_channel__ = require("quiver-stream-channel"), $__quiver_45_stream_45_channel__ && $__quiver_45_stream_45_channel__.__esModule && $__quiver_45_stream_45_channel__ || {default: $__quiver_45_stream_45_channel__}).createChannel;
var streamToText = ($___46__46__47_lib_47_stream_45_util__ = require("../lib/stream-util"), $___46__46__47_lib_47_stream_45_util__ && $___46__46__47_lib_47_stream_45_util__.__esModule && $___46__46__47_lib_47_stream_45_util__ || {default: $___46__46__47_lib_47_stream_45_util__}).streamToText;
let chai = require('chai');
let should = chai.should();
let testString = '世界你好';
let testBuffer = new Buffer(testString);
let buffer1 = testBuffer.slice(0, 5);
let buffer2 = testBuffer.slice(5, 10);
let buffer3 = testBuffer.slice(10, 12);
describe('unicode text test', function() {
  it('buffer to string then concat should not equal original', (function() {
    let result = '' + buffer1 + '' + buffer2 + '' + buffer3;
    result.should.not.equal(testString);
  }));
  it('buffer concat then to string should equal original', (function() {
    let buffer = Buffer.concat([buffer1, buffer2, buffer3]);
    let result = '' + buffer;
    result.should.equal(testString);
  }));
  it('stream to text should equal original', (function() {
    let $__2 = createChannel(),
        readStream = $__2.readStream,
        writeStream = $__2.writeStream;
    writeStream.write(buffer1);
    writeStream.write(buffer2);
    writeStream.write(buffer3);
    writeStream.closeWrite();
    return streamToText(readStream).then((function(text) {
      return text.should.equal(testString);
    }));
  }));
});