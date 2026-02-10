import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ThreadModel = runtime.Types.Result.DefaultSelection<Prisma.$ThreadPayload>;
export type AggregateThread = {
    _count: ThreadCountAggregateOutputType | null;
    _min: ThreadMinAggregateOutputType | null;
    _max: ThreadMaxAggregateOutputType | null;
};
export type ThreadMinAggregateOutputType = {
    id: string | null;
    chatSpaceId: string | null;
    visitorId: string | null;
    assignedAgentId: string | null;
    status: $Enums.ThreadStatus | null;
    lastActivityAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ThreadMaxAggregateOutputType = {
    id: string | null;
    chatSpaceId: string | null;
    visitorId: string | null;
    assignedAgentId: string | null;
    status: $Enums.ThreadStatus | null;
    lastActivityAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ThreadCountAggregateOutputType = {
    id: number;
    chatSpaceId: number;
    visitorId: number;
    assignedAgentId: number;
    status: number;
    lastActivityAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ThreadMinAggregateInputType = {
    id?: true;
    chatSpaceId?: true;
    visitorId?: true;
    assignedAgentId?: true;
    status?: true;
    lastActivityAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ThreadMaxAggregateInputType = {
    id?: true;
    chatSpaceId?: true;
    visitorId?: true;
    assignedAgentId?: true;
    status?: true;
    lastActivityAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ThreadCountAggregateInputType = {
    id?: true;
    chatSpaceId?: true;
    visitorId?: true;
    assignedAgentId?: true;
    status?: true;
    lastActivityAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ThreadAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ThreadWhereInput;
    orderBy?: Prisma.ThreadOrderByWithRelationInput | Prisma.ThreadOrderByWithRelationInput[];
    cursor?: Prisma.ThreadWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ThreadCountAggregateInputType;
    _min?: ThreadMinAggregateInputType;
    _max?: ThreadMaxAggregateInputType;
};
export type GetThreadAggregateType<T extends ThreadAggregateArgs> = {
    [P in keyof T & keyof AggregateThread]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateThread[P]> : Prisma.GetScalarType<T[P], AggregateThread[P]>;
};
export type ThreadGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ThreadWhereInput;
    orderBy?: Prisma.ThreadOrderByWithAggregationInput | Prisma.ThreadOrderByWithAggregationInput[];
    by: Prisma.ThreadScalarFieldEnum[] | Prisma.ThreadScalarFieldEnum;
    having?: Prisma.ThreadScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ThreadCountAggregateInputType | true;
    _min?: ThreadMinAggregateInputType;
    _max?: ThreadMaxAggregateInputType;
};
export type ThreadGroupByOutputType = {
    id: string;
    chatSpaceId: string;
    visitorId: string;
    assignedAgentId: string | null;
    status: $Enums.ThreadStatus;
    lastActivityAt: Date;
    createdAt: Date;
    updatedAt: Date;
    _count: ThreadCountAggregateOutputType | null;
    _min: ThreadMinAggregateOutputType | null;
    _max: ThreadMaxAggregateOutputType | null;
};
type GetThreadGroupByPayload<T extends ThreadGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ThreadGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ThreadGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ThreadGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ThreadGroupByOutputType[P]>;
}>>;
export type ThreadWhereInput = {
    AND?: Prisma.ThreadWhereInput | Prisma.ThreadWhereInput[];
    OR?: Prisma.ThreadWhereInput[];
    NOT?: Prisma.ThreadWhereInput | Prisma.ThreadWhereInput[];
    id?: Prisma.StringFilter<"Thread"> | string;
    chatSpaceId?: Prisma.StringFilter<"Thread"> | string;
    visitorId?: Prisma.StringFilter<"Thread"> | string;
    assignedAgentId?: Prisma.StringNullableFilter<"Thread"> | string | null;
    status?: Prisma.EnumThreadStatusFilter<"Thread"> | $Enums.ThreadStatus;
    lastActivityAt?: Prisma.DateTimeFilter<"Thread"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Thread"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Thread"> | Date | string;
    chatSpace?: Prisma.XOR<Prisma.ChatSpaceScalarRelationFilter, Prisma.ChatSpaceWhereInput>;
    visitor?: Prisma.XOR<Prisma.VisitorScalarRelationFilter, Prisma.VisitorWhereInput>;
    agent?: Prisma.XOR<Prisma.AgentNullableScalarRelationFilter, Prisma.AgentWhereInput> | null;
    messages?: Prisma.MessageListRelationFilter;
};
export type ThreadOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    chatSpaceId?: Prisma.SortOrder;
    visitorId?: Prisma.SortOrder;
    assignedAgentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    lastActivityAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    chatSpace?: Prisma.ChatSpaceOrderByWithRelationInput;
    visitor?: Prisma.VisitorOrderByWithRelationInput;
    agent?: Prisma.AgentOrderByWithRelationInput;
    messages?: Prisma.MessageOrderByRelationAggregateInput;
};
export type ThreadWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ThreadWhereInput | Prisma.ThreadWhereInput[];
    OR?: Prisma.ThreadWhereInput[];
    NOT?: Prisma.ThreadWhereInput | Prisma.ThreadWhereInput[];
    chatSpaceId?: Prisma.StringFilter<"Thread"> | string;
    visitorId?: Prisma.StringFilter<"Thread"> | string;
    assignedAgentId?: Prisma.StringNullableFilter<"Thread"> | string | null;
    status?: Prisma.EnumThreadStatusFilter<"Thread"> | $Enums.ThreadStatus;
    lastActivityAt?: Prisma.DateTimeFilter<"Thread"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Thread"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Thread"> | Date | string;
    chatSpace?: Prisma.XOR<Prisma.ChatSpaceScalarRelationFilter, Prisma.ChatSpaceWhereInput>;
    visitor?: Prisma.XOR<Prisma.VisitorScalarRelationFilter, Prisma.VisitorWhereInput>;
    agent?: Prisma.XOR<Prisma.AgentNullableScalarRelationFilter, Prisma.AgentWhereInput> | null;
    messages?: Prisma.MessageListRelationFilter;
}, "id">;
export type ThreadOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    chatSpaceId?: Prisma.SortOrder;
    visitorId?: Prisma.SortOrder;
    assignedAgentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    lastActivityAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ThreadCountOrderByAggregateInput;
    _max?: Prisma.ThreadMaxOrderByAggregateInput;
    _min?: Prisma.ThreadMinOrderByAggregateInput;
};
export type ThreadScalarWhereWithAggregatesInput = {
    AND?: Prisma.ThreadScalarWhereWithAggregatesInput | Prisma.ThreadScalarWhereWithAggregatesInput[];
    OR?: Prisma.ThreadScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ThreadScalarWhereWithAggregatesInput | Prisma.ThreadScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Thread"> | string;
    chatSpaceId?: Prisma.StringWithAggregatesFilter<"Thread"> | string;
    visitorId?: Prisma.StringWithAggregatesFilter<"Thread"> | string;
    assignedAgentId?: Prisma.StringNullableWithAggregatesFilter<"Thread"> | string | null;
    status?: Prisma.EnumThreadStatusWithAggregatesFilter<"Thread"> | $Enums.ThreadStatus;
    lastActivityAt?: Prisma.DateTimeWithAggregatesFilter<"Thread"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Thread"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Thread"> | Date | string;
};
export type ThreadCreateInput = {
    id?: string;
    status?: $Enums.ThreadStatus;
    lastActivityAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatSpace: Prisma.ChatSpaceCreateNestedOneWithoutThreadsInput;
    visitor: Prisma.VisitorCreateNestedOneWithoutThreadsInput;
    agent?: Prisma.AgentCreateNestedOneWithoutThreadsInput;
    messages?: Prisma.MessageCreateNestedManyWithoutThreadInput;
};
export type ThreadUncheckedCreateInput = {
    id?: string;
    chatSpaceId: string;
    visitorId: string;
    assignedAgentId?: string | null;
    status?: $Enums.ThreadStatus;
    lastActivityAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutThreadInput;
};
export type ThreadUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumThreadStatusFieldUpdateOperationsInput | $Enums.ThreadStatus;
    lastActivityAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chatSpace?: Prisma.ChatSpaceUpdateOneRequiredWithoutThreadsNestedInput;
    visitor?: Prisma.VisitorUpdateOneRequiredWithoutThreadsNestedInput;
    agent?: Prisma.AgentUpdateOneWithoutThreadsNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutThreadNestedInput;
};
export type ThreadUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    chatSpaceId?: Prisma.StringFieldUpdateOperationsInput | string;
    visitorId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAgentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumThreadStatusFieldUpdateOperationsInput | $Enums.ThreadStatus;
    lastActivityAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutThreadNestedInput;
};
export type ThreadCreateManyInput = {
    id?: string;
    chatSpaceId: string;
    visitorId: string;
    assignedAgentId?: string | null;
    status?: $Enums.ThreadStatus;
    lastActivityAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ThreadUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumThreadStatusFieldUpdateOperationsInput | $Enums.ThreadStatus;
    lastActivityAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ThreadUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    chatSpaceId?: Prisma.StringFieldUpdateOperationsInput | string;
    visitorId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAgentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumThreadStatusFieldUpdateOperationsInput | $Enums.ThreadStatus;
    lastActivityAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ThreadListRelationFilter = {
    every?: Prisma.ThreadWhereInput;
    some?: Prisma.ThreadWhereInput;
    none?: Prisma.ThreadWhereInput;
};
export type ThreadOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ThreadCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chatSpaceId?: Prisma.SortOrder;
    visitorId?: Prisma.SortOrder;
    assignedAgentId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    lastActivityAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ThreadMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chatSpaceId?: Prisma.SortOrder;
    visitorId?: Prisma.SortOrder;
    assignedAgentId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    lastActivityAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ThreadMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chatSpaceId?: Prisma.SortOrder;
    visitorId?: Prisma.SortOrder;
    assignedAgentId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    lastActivityAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ThreadScalarRelationFilter = {
    is?: Prisma.ThreadWhereInput;
    isNot?: Prisma.ThreadWhereInput;
};
export type ThreadCreateNestedManyWithoutChatSpaceInput = {
    create?: Prisma.XOR<Prisma.ThreadCreateWithoutChatSpaceInput, Prisma.ThreadUncheckedCreateWithoutChatSpaceInput> | Prisma.ThreadCreateWithoutChatSpaceInput[] | Prisma.ThreadUncheckedCreateWithoutChatSpaceInput[];
    connectOrCreate?: Prisma.ThreadCreateOrConnectWithoutChatSpaceInput | Prisma.ThreadCreateOrConnectWithoutChatSpaceInput[];
    createMany?: Prisma.ThreadCreateManyChatSpaceInputEnvelope;
    connect?: Prisma.ThreadWhereUniqueInput | Prisma.ThreadWhereUniqueInput[];
};
export type ThreadUncheckedCreateNestedManyWithoutChatSpaceInput = {
    create?: Prisma.XOR<Prisma.ThreadCreateWithoutChatSpaceInput, Prisma.ThreadUncheckedCreateWithoutChatSpaceInput> | Prisma.ThreadCreateWithoutChatSpaceInput[] | Prisma.ThreadUncheckedCreateWithoutChatSpaceInput[];
    connectOrCreate?: Prisma.ThreadCreateOrConnectWithoutChatSpaceInput | Prisma.ThreadCreateOrConnectWithoutChatSpaceInput[];
    createMany?: Prisma.ThreadCreateManyChatSpaceInputEnvelope;
    connect?: Prisma.ThreadWhereUniqueInput | Prisma.ThreadWhereUniqueInput[];
};
export type ThreadUpdateManyWithoutChatSpaceNestedInput = {
    create?: Prisma.XOR<Prisma.ThreadCreateWithoutChatSpaceInput, Prisma.ThreadUncheckedCreateWithoutChatSpaceInput> | Prisma.ThreadCreateWithoutChatSpaceInput[] | Prisma.ThreadUncheckedCreateWithoutChatSpaceInput[];
    connectOrCreate?: Prisma.ThreadCreateOrConnectWithoutChatSpaceInput | Prisma.ThreadCreateOrConnectWithoutChatSpaceInput[];
    upsert?: Prisma.ThreadUpsertWithWhereUniqueWithoutChatSpaceInput | Prisma.ThreadUpsertWithWhereUniqueWithoutChatSpaceInput[];
    createMany?: Prisma.ThreadCreateManyChatSpaceInputEnvelope;
    set?: Prisma.ThreadWhereUniqueInput | Prisma.ThreadWhereUniqueInput[];
    disconnect?: Prisma.ThreadWhereUniqueInput | Prisma.ThreadWhereUniqueInput[];
    delete?: Prisma.ThreadWhereUniqueInput | Prisma.ThreadWhereUniqueInput[];
    connect?: Prisma.ThreadWhereUniqueInput | Prisma.ThreadWhereUniqueInput[];
    update?: Prisma.ThreadUpdateWithWhereUniqueWithoutChatSpaceInput | Prisma.ThreadUpdateWithWhereUniqueWithoutChatSpaceInput[];
    updateMany?: Prisma.ThreadUpdateManyWithWhereWithoutChatSpaceInput | Prisma.ThreadUpdateManyWithWhereWithoutChatSpaceInput[];
    deleteMany?: Prisma.ThreadScalarWhereInput | Prisma.ThreadScalarWhereInput[];
};
export type ThreadUncheckedUpdateManyWithoutChatSpaceNestedInput = {
    create?: Prisma.XOR<Prisma.ThreadCreateWithoutChatSpaceInput, Prisma.ThreadUncheckedCreateWithoutChatSpaceInput> | Prisma.ThreadCreateWithoutChatSpaceInput[] | Prisma.ThreadUncheckedCreateWithoutChatSpaceInput[];
    connectOrCreate?: Prisma.ThreadCreateOrConnectWithoutChatSpaceInput | Prisma.ThreadCreateOrConnectWithoutChatSpaceInput[];
    upsert?: Prisma.ThreadUpsertWithWhereUniqueWithoutChatSpaceInput | Prisma.ThreadUpsertWithWhereUniqueWithoutChatSpaceInput[];
    createMany?: Prisma.ThreadCreateManyChatSpaceInputEnvelope;
    set?: Prisma.ThreadWhereUniqueInput | Prisma.ThreadWhereUniqueInput[];
    disconnect?: Prisma.ThreadWhereUniqueInput | Prisma.ThreadWhereUniqueInput[];
    delete?: Prisma.ThreadWhereUniqueInput | Prisma.ThreadWhereUniqueInput[];
    connect?: Prisma.ThreadWhereUniqueInput | Prisma.ThreadWhereUniqueInput[];
    update?: Prisma.ThreadUpdateWithWhereUniqueWithoutChatSpaceInput | Prisma.ThreadUpdateWithWhereUniqueWithoutChatSpaceInput[];
    updateMany?: Prisma.ThreadUpdateManyWithWhereWithoutChatSpaceInput | Prisma.ThreadUpdateManyWithWhereWithoutChatSpaceInput[];
    deleteMany?: Prisma.ThreadScalarWhereInput | Prisma.ThreadScalarWhereInput[];
};
export type ThreadCreateNestedManyWithoutAgentInput = {
    create?: Prisma.XOR<Prisma.ThreadCreateWithoutAgentInput, Prisma.ThreadUncheckedCreateWithoutAgentInput> | Prisma.ThreadCreateWithoutAgentInput[] | Prisma.ThreadUncheckedCreateWithoutAgentInput[];
    connectOrCreate?: Prisma.ThreadCreateOrConnectWithoutAgentInput | Prisma.ThreadCreateOrConnectWithoutAgentInput[];
    createMany?: Prisma.ThreadCreateManyAgentInputEnvelope;
    connect?: Prisma.ThreadWhereUniqueInput | Prisma.ThreadWhereUniqueInput[];
};
export type ThreadUncheckedCreateNestedManyWithoutAgentInput = {
    create?: Prisma.XOR<Prisma.ThreadCreateWithoutAgentInput, Prisma.ThreadUncheckedCreateWithoutAgentInput> | Prisma.ThreadCreateWithoutAgentInput[] | Prisma.ThreadUncheckedCreateWithoutAgentInput[];
    connectOrCreate?: Prisma.ThreadCreateOrConnectWithoutAgentInput | Prisma.ThreadCreateOrConnectWithoutAgentInput[];
    createMany?: Prisma.ThreadCreateManyAgentInputEnvelope;
    connect?: Prisma.ThreadWhereUniqueInput | Prisma.ThreadWhereUniqueInput[];
};
export type ThreadUpdateManyWithoutAgentNestedInput = {
    create?: Prisma.XOR<Prisma.ThreadCreateWithoutAgentInput, Prisma.ThreadUncheckedCreateWithoutAgentInput> | Prisma.ThreadCreateWithoutAgentInput[] | Prisma.ThreadUncheckedCreateWithoutAgentInput[];
    connectOrCreate?: Prisma.ThreadCreateOrConnectWithoutAgentInput | Prisma.ThreadCreateOrConnectWithoutAgentInput[];
    upsert?: Prisma.ThreadUpsertWithWhereUniqueWithoutAgentInput | Prisma.ThreadUpsertWithWhereUniqueWithoutAgentInput[];
    createMany?: Prisma.ThreadCreateManyAgentInputEnvelope;
    set?: Prisma.ThreadWhereUniqueInput | Prisma.ThreadWhereUniqueInput[];
    disconnect?: Prisma.ThreadWhereUniqueInput | Prisma.ThreadWhereUniqueInput[];
    delete?: Prisma.ThreadWhereUniqueInput | Prisma.ThreadWhereUniqueInput[];
    connect?: Prisma.ThreadWhereUniqueInput | Prisma.ThreadWhereUniqueInput[];
    update?: Prisma.ThreadUpdateWithWhereUniqueWithoutAgentInput | Prisma.ThreadUpdateWithWhereUniqueWithoutAgentInput[];
    updateMany?: Prisma.ThreadUpdateManyWithWhereWithoutAgentInput | Prisma.ThreadUpdateManyWithWhereWithoutAgentInput[];
    deleteMany?: Prisma.ThreadScalarWhereInput | Prisma.ThreadScalarWhereInput[];
};
export type ThreadUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: Prisma.XOR<Prisma.ThreadCreateWithoutAgentInput, Prisma.ThreadUncheckedCreateWithoutAgentInput> | Prisma.ThreadCreateWithoutAgentInput[] | Prisma.ThreadUncheckedCreateWithoutAgentInput[];
    connectOrCreate?: Prisma.ThreadCreateOrConnectWithoutAgentInput | Prisma.ThreadCreateOrConnectWithoutAgentInput[];
    upsert?: Prisma.ThreadUpsertWithWhereUniqueWithoutAgentInput | Prisma.ThreadUpsertWithWhereUniqueWithoutAgentInput[];
    createMany?: Prisma.ThreadCreateManyAgentInputEnvelope;
    set?: Prisma.ThreadWhereUniqueInput | Prisma.ThreadWhereUniqueInput[];
    disconnect?: Prisma.ThreadWhereUniqueInput | Prisma.ThreadWhereUniqueInput[];
    delete?: Prisma.ThreadWhereUniqueInput | Prisma.ThreadWhereUniqueInput[];
    connect?: Prisma.ThreadWhereUniqueInput | Prisma.ThreadWhereUniqueInput[];
    update?: Prisma.ThreadUpdateWithWhereUniqueWithoutAgentInput | Prisma.ThreadUpdateWithWhereUniqueWithoutAgentInput[];
    updateMany?: Prisma.ThreadUpdateManyWithWhereWithoutAgentInput | Prisma.ThreadUpdateManyWithWhereWithoutAgentInput[];
    deleteMany?: Prisma.ThreadScalarWhereInput | Prisma.ThreadScalarWhereInput[];
};
export type ThreadCreateNestedManyWithoutVisitorInput = {
    create?: Prisma.XOR<Prisma.ThreadCreateWithoutVisitorInput, Prisma.ThreadUncheckedCreateWithoutVisitorInput> | Prisma.ThreadCreateWithoutVisitorInput[] | Prisma.ThreadUncheckedCreateWithoutVisitorInput[];
    connectOrCreate?: Prisma.ThreadCreateOrConnectWithoutVisitorInput | Prisma.ThreadCreateOrConnectWithoutVisitorInput[];
    createMany?: Prisma.ThreadCreateManyVisitorInputEnvelope;
    connect?: Prisma.ThreadWhereUniqueInput | Prisma.ThreadWhereUniqueInput[];
};
export type ThreadUncheckedCreateNestedManyWithoutVisitorInput = {
    create?: Prisma.XOR<Prisma.ThreadCreateWithoutVisitorInput, Prisma.ThreadUncheckedCreateWithoutVisitorInput> | Prisma.ThreadCreateWithoutVisitorInput[] | Prisma.ThreadUncheckedCreateWithoutVisitorInput[];
    connectOrCreate?: Prisma.ThreadCreateOrConnectWithoutVisitorInput | Prisma.ThreadCreateOrConnectWithoutVisitorInput[];
    createMany?: Prisma.ThreadCreateManyVisitorInputEnvelope;
    connect?: Prisma.ThreadWhereUniqueInput | Prisma.ThreadWhereUniqueInput[];
};
export type ThreadUpdateManyWithoutVisitorNestedInput = {
    create?: Prisma.XOR<Prisma.ThreadCreateWithoutVisitorInput, Prisma.ThreadUncheckedCreateWithoutVisitorInput> | Prisma.ThreadCreateWithoutVisitorInput[] | Prisma.ThreadUncheckedCreateWithoutVisitorInput[];
    connectOrCreate?: Prisma.ThreadCreateOrConnectWithoutVisitorInput | Prisma.ThreadCreateOrConnectWithoutVisitorInput[];
    upsert?: Prisma.ThreadUpsertWithWhereUniqueWithoutVisitorInput | Prisma.ThreadUpsertWithWhereUniqueWithoutVisitorInput[];
    createMany?: Prisma.ThreadCreateManyVisitorInputEnvelope;
    set?: Prisma.ThreadWhereUniqueInput | Prisma.ThreadWhereUniqueInput[];
    disconnect?: Prisma.ThreadWhereUniqueInput | Prisma.ThreadWhereUniqueInput[];
    delete?: Prisma.ThreadWhereUniqueInput | Prisma.ThreadWhereUniqueInput[];
    connect?: Prisma.ThreadWhereUniqueInput | Prisma.ThreadWhereUniqueInput[];
    update?: Prisma.ThreadUpdateWithWhereUniqueWithoutVisitorInput | Prisma.ThreadUpdateWithWhereUniqueWithoutVisitorInput[];
    updateMany?: Prisma.ThreadUpdateManyWithWhereWithoutVisitorInput | Prisma.ThreadUpdateManyWithWhereWithoutVisitorInput[];
    deleteMany?: Prisma.ThreadScalarWhereInput | Prisma.ThreadScalarWhereInput[];
};
export type ThreadUncheckedUpdateManyWithoutVisitorNestedInput = {
    create?: Prisma.XOR<Prisma.ThreadCreateWithoutVisitorInput, Prisma.ThreadUncheckedCreateWithoutVisitorInput> | Prisma.ThreadCreateWithoutVisitorInput[] | Prisma.ThreadUncheckedCreateWithoutVisitorInput[];
    connectOrCreate?: Prisma.ThreadCreateOrConnectWithoutVisitorInput | Prisma.ThreadCreateOrConnectWithoutVisitorInput[];
    upsert?: Prisma.ThreadUpsertWithWhereUniqueWithoutVisitorInput | Prisma.ThreadUpsertWithWhereUniqueWithoutVisitorInput[];
    createMany?: Prisma.ThreadCreateManyVisitorInputEnvelope;
    set?: Prisma.ThreadWhereUniqueInput | Prisma.ThreadWhereUniqueInput[];
    disconnect?: Prisma.ThreadWhereUniqueInput | Prisma.ThreadWhereUniqueInput[];
    delete?: Prisma.ThreadWhereUniqueInput | Prisma.ThreadWhereUniqueInput[];
    connect?: Prisma.ThreadWhereUniqueInput | Prisma.ThreadWhereUniqueInput[];
    update?: Prisma.ThreadUpdateWithWhereUniqueWithoutVisitorInput | Prisma.ThreadUpdateWithWhereUniqueWithoutVisitorInput[];
    updateMany?: Prisma.ThreadUpdateManyWithWhereWithoutVisitorInput | Prisma.ThreadUpdateManyWithWhereWithoutVisitorInput[];
    deleteMany?: Prisma.ThreadScalarWhereInput | Prisma.ThreadScalarWhereInput[];
};
export type EnumThreadStatusFieldUpdateOperationsInput = {
    set?: $Enums.ThreadStatus;
};
export type ThreadCreateNestedOneWithoutMessagesInput = {
    create?: Prisma.XOR<Prisma.ThreadCreateWithoutMessagesInput, Prisma.ThreadUncheckedCreateWithoutMessagesInput>;
    connectOrCreate?: Prisma.ThreadCreateOrConnectWithoutMessagesInput;
    connect?: Prisma.ThreadWhereUniqueInput;
};
export type ThreadUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: Prisma.XOR<Prisma.ThreadCreateWithoutMessagesInput, Prisma.ThreadUncheckedCreateWithoutMessagesInput>;
    connectOrCreate?: Prisma.ThreadCreateOrConnectWithoutMessagesInput;
    upsert?: Prisma.ThreadUpsertWithoutMessagesInput;
    connect?: Prisma.ThreadWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ThreadUpdateToOneWithWhereWithoutMessagesInput, Prisma.ThreadUpdateWithoutMessagesInput>, Prisma.ThreadUncheckedUpdateWithoutMessagesInput>;
};
export type ThreadCreateWithoutChatSpaceInput = {
    id?: string;
    status?: $Enums.ThreadStatus;
    lastActivityAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    visitor: Prisma.VisitorCreateNestedOneWithoutThreadsInput;
    agent?: Prisma.AgentCreateNestedOneWithoutThreadsInput;
    messages?: Prisma.MessageCreateNestedManyWithoutThreadInput;
};
export type ThreadUncheckedCreateWithoutChatSpaceInput = {
    id?: string;
    visitorId: string;
    assignedAgentId?: string | null;
    status?: $Enums.ThreadStatus;
    lastActivityAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutThreadInput;
};
export type ThreadCreateOrConnectWithoutChatSpaceInput = {
    where: Prisma.ThreadWhereUniqueInput;
    create: Prisma.XOR<Prisma.ThreadCreateWithoutChatSpaceInput, Prisma.ThreadUncheckedCreateWithoutChatSpaceInput>;
};
export type ThreadCreateManyChatSpaceInputEnvelope = {
    data: Prisma.ThreadCreateManyChatSpaceInput | Prisma.ThreadCreateManyChatSpaceInput[];
    skipDuplicates?: boolean;
};
export type ThreadUpsertWithWhereUniqueWithoutChatSpaceInput = {
    where: Prisma.ThreadWhereUniqueInput;
    update: Prisma.XOR<Prisma.ThreadUpdateWithoutChatSpaceInput, Prisma.ThreadUncheckedUpdateWithoutChatSpaceInput>;
    create: Prisma.XOR<Prisma.ThreadCreateWithoutChatSpaceInput, Prisma.ThreadUncheckedCreateWithoutChatSpaceInput>;
};
export type ThreadUpdateWithWhereUniqueWithoutChatSpaceInput = {
    where: Prisma.ThreadWhereUniqueInput;
    data: Prisma.XOR<Prisma.ThreadUpdateWithoutChatSpaceInput, Prisma.ThreadUncheckedUpdateWithoutChatSpaceInput>;
};
export type ThreadUpdateManyWithWhereWithoutChatSpaceInput = {
    where: Prisma.ThreadScalarWhereInput;
    data: Prisma.XOR<Prisma.ThreadUpdateManyMutationInput, Prisma.ThreadUncheckedUpdateManyWithoutChatSpaceInput>;
};
export type ThreadScalarWhereInput = {
    AND?: Prisma.ThreadScalarWhereInput | Prisma.ThreadScalarWhereInput[];
    OR?: Prisma.ThreadScalarWhereInput[];
    NOT?: Prisma.ThreadScalarWhereInput | Prisma.ThreadScalarWhereInput[];
    id?: Prisma.StringFilter<"Thread"> | string;
    chatSpaceId?: Prisma.StringFilter<"Thread"> | string;
    visitorId?: Prisma.StringFilter<"Thread"> | string;
    assignedAgentId?: Prisma.StringNullableFilter<"Thread"> | string | null;
    status?: Prisma.EnumThreadStatusFilter<"Thread"> | $Enums.ThreadStatus;
    lastActivityAt?: Prisma.DateTimeFilter<"Thread"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Thread"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Thread"> | Date | string;
};
export type ThreadCreateWithoutAgentInput = {
    id?: string;
    status?: $Enums.ThreadStatus;
    lastActivityAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatSpace: Prisma.ChatSpaceCreateNestedOneWithoutThreadsInput;
    visitor: Prisma.VisitorCreateNestedOneWithoutThreadsInput;
    messages?: Prisma.MessageCreateNestedManyWithoutThreadInput;
};
export type ThreadUncheckedCreateWithoutAgentInput = {
    id?: string;
    chatSpaceId: string;
    visitorId: string;
    status?: $Enums.ThreadStatus;
    lastActivityAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutThreadInput;
};
export type ThreadCreateOrConnectWithoutAgentInput = {
    where: Prisma.ThreadWhereUniqueInput;
    create: Prisma.XOR<Prisma.ThreadCreateWithoutAgentInput, Prisma.ThreadUncheckedCreateWithoutAgentInput>;
};
export type ThreadCreateManyAgentInputEnvelope = {
    data: Prisma.ThreadCreateManyAgentInput | Prisma.ThreadCreateManyAgentInput[];
    skipDuplicates?: boolean;
};
export type ThreadUpsertWithWhereUniqueWithoutAgentInput = {
    where: Prisma.ThreadWhereUniqueInput;
    update: Prisma.XOR<Prisma.ThreadUpdateWithoutAgentInput, Prisma.ThreadUncheckedUpdateWithoutAgentInput>;
    create: Prisma.XOR<Prisma.ThreadCreateWithoutAgentInput, Prisma.ThreadUncheckedCreateWithoutAgentInput>;
};
export type ThreadUpdateWithWhereUniqueWithoutAgentInput = {
    where: Prisma.ThreadWhereUniqueInput;
    data: Prisma.XOR<Prisma.ThreadUpdateWithoutAgentInput, Prisma.ThreadUncheckedUpdateWithoutAgentInput>;
};
export type ThreadUpdateManyWithWhereWithoutAgentInput = {
    where: Prisma.ThreadScalarWhereInput;
    data: Prisma.XOR<Prisma.ThreadUpdateManyMutationInput, Prisma.ThreadUncheckedUpdateManyWithoutAgentInput>;
};
export type ThreadCreateWithoutVisitorInput = {
    id?: string;
    status?: $Enums.ThreadStatus;
    lastActivityAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatSpace: Prisma.ChatSpaceCreateNestedOneWithoutThreadsInput;
    agent?: Prisma.AgentCreateNestedOneWithoutThreadsInput;
    messages?: Prisma.MessageCreateNestedManyWithoutThreadInput;
};
export type ThreadUncheckedCreateWithoutVisitorInput = {
    id?: string;
    chatSpaceId: string;
    assignedAgentId?: string | null;
    status?: $Enums.ThreadStatus;
    lastActivityAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutThreadInput;
};
export type ThreadCreateOrConnectWithoutVisitorInput = {
    where: Prisma.ThreadWhereUniqueInput;
    create: Prisma.XOR<Prisma.ThreadCreateWithoutVisitorInput, Prisma.ThreadUncheckedCreateWithoutVisitorInput>;
};
export type ThreadCreateManyVisitorInputEnvelope = {
    data: Prisma.ThreadCreateManyVisitorInput | Prisma.ThreadCreateManyVisitorInput[];
    skipDuplicates?: boolean;
};
export type ThreadUpsertWithWhereUniqueWithoutVisitorInput = {
    where: Prisma.ThreadWhereUniqueInput;
    update: Prisma.XOR<Prisma.ThreadUpdateWithoutVisitorInput, Prisma.ThreadUncheckedUpdateWithoutVisitorInput>;
    create: Prisma.XOR<Prisma.ThreadCreateWithoutVisitorInput, Prisma.ThreadUncheckedCreateWithoutVisitorInput>;
};
export type ThreadUpdateWithWhereUniqueWithoutVisitorInput = {
    where: Prisma.ThreadWhereUniqueInput;
    data: Prisma.XOR<Prisma.ThreadUpdateWithoutVisitorInput, Prisma.ThreadUncheckedUpdateWithoutVisitorInput>;
};
export type ThreadUpdateManyWithWhereWithoutVisitorInput = {
    where: Prisma.ThreadScalarWhereInput;
    data: Prisma.XOR<Prisma.ThreadUpdateManyMutationInput, Prisma.ThreadUncheckedUpdateManyWithoutVisitorInput>;
};
export type ThreadCreateWithoutMessagesInput = {
    id?: string;
    status?: $Enums.ThreadStatus;
    lastActivityAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatSpace: Prisma.ChatSpaceCreateNestedOneWithoutThreadsInput;
    visitor: Prisma.VisitorCreateNestedOneWithoutThreadsInput;
    agent?: Prisma.AgentCreateNestedOneWithoutThreadsInput;
};
export type ThreadUncheckedCreateWithoutMessagesInput = {
    id?: string;
    chatSpaceId: string;
    visitorId: string;
    assignedAgentId?: string | null;
    status?: $Enums.ThreadStatus;
    lastActivityAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ThreadCreateOrConnectWithoutMessagesInput = {
    where: Prisma.ThreadWhereUniqueInput;
    create: Prisma.XOR<Prisma.ThreadCreateWithoutMessagesInput, Prisma.ThreadUncheckedCreateWithoutMessagesInput>;
};
export type ThreadUpsertWithoutMessagesInput = {
    update: Prisma.XOR<Prisma.ThreadUpdateWithoutMessagesInput, Prisma.ThreadUncheckedUpdateWithoutMessagesInput>;
    create: Prisma.XOR<Prisma.ThreadCreateWithoutMessagesInput, Prisma.ThreadUncheckedCreateWithoutMessagesInput>;
    where?: Prisma.ThreadWhereInput;
};
export type ThreadUpdateToOneWithWhereWithoutMessagesInput = {
    where?: Prisma.ThreadWhereInput;
    data: Prisma.XOR<Prisma.ThreadUpdateWithoutMessagesInput, Prisma.ThreadUncheckedUpdateWithoutMessagesInput>;
};
export type ThreadUpdateWithoutMessagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumThreadStatusFieldUpdateOperationsInput | $Enums.ThreadStatus;
    lastActivityAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chatSpace?: Prisma.ChatSpaceUpdateOneRequiredWithoutThreadsNestedInput;
    visitor?: Prisma.VisitorUpdateOneRequiredWithoutThreadsNestedInput;
    agent?: Prisma.AgentUpdateOneWithoutThreadsNestedInput;
};
export type ThreadUncheckedUpdateWithoutMessagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    chatSpaceId?: Prisma.StringFieldUpdateOperationsInput | string;
    visitorId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAgentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumThreadStatusFieldUpdateOperationsInput | $Enums.ThreadStatus;
    lastActivityAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ThreadCreateManyChatSpaceInput = {
    id?: string;
    visitorId: string;
    assignedAgentId?: string | null;
    status?: $Enums.ThreadStatus;
    lastActivityAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ThreadUpdateWithoutChatSpaceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumThreadStatusFieldUpdateOperationsInput | $Enums.ThreadStatus;
    lastActivityAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    visitor?: Prisma.VisitorUpdateOneRequiredWithoutThreadsNestedInput;
    agent?: Prisma.AgentUpdateOneWithoutThreadsNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutThreadNestedInput;
};
export type ThreadUncheckedUpdateWithoutChatSpaceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    visitorId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAgentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumThreadStatusFieldUpdateOperationsInput | $Enums.ThreadStatus;
    lastActivityAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutThreadNestedInput;
};
export type ThreadUncheckedUpdateManyWithoutChatSpaceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    visitorId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAgentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumThreadStatusFieldUpdateOperationsInput | $Enums.ThreadStatus;
    lastActivityAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ThreadCreateManyAgentInput = {
    id?: string;
    chatSpaceId: string;
    visitorId: string;
    status?: $Enums.ThreadStatus;
    lastActivityAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ThreadUpdateWithoutAgentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumThreadStatusFieldUpdateOperationsInput | $Enums.ThreadStatus;
    lastActivityAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chatSpace?: Prisma.ChatSpaceUpdateOneRequiredWithoutThreadsNestedInput;
    visitor?: Prisma.VisitorUpdateOneRequiredWithoutThreadsNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutThreadNestedInput;
};
export type ThreadUncheckedUpdateWithoutAgentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    chatSpaceId?: Prisma.StringFieldUpdateOperationsInput | string;
    visitorId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumThreadStatusFieldUpdateOperationsInput | $Enums.ThreadStatus;
    lastActivityAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutThreadNestedInput;
};
export type ThreadUncheckedUpdateManyWithoutAgentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    chatSpaceId?: Prisma.StringFieldUpdateOperationsInput | string;
    visitorId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumThreadStatusFieldUpdateOperationsInput | $Enums.ThreadStatus;
    lastActivityAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ThreadCreateManyVisitorInput = {
    id?: string;
    chatSpaceId: string;
    assignedAgentId?: string | null;
    status?: $Enums.ThreadStatus;
    lastActivityAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ThreadUpdateWithoutVisitorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumThreadStatusFieldUpdateOperationsInput | $Enums.ThreadStatus;
    lastActivityAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chatSpace?: Prisma.ChatSpaceUpdateOneRequiredWithoutThreadsNestedInput;
    agent?: Prisma.AgentUpdateOneWithoutThreadsNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutThreadNestedInput;
};
export type ThreadUncheckedUpdateWithoutVisitorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    chatSpaceId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAgentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumThreadStatusFieldUpdateOperationsInput | $Enums.ThreadStatus;
    lastActivityAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutThreadNestedInput;
};
export type ThreadUncheckedUpdateManyWithoutVisitorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    chatSpaceId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAgentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumThreadStatusFieldUpdateOperationsInput | $Enums.ThreadStatus;
    lastActivityAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ThreadCountOutputType = {
    messages: number;
};
export type ThreadCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    messages?: boolean | ThreadCountOutputTypeCountMessagesArgs;
};
export type ThreadCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ThreadCountOutputTypeSelect<ExtArgs> | null;
};
export type ThreadCountOutputTypeCountMessagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessageWhereInput;
};
export type ThreadSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    chatSpaceId?: boolean;
    visitorId?: boolean;
    assignedAgentId?: boolean;
    status?: boolean;
    lastActivityAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    chatSpace?: boolean | Prisma.ChatSpaceDefaultArgs<ExtArgs>;
    visitor?: boolean | Prisma.VisitorDefaultArgs<ExtArgs>;
    agent?: boolean | Prisma.Thread$agentArgs<ExtArgs>;
    messages?: boolean | Prisma.Thread$messagesArgs<ExtArgs>;
    _count?: boolean | Prisma.ThreadCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["thread"]>;
