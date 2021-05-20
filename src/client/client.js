'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const hello_pb_1 = require("../../gen/hello_pb");
const hello_grpc_pb_1 = require("../../gen/hello_grpc_pb");
const grpc_js_1 = require("@grpc/grpc-js");
const serverUri = `localhost:${process.env.PORT || 9000}`;
const sayName = (name) => {
    const request = new hello_pb_1.NameRequest();
    request.setName(name);
    const client = new hello_grpc_pb_1.GreeterClient(serverUri, grpc_js_1.credentials.createInsecure());
    client.sayName(request, (err, res) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        const obj = res.toObject();
        console.log(obj);
    });
};
sayName(process.argv[2]);
