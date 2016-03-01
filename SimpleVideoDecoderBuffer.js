var fs = require('fs');
var omx = require('openmax');

var ws = require('stream').Writable();
ws._write = function (chunk, enc, next) {
  console.log('_write length', chunk.length, chunk);
  next();
};

var VideoDecode = omx.VideoDecode();

VideoDecode.setVideoPortFormat(omx.Video.OMX_VIDEO_CODINGTYPE.OMX_VIDEO_CodingAVC);

fs.createReadStream("video-LQ-1280.h264")
    .pipe(VideoDecode)
    .pipe(ws);