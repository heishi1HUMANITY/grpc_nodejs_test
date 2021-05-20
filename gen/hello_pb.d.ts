// package: 
// file: hello.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class NameRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): NameRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NameRequest): NameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NameRequest;
    static deserializeBinaryFromReader(message: NameRequest, reader: jspb.BinaryReader): NameRequest;
}

export namespace NameRequest {
    export type AsObject = {
        name: string,
    }
}

export class NameReply extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): NameReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NameReply.AsObject;
    static toObject(includeInstance: boolean, msg: NameReply): NameReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NameReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NameReply;
    static deserializeBinaryFromReader(message: NameReply, reader: jspb.BinaryReader): NameReply;
}

export namespace NameReply {
    export type AsObject = {
        message: string,
    }
}
