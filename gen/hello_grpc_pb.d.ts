// package: 
// file: hello.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as hello_pb from "./hello_pb";

interface IGreeterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayName: IGreeterService_ISayName;
}

interface IGreeterService_ISayName extends grpc.MethodDefinition<hello_pb.NameRequest, hello_pb.NameReply> {
    path: "/Greeter/SayName";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<hello_pb.NameRequest>;
    requestDeserialize: grpc.deserialize<hello_pb.NameRequest>;
    responseSerialize: grpc.serialize<hello_pb.NameReply>;
    responseDeserialize: grpc.deserialize<hello_pb.NameReply>;
}

export const GreeterService: IGreeterService;

export interface IGreeterServer extends grpc.UntypedServiceImplementation {
    sayName: grpc.handleUnaryCall<hello_pb.NameRequest, hello_pb.NameReply>;
}

export interface IGreeterClient {
    sayName(request: hello_pb.NameRequest, callback: (error: grpc.ServiceError | null, response: hello_pb.NameReply) => void): grpc.ClientUnaryCall;
    sayName(request: hello_pb.NameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: hello_pb.NameReply) => void): grpc.ClientUnaryCall;
    sayName(request: hello_pb.NameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hello_pb.NameReply) => void): grpc.ClientUnaryCall;
}

export class GreeterClient extends grpc.Client implements IGreeterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public sayName(request: hello_pb.NameRequest, callback: (error: grpc.ServiceError | null, response: hello_pb.NameReply) => void): grpc.ClientUnaryCall;
    public sayName(request: hello_pb.NameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: hello_pb.NameReply) => void): grpc.ClientUnaryCall;
    public sayName(request: hello_pb.NameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hello_pb.NameReply) => void): grpc.ClientUnaryCall;
}
