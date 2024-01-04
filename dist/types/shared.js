"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageType = exports.Endpoints = exports.DefaultOptions = exports.generateNonce = void 0;
function generateNonce() {
    return Date.now().toString(36) + Math.random().toString(36);
}
exports.generateNonce = generateNonce;
exports.DefaultOptions = {
    http: {
        api: 'https://discord.com/api',
        version: '10',
    },
};
exports.Endpoints = {
    botGateway: '/gateway/bot',
};
var messageType;
(function (messageType) {
    messageType[messageType["CUSTOM_REQUEST"] = 0] = "CUSTOM_REQUEST";
    messageType[messageType["CUSTOM_MESSAGE"] = 1] = "CUSTOM_MESSAGE";
    messageType[messageType["CUSTOM_REPLY"] = 2] = "CUSTOM_REPLY";
    messageType[messageType["HEARTBEAT"] = 3] = "HEARTBEAT";
    messageType[messageType["HEARTBEAT_ACK"] = 4] = "HEARTBEAT_ACK";
    messageType[messageType["CLIENT_BROADCAST_REQUEST"] = 5] = "CLIENT_BROADCAST_REQUEST";
    messageType[messageType["CLIENT_BROADCAST_RESPONSE"] = 6] = "CLIENT_BROADCAST_RESPONSE";
    messageType[messageType["SHARDLIST_DATA_REQUEST"] = 21] = "SHARDLIST_DATA_REQUEST";
    messageType[messageType["SHARDLIST_DATA_UPDATE"] = 22] = "SHARDLIST_DATA_UPDATE";
    messageType[messageType["CLIENT_SHARDLIST_DATA_CURRENT"] = 23] = "CLIENT_SHARDLIST_DATA_CURRENT";
    messageType[messageType["SERVER_BROADCAST_REQUEST"] = 24] = "SERVER_BROADCAST_REQUEST";
    messageType[messageType["SERVER_BROADCAST_RESPONSE"] = 25] = "SERVER_BROADCAST_RESPONSE";
    messageType[messageType["GUILD_DATA_REQUEST"] = 26] = "GUILD_DATA_REQUEST";
    messageType[messageType["GUILD_DATA_RESPONSE"] = 27] = "GUILD_DATA_RESPONSE";
    messageType[messageType["GUILD_EVAL_REQUEST"] = 28] = "GUILD_EVAL_REQUEST";
    messageType[messageType["GUILD_EVAL_RESPONSE"] = 29] = "GUILD_EVAL_RESPONSE";
    messageType[messageType["CLIENT_DATA_REQUEST"] = 30] = "CLIENT_DATA_REQUEST";
    messageType[messageType["CLIENT_DATA_RESPONSE"] = 31] = "CLIENT_DATA_RESPONSE";
    messageType[messageType["SERVER_CACHE_SET_REQUEST"] = 32] = "SERVER_CACHE_SET_REQUEST";
    messageType[messageType["SERVER_CACHE_SET_RESPONSE"] = 33] = "SERVER_CACHE_SET_RESPONSE";
    messageType[messageType["SERVER_CACHE_GET_REQUEST"] = 34] = "SERVER_CACHE_GET_REQUEST";
    messageType[messageType["SERVER_CACHE_GET_RESPONSE"] = 35] = "SERVER_CACHE_GET_RESPONSE";
    messageType[messageType["SERVER_CACHE_DELETE_REQUEST"] = 36] = "SERVER_CACHE_DELETE_REQUEST";
    messageType[messageType["SERVER_CACHE_DELETE_RESPONSE"] = 37] = "SERVER_CACHE_DELETE_RESPONSE";
    messageType[messageType["SERVER_CACHE_CLEAR_REQUEST"] = 38] = "SERVER_CACHE_CLEAR_REQUEST";
    messageType[messageType["SERVER_CACHE_CLEAR_RESPONSE"] = 39] = "SERVER_CACHE_CLEAR_RESPONSE";
})(messageType || (exports.messageType = messageType = {}));
