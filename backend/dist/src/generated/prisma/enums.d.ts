export declare const ThreadStatus: {
    readonly unassigned: "unassigned";
    readonly active: "active";
    readonly closed: "closed";
    readonly expired: "expired";
};
export type ThreadStatus = (typeof ThreadStatus)[keyof typeof ThreadStatus];
export declare const MessageSenderType: {
    readonly visitor: "visitor";
    readonly agent: "agent";
    readonly system: "system";
};
export type MessageSenderType = (typeof MessageSenderType)[keyof typeof MessageSenderType];
