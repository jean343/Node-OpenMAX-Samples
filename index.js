var fs = require('fs');
var omx = require('openmax');

var VideoDecode = omx.VideoDecode();
var VideoRender = omx.VideoRender();

VideoDecode.setVideoPortFormat(omx.Video.OMX_VIDEO_CODINGTYPE.OMX_VIDEO_CodingAVC);

fs.createReadStream("video-LQ-1280.h264")
    .pipe(VideoDecode)
    .tunnel(VideoRender);
