"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.7.0
//   protoc               v6.31.1
// source: notification.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notifications = exports.Notification = exports.LikeType = exports.CommentType = exports.FollowType = exports.NotificationType = exports.protobufPackage = void 0;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
exports.protobufPackage = "lupyd.notification";
function createBaseNotificationType() {
    return { follow: undefined, comment: undefined, like: undefined };
}
exports.NotificationType = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.follow !== undefined) {
            exports.FollowType.encode(message.follow, writer.uint32(10).fork()).join();
        }
        if (message.comment !== undefined) {
            exports.CommentType.encode(message.comment, writer.uint32(18).fork()).join();
        }
        if (message.like !== undefined) {
            exports.LikeType.encode(message.like, writer.uint32(26).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNotificationType();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.follow = exports.FollowType.decode(reader, reader.uint32());
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.comment = exports.CommentType.decode(reader, reader.uint32());
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.like = exports.LikeType.decode(reader, reader.uint32());
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            follow: isSet(object.follow) ? exports.FollowType.fromJSON(object.follow) : undefined,
            comment: isSet(object.comment) ? exports.CommentType.fromJSON(object.comment) : undefined,
            like: isSet(object.like) ? exports.LikeType.fromJSON(object.like) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.follow !== undefined) {
            obj.follow = exports.FollowType.toJSON(message.follow);
        }
        if (message.comment !== undefined) {
            obj.comment = exports.CommentType.toJSON(message.comment);
        }
        if (message.like !== undefined) {
            obj.like = exports.LikeType.toJSON(message.like);
        }
        return obj;
    },
    create(base) {
        return exports.NotificationType.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseNotificationType();
        message.follow = (object.follow !== undefined && object.follow !== null)
            ? exports.FollowType.fromPartial(object.follow)
            : undefined;
        message.comment = (object.comment !== undefined && object.comment !== null)
            ? exports.CommentType.fromPartial(object.comment)
            : undefined;
        message.like = (object.like !== undefined && object.like !== null) ? exports.LikeType.fromPartial(object.like) : undefined;
        return message;
    },
};
function createBaseFollowType() {
    return { uname: "" };
}
exports.FollowType = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.uname !== "") {
            writer.uint32(10).string(message.uname);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFollowType();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.uname = reader.string();
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { uname: isSet(object.uname) ? globalThis.String(object.uname) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.uname !== "") {
            obj.uname = message.uname;
        }
        return obj;
    },
    create(base) {
        return exports.FollowType.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseFollowType();
        message.uname = object.uname ?? "";
        return message;
    },
};
function createBaseCommentType() {
    return { postId: "", commentedBy: "" };
}
exports.CommentType = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.postId !== "") {
            writer.uint32(10).string(message.postId);
        }
        if (message.commentedBy !== "") {
            writer.uint32(18).string(message.commentedBy);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommentType();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.postId = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.commentedBy = reader.string();
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            postId: isSet(object.postId) ? globalThis.String(object.postId) : "",
            commentedBy: isSet(object.commentedBy) ? globalThis.String(object.commentedBy) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.postId !== "") {
            obj.postId = message.postId;
        }
        if (message.commentedBy !== "") {
            obj.commentedBy = message.commentedBy;
        }
        return obj;
    },
    create(base) {
        return exports.CommentType.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCommentType();
        message.postId = object.postId ?? "";
        message.commentedBy = object.commentedBy ?? "";
        return message;
    },
};
function createBaseLikeType() {
    return { postId: "", likedBy: "" };
}
exports.LikeType = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.postId !== "") {
            writer.uint32(10).string(message.postId);
        }
        if (message.likedBy !== "") {
            writer.uint32(18).string(message.likedBy);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLikeType();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.postId = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.likedBy = reader.string();
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            postId: isSet(object.postId) ? globalThis.String(object.postId) : "",
            likedBy: isSet(object.likedBy) ? globalThis.String(object.likedBy) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.postId !== "") {
            obj.postId = message.postId;
        }
        if (message.likedBy !== "") {
            obj.likedBy = message.likedBy;
        }
        return obj;
    },
    create(base) {
        return exports.LikeType.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseLikeType();
        message.postId = object.postId ?? "";
        message.likedBy = object.likedBy ?? "";
        return message;
    },
};
function createBaseNotification() {
    return { id: new Uint8Array(0), seen: false, notificationType: undefined };
}
exports.Notification = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id.length !== 0) {
            writer.uint32(10).bytes(message.id);
        }
        if (message.seen !== false) {
            writer.uint32(16).bool(message.seen);
        }
        if (message.notificationType !== undefined) {
            exports.NotificationType.encode(message.notificationType, writer.uint32(26).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNotification();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.bytes();
                    continue;
                }
                case 2: {
                    if (tag !== 16) {
                        break;
                    }
                    message.seen = reader.bool();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.notificationType = exports.NotificationType.decode(reader, reader.uint32());
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(0),
            seen: isSet(object.seen) ? globalThis.Boolean(object.seen) : false,
            notificationType: isSet(object.notificationType) ? exports.NotificationType.fromJSON(object.notificationType) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id.length !== 0) {
            obj.id = base64FromBytes(message.id);
        }
        if (message.seen !== false) {
            obj.seen = message.seen;
        }
        if (message.notificationType !== undefined) {
            obj.notificationType = exports.NotificationType.toJSON(message.notificationType);
        }
        return obj;
    },
    create(base) {
        return exports.Notification.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseNotification();
        message.id = object.id ?? new Uint8Array(0);
        message.seen = object.seen ?? false;
        message.notificationType = (object.notificationType !== undefined && object.notificationType !== null)
            ? exports.NotificationType.fromPartial(object.notificationType)
            : undefined;
        return message;
    },
};
function createBaseNotifications() {
    return { notifications: [] };
}
exports.Notifications = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        for (const v of message.notifications) {
            exports.Notification.encode(v, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNotifications();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.notifications.push(exports.Notification.decode(reader, reader.uint32()));
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            notifications: globalThis.Array.isArray(object?.notifications)
                ? object.notifications.map((e) => exports.Notification.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.notifications?.length) {
            obj.notifications = message.notifications.map((e) => exports.Notification.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.Notifications.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseNotifications();
        message.notifications = object.notifications?.map((e) => exports.Notification.fromPartial(e)) || [];
        return message;
    },
};
function bytesFromBase64(b64) {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
function base64FromBytes(arr) {
    const bin = [];
    arr.forEach((byte) => {
        bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
}
function isSet(value) {
    return value !== null && value !== undefined;
}