export type ThreadSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    chatSpaceId?: boolean;
    visitorId?: boolean;
    assignedAgentId?: boolean;
    status?: boolean;
    lastActivityAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    chatSpace?: boolean | Prisma.ChatSpaceDefaultArgs<ExtArgs>;
    visitor?: boolean | Prisma.VisitorDefaultArgs<ExtArgs>;
    agent?: boolean | Prisma.Thread$agentArgs<ExtArgs>;
}, ExtArgs["result"]["thread"]>;
export type ThreadSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    chatSpaceId?: boolean;
    visitorId?: boolean;
    assignedAgentId?: boolean;
    status?: boolean;
    lastActivityAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    chatSpace?: boolean | Prisma.ChatSpaceDefaultArgs<ExtArgs>;
    visitor?: boolean | Prisma.VisitorDefaultArgs<ExtArgs>;
    agent?: boolean | Prisma.Thread$agentArgs<ExtArgs>;
}, ExtArgs["result"]["thread"]>;
export type ThreadSelectScalar = {
    id?: boolean;
    chatSpaceId?: boolean;
    visitorId?: boolean;
    assignedAgentId?: boolean;
    status?: boolean;
    lastActivityAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ThreadOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "chatSpaceId" | "visitorId" | "assignedAgentId" | "status" | "lastActivityAt" | "createdAt" | "updatedAt", ExtArgs["result"]["thread"]>;
export type ThreadInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    chatSpace?: boolean | Prisma.ChatSpaceDefaultArgs<ExtArgs>;
    visitor?: boolean | Prisma.VisitorDefaultArgs<ExtArgs>;
    agent?: boolean | Prisma.Thread$agentArgs<ExtArgs>;
    messages?: boolean | Prisma.Thread$messagesArgs<ExtArgs>;
    _count?: boolean | Prisma.ThreadCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ThreadIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    chatSpace?: boolean | Prisma.ChatSpaceDefaultArgs<ExtArgs>;
    visitor?: boolean | Prisma.VisitorDefaultArgs<ExtArgs>;
    agent?: boolean | Prisma.Thread$agentArgs<ExtArgs>;
};
export type ThreadIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    chatSpace?: boolean | Prisma.ChatSpaceDefaultArgs<ExtArgs>;
    visitor?: boolean | Prisma.VisitorDefaultArgs<ExtArgs>;
    agent?: boolean | Prisma.Thread$agentArgs<ExtArgs>;
};
export type $ThreadPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Thread";
    objects: {
        chatSpace: Prisma.$ChatSpacePayload<ExtArgs>;
        visitor: Prisma.$VisitorPayload<ExtArgs>;
        agent: Prisma.$AgentPayload<ExtArgs> | null;
        messages: Prisma.$MessagePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        chatSpaceId: string;
        visitorId: string;
        assignedAgentId: string | null;
        status: $Enums.ThreadStatus;
        lastActivityAt: Date;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["thread"]>;
    composites: {};
};
export type ThreadGetPayload<S extends boolean | null | undefined | ThreadDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ThreadPayload, S>;
export type ThreadCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ThreadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ThreadCountAggregateInputType | true;
};
export interface ThreadDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Thread'];
        meta: {
            name: 'Thread';
        };
    };
    findUnique<T extends ThreadFindUniqueArgs>(args: Prisma.SelectSubset<T, ThreadFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ThreadClient<runtime.Types.Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ThreadFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ThreadFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ThreadClient<runtime.Types.Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ThreadFindFirstArgs>(args?: Prisma.SelectSubset<T, ThreadFindFirstArgs<ExtArgs>>): Prisma.Prisma__ThreadClient<runtime.Types.Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ThreadFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ThreadFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ThreadClient<runtime.Types.Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ThreadFindManyArgs>(args?: Prisma.SelectSubset<T, ThreadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ThreadCreateArgs>(args: Prisma.SelectSubset<T, ThreadCreateArgs<ExtArgs>>): Prisma.Prisma__ThreadClient<runtime.Types.Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ThreadCreateManyArgs>(args?: Prisma.SelectSubset<T, ThreadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ThreadCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ThreadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ThreadDeleteArgs>(args: Prisma.SelectSubset<T, ThreadDeleteArgs<ExtArgs>>): Prisma.Prisma__ThreadClient<runtime.Types.Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ThreadUpdateArgs>(args: Prisma.SelectSubset<T, ThreadUpdateArgs<ExtArgs>>): Prisma.Prisma__ThreadClient<runtime.Types.Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ThreadDeleteManyArgs>(args?: Prisma.SelectSubset<T, ThreadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ThreadUpdateManyArgs>(args: Prisma.SelectSubset<T, ThreadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ThreadUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ThreadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ThreadUpsertArgs>(args: Prisma.SelectSubset<T, ThreadUpsertArgs<ExtArgs>>): Prisma.Prisma__ThreadClient<runtime.Types.Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ThreadCountArgs>(args?: Prisma.Subset<T, ThreadCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ThreadCountAggregateOutputType> : number>;
    aggregate<T extends ThreadAggregateArgs>(args: Prisma.Subset<T, ThreadAggregateArgs>): Prisma.PrismaPromise<GetThreadAggregateType<T>>;
    groupBy<T extends ThreadGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ThreadGroupByArgs['orderBy'];
    } : {
        orderBy?: ThreadGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ThreadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThreadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ThreadFieldRefs;
}
export interface Prisma__ThreadClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    chatSpace<T extends Prisma.ChatSpaceDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ChatSpaceDefaultArgs<ExtArgs>>): Prisma.Prisma__ChatSpaceClient<runtime.Types.Result.GetResult<Prisma.$ChatSpacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    visitor<T extends Prisma.VisitorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VisitorDefaultArgs<ExtArgs>>): Prisma.Prisma__VisitorClient<runtime.Types.Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    agent<T extends Prisma.Thread$agentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Thread$agentArgs<ExtArgs>>): Prisma.Prisma__AgentClient<runtime.Types.Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    messages<T extends Prisma.Thread$messagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Thread$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ThreadFieldRefs {
    readonly id: Prisma.FieldRef<"Thread", 'String'>;
    readonly chatSpaceId: Prisma.FieldRef<"Thread", 'String'>;
    readonly visitorId: Prisma.FieldRef<"Thread", 'String'>;
    readonly assignedAgentId: Prisma.FieldRef<"Thread", 'String'>;
    readonly status: Prisma.FieldRef<"Thread", 'ThreadStatus'>;
    readonly lastActivityAt: Prisma.FieldRef<"Thread", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Thread", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Thread", 'DateTime'>;
}
export type ThreadFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ThreadSelect<ExtArgs> | null;
    omit?: Prisma.ThreadOmit<ExtArgs> | null;
    include?: Prisma.ThreadInclude<ExtArgs> | null;
    where: Prisma.ThreadWhereUniqueInput;
};
export type ThreadFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ThreadSelect<ExtArgs> | null;
    omit?: Prisma.ThreadOmit<ExtArgs> | null;
    include?: Prisma.ThreadInclude<ExtArgs> | null;
    where: Prisma.ThreadWhereUniqueInput;
};
export type ThreadFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ThreadSelect<ExtArgs> | null;
    omit?: Prisma.ThreadOmit<ExtArgs> | null;
    include?: Prisma.ThreadInclude<ExtArgs> | null;
    where?: Prisma.ThreadWhereInput;
    orderBy?: Prisma.ThreadOrderByWithRelationInput | Prisma.ThreadOrderByWithRelationInput[];
    cursor?: Prisma.ThreadWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ThreadScalarFieldEnum | Prisma.ThreadScalarFieldEnum[];
};
export type ThreadFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ThreadSelect<ExtArgs> | null;
    omit?: Prisma.ThreadOmit<ExtArgs> | null;
    include?: Prisma.ThreadInclude<ExtArgs> | null;
    where?: Prisma.ThreadWhereInput;
    orderBy?: Prisma.ThreadOrderByWithRelationInput | Prisma.ThreadOrderByWithRelationInput[];
    cursor?: Prisma.ThreadWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ThreadScalarFieldEnum | Prisma.ThreadScalarFieldEnum[];
};
export type ThreadFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ThreadSelect<ExtArgs> | null;
    omit?: Prisma.ThreadOmit<ExtArgs> | null;
    include?: Prisma.ThreadInclude<ExtArgs> | null;
    where?: Prisma.ThreadWhereInput;
    orderBy?: Prisma.ThreadOrderByWithRelationInput | Prisma.ThreadOrderByWithRelationInput[];
    cursor?: Prisma.ThreadWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ThreadScalarFieldEnum | Prisma.ThreadScalarFieldEnum[];
};
export type ThreadCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ThreadSelect<ExtArgs> | null;
    omit?: Prisma.ThreadOmit<ExtArgs> | null;
    include?: Prisma.ThreadInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ThreadCreateInput, Prisma.ThreadUncheckedCreateInput>;
};
export type ThreadCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ThreadCreateManyInput | Prisma.ThreadCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ThreadCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ThreadSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ThreadOmit<ExtArgs> | null;
    data: Prisma.ThreadCreateManyInput | Prisma.ThreadCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ThreadIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ThreadUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ThreadSelect<ExtArgs> | null;
    omit?: Prisma.ThreadOmit<ExtArgs> | null;
    include?: Prisma.ThreadInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ThreadUpdateInput, Prisma.ThreadUncheckedUpdateInput>;
    where: Prisma.ThreadWhereUniqueInput;
};
export type ThreadUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ThreadUpdateManyMutationInput, Prisma.ThreadUncheckedUpdateManyInput>;
    where?: Prisma.ThreadWhereInput;
    limit?: number;
};
export type ThreadUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ThreadSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ThreadOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ThreadUpdateManyMutationInput, Prisma.ThreadUncheckedUpdateManyInput>;
    where?: Prisma.ThreadWhereInput;
    limit?: number;
    include?: Prisma.ThreadIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ThreadUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ThreadSelect<ExtArgs> | null;
    omit?: Prisma.ThreadOmit<ExtArgs> | null;
    include?: Prisma.ThreadInclude<ExtArgs> | null;
    where: Prisma.ThreadWhereUniqueInput;
    create: Prisma.XOR<Prisma.ThreadCreateInput, Prisma.ThreadUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ThreadUpdateInput, Prisma.ThreadUncheckedUpdateInput>;
};
export type ThreadDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ThreadSelect<ExtArgs> | null;
    omit?: Prisma.ThreadOmit<ExtArgs> | null;
    include?: Prisma.ThreadInclude<ExtArgs> | null;
    where: Prisma.ThreadWhereUniqueInput;
};
export type ThreadDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ThreadWhereInput;
    limit?: number;
};
export type Thread$agentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AgentSelect<ExtArgs> | null;
    omit?: Prisma.AgentOmit<ExtArgs> | null;
    include?: Prisma.AgentInclude<ExtArgs> | null;
    where?: Prisma.AgentWhereInput;
};
export type Thread$messagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    where?: Prisma.MessageWhereInput;
    orderBy?: Prisma.MessageOrderByWithRelationInput | Prisma.MessageOrderByWithRelationInput[];
    cursor?: Prisma.MessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessageScalarFieldEnum | Prisma.MessageScalarFieldEnum[];
};
export type ThreadDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ThreadSelect<ExtArgs> | null;
    omit?: Prisma.ThreadOmit<ExtArgs> | null;
    include?: Prisma.ThreadInclude<ExtArgs> | null;
};
export {};
