import { RawMessage } from '../Structures/IPCMessage';
import { CrossHostMessage, evalOptions } from '../types/shared';
export declare class Shard {
    shard: any;
    constructor(shard: any);
    broadcastEval(script: string, options?: evalOptions & {
        script?: string;
    }): Promise<any>;
    send(message: RawMessage, options?: CrossHostMessage): Promise<any>;
    request(message: RawMessage, options?: CrossHostMessage): Promise<any>;
    requestToGuild(message: RawMessage & {
        guildId: string;
    }, options?: evalOptions): Promise<any>;
    requestToClient(message: RawMessage & {
        clientId: string;
    }, options?: evalOptions): Promise<any>;
}
//# sourceMappingURL=Shard.d.ts.map