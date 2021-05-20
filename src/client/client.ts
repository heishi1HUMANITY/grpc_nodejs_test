'use strict';

import { NameReply, NameRequest } from '../../gen/hello_pb';
import { GreeterClient } from '../../gen/hello_grpc_pb';
import { credentials } from '@grpc/grpc-js';

const serverUri = `localhost:${process.env.PORT || 9000}`;

const sayName = (name: string): void => {
  const request: NameRequest = new NameRequest();
  request.setName(name);
  const client: GreeterClient = new GreeterClient(
    serverUri,
    credentials.createInsecure()
  );
  client.sayName(request, (err, res: NameReply): void => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    const obj = res.toObject();
    console.log(obj);
  })
}


sayName(process.argv[2]);
