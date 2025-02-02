"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchRecommendedShards = exports.shardIdForGuildId = exports.makePlainError = exports.delayFor = exports.chunkArray = exports.generateNonce = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const shared_1 = require("../types/shared");
function generateNonce() {
    return Date.now().toString(36) + Math.random().toString(36);
}
exports.generateNonce = generateNonce;
function chunkArray(array, chunkSize) {
    const R = [];
    for (let i = 0; i < array.length; i += chunkSize)
        R.push(array.slice(i, i + chunkSize));
    return R;
}
exports.chunkArray = chunkArray;
function delayFor(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}
exports.delayFor = delayFor;
function makePlainError(err) {
    return {
        name: err['name'],
        message: err['message'],
        stack: err['stack'],
    };
}
exports.makePlainError = makePlainError;
function shardIdForGuildId(guildId, totalShards = 1) {
    const shard = Number(BigInt(guildId) >> BigInt(22)) % totalShards;
    if (shard < 0)
        throw new Error('SHARD_MISCALCULATION_SHARDID_SMALLER_THAN_0 ' +
            `Calculated Shard: ${shard}, guildId: ${guildId}, totalShards: ${totalShards}`);
    return shard;
}
exports.shardIdForGuildId = shardIdForGuildId;
function fetchRecommendedShards(token, guildsPerShard = 1000) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!token)
            throw new Error('DISCORD_TOKEN_MISSING');
        return (0, node_fetch_1.default)(`${shared_1.DefaultOptions.http.api}/v${shared_1.DefaultOptions.http.version}${shared_1.Endpoints.botGateway}`, {
            method: 'GET',
            headers: { Authorization: `Bot ${token.replace(/^Bot\s*/i, '')}` },
        })
            .then(res => {
            if (res.ok)
                return res.json();
            if (res.status === 401)
                throw new Error('DISCORD_TOKEN_INVALID');
            throw res;
        })
            .then(data => data.shards * (1000 / guildsPerShard));
    });
}
exports.fetchRecommendedShards = fetchRecommendedShards;
