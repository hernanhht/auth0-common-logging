var EventLogger = require('./eventlogger');
var HttpWritableStream = require('./streams/HttpWritableStream');
var serializers = require('./serializers');

module.exports = {
  EventLogger: EventLogger,
  Streams: {
    HttpWritableStream: HttpWritableStream
  },
  Serializers: serializers,
  ProcessInfo: require('./lib/process_info')
};