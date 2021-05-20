#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const grpc_js_1 = require("@grpc/grpc-js");
const hello_grpc_pb_1 = require("../../gen/hello_grpc_pb");
const hello_pb_1 = require("../../gen/hello_pb");
const sayName = (call, callback) => {
    const greeter = new hello_pb_1.NameReply();
    const name = call.request.getName();
    greeter.setMessage(`Hello ${name}.`);
    callback(null, greeter);
};
const server = new grpc_js_1.Server();
server.addService(hello_grpc_pb_1.GreeterService, { sayName });
server.bindAsync(`localhost:${process.env.PORT || '9000'}`, grpc_js_1.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    server.start();
    console.log(`server is listening on port ${process.env.PORT || 9000}`);
});
