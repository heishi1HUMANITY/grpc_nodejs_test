#!/usr/bin/env node

'use strict';

import { sendUnaryData, Server, ServerCredentials, ServerUnaryCall } from '@grpc/grpc-js';
import { GreeterService } from '../../gen/hello_grpc_pb';
import { NameReply, NameRequest } from '../../gen/hello_pb';

const sayName = (call: ServerUnaryCall<NameRequest, NameReply>, callback: sendUnaryData<NameReply>): void => {
  const greeter: NameReply = new NameReply();
  const name: string = call.request.getName();

  greeter.setMessage(`Hello ${name}.`);
  callback(null, greeter);
}

const server: Server = new Server();
server.addService(GreeterService, { sayName });
server.bindAsync(`localhost:${process.env.PORT || '9000'}`, ServerCredentials.createInsecure(), (err, port) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  server.start();
  console.log(`server is listening on port ${process.env.PORT || 9000}`);

});
