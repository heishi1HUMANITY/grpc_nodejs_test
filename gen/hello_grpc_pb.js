// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var hello_pb = require('./hello_pb.js');

function serialize_NameReply(arg) {
  if (!(arg instanceof hello_pb.NameReply)) {
    throw new Error('Expected argument of type NameReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NameReply(buffer_arg) {
  return hello_pb.NameReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_NameRequest(arg) {
  if (!(arg instanceof hello_pb.NameRequest)) {
    throw new Error('Expected argument of type NameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NameRequest(buffer_arg) {
  return hello_pb.NameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var GreeterService = exports.GreeterService = {
  sayName: {
    path: '/Greeter/SayName',
    requestStream: false,
    responseStream: false,
    requestType: hello_pb.NameRequest,
    responseType: hello_pb.NameReply,
    requestSerialize: serialize_NameRequest,
    requestDeserialize: deserialize_NameRequest,
    responseSerialize: serialize_NameReply,
    responseDeserialize: deserialize_NameReply,
  },
};

exports.GreeterClient = grpc.makeGenericClientConstructor(GreeterService);
