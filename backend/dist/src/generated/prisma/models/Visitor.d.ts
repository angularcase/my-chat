import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type VisitorModel = runtime.Types.Result.DefaultSelection<Prisma.$VisitorPayload>;
export type AggregateVisitor = {
    _count: VisitorCountAggregateOutputType | null;
    _min: VisitorMinAggregateOutputType | null;
    _max: VisitorMaxAggregateOutputType | null;
};
export type VisitorMinAggregateOutputType = {
    id: string | null;
    chatSpaceId: string | null;
    sessionToken: string | null;
    email: string | null;
    displayName: string | null;
    createdAt: Date | null;
};
export type VisitorMaxAggregateOutputType = {
    id: string | null;
    chatSpaceId: string | null;
    sessionToken: string | null;
    email: string | null;
    displayName: string | null;
    createdAt: Date | null;
};
export type VisitorCountAggregateOutputType = {
    id: number;
    chatSpaceId: number;
    sessionToken: number;
    email: number;
    displayName: number;
    metadata: number;
    createdAt: number;
    _all: number;
};
export type VisitorMinAggregateInputType = {
    id?: true;
    chatSpaceId?: true;
    sessionToken?: true;
    email?: true;
    displayName?: true;
    createdAt?: true;
};
export type VisitorMaxAggregateInputType = {
    id?: true;
    chatSpaceId?: true;
    sessionToken?: true;
    email?: true;
    displayName?: true;
    createdAt?: true;
};
export type VisitorCountAggregateInputType = {
    id?: true;
    chatSpaceId?: true;
    sessionToken?: true;
    email?: true;
    displayName?: true;
    metadata?: true;
    createdAt?: true;
    _all?: true;
};
export type VisitorAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VisitorWhereInput;
    orderBy?: Prisma.VisitorOrderByWithRelationInput | Prisma.VisitorOrderByWithRelationInput[];
    cursor?: Prisma.VisitorWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | VisitorCountAggregateInputType;
    _min?: VisitorMinAggregateInputType;
    _max?: VisitorMaxAggregateInputType;
};
export type GetVisitorAggregateType<T extends VisitorAggregateArgs> = {
    [P in keyof T & keyof AggregateVisitor]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVisitor[P]> : Prisma.GetScalarType<T[P], AggregateVisitor[P]>;
};
export type VisitorGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VisitorWhereInput;
    orderBy?: Prisma.VisitorOrderByWithAggregationInput | Prisma.VisitorOrderByWithAggregationInput[];
    by: Prisma.VisitorScalarFieldEnum[] | Prisma.VisitorScalarFieldEnum;
    having?: Prisma.VisitorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VisitorCountAggregateInputType | true;
    _min?: VisitorMinAggregateInputType;
    _max?: VisitorMaxAggregateInputType;
};
export type VisitorGroupByOutputType = {
    id: string;
    chatSpaceId: string;
    sessionToken: string;
    email: string | null;
    displayName: string | null;
    metadata: runtime.JsonValue | null;
    createdAt: Date;
    _count: VisitorCountAggregateOutputType | null;
    _min: VisitorMinAggregateOutputType | null;
    _max: VisitorMaxAggregateOutputType | null;
};
type GetVisitorGroupByPayload<T extends VisitorGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VisitorGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VisitorGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VisitorGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VisitorGroupByOutputType[P]>;
}>>;
export type VisitorWhereInput = {
    AND?: Prisma.VisitorWhereInput | Prisma.VisitorWhereInput[];
    OR?: Prisma.VisitorWhereInput[];
    NOT?: Prisma.VisitorWhereInput | Prisma.VisitorWhereInput[];
    id?: Prisma.StringFilter<"Visitor"> | string;
    chatSpaceId?: Prisma.StringFilter<"Visitor"> | string;
    sessionToken?: Prisma.StringFilter<"Visitor"> | string;
    email?: Prisma.StringNullableFilter<"Visitor"> | string | null;
    displayName?: Prisma.StringNullableFilter<"Visitor"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"Visitor">;
    createdAt?: Prisma.DateTimeFilter<"Visitor"> | Date | string;
    chatSpace?: Prisma.XOR<Prisma.ChatSpaceScalarRelationFilter, Prisma.ChatSpaceWhereInput>;
    threads?: Prisma.ThreadListRelationFilter;
};
export type VisitorOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    chatSpaceId?: Prisma.SortOrder;
    sessionToken?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    displayName?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    chatSpace?: Prisma.ChatSpaceOrderByWithRelationInput;
    threads?: Prisma.ThreadOrderByRelationAggregateInput;
};
export type VisitorWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    sessionToken?: string;
    AND?: Prisma.VisitorWhereInput | Prisma.VisitorWhereInput[];
    OR?: Prisma.VisitorWhereInput[];
    NOT?: Prisma.VisitorWhereInput | Prisma.VisitorWhereInput[];
    chatSpaceId?: Prisma.StringFilter<"Visitor"> | string;
    email?: Prisma.StringNullableFilter<"Visitor"> | string | null;
    displayName?: Prisma.StringNullableFilter<"Visitor"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"Visitor">;
    createdAt?: Prisma.DateTimeFilter<"Visitor"> | Date | string;
    chatSpace?: Prisma.XOR<Prisma.ChatSpaceScalarRelationFilter, Prisma.ChatSpaceWhereInput>;
    threads?: Prisma.ThreadListRelationFilter;
}, "id" | "sessionToken">;
export type VisitorOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    chatSpaceId?: Prisma.SortOrder;
    sessionToken?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    displayName?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.VisitorCountOrderByAggregateInput;
    _max?: Prisma.VisitorMaxOrderByAggregateInput;
    _min?: Prisma.VisitorMinOrderByAggregateInput;
};
export type VisitorScalarWhereWithAggregatesInput = {
    AND?: Prisma.VisitorScalarWhereWithAggregatesInput | Prisma.VisitorScalarWhereWithAggregatesInput[];
    OR?: Prisma.VisitorScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VisitorScalarWhereWithAggregatesInput | Prisma.VisitorScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Visitor"> | string;
    chatSpaceId?: Prisma.StringWithAggregatesFilter<"Visitor"> | string;
    sessionToken?: Prisma.StringWithAggregatesFilter<"Visitor"> | string;
    email?: Prisma.StringNullableWithAggregatesFilter<"Visitor"> | string | null;
    displayName?: Prisma.StringNullableWithAggregatesFilter<"Visitor"> | string | null;
    metadata?: Prisma.JsonNullableWithAggregatesFilter<"Visitor">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Visitor"> | Date | string;
};
export type VisitorCreateInput = {
    id?: string;
    sessionToken: string;
    email?: string | null;
    displayName?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    chatSpace: Prisma.ChatSpaceCreateNestedOneWithoutVisitorsInput;
    threads?: Prisma.ThreadCreateNestedManyWithoutVisitorInput;
};
export type VisitorUncheckedCreateInput = {
    id?: string;
    chatSpaceId: string;
    sessionToken: string;
    email?: string | null;
    displayName?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    threads?: Prisma.ThreadUncheckedCreateNestedManyWithoutVisitorInput;
};
export type VisitorUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionToken?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    displayName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chatSpace?: Prisma.ChatSpaceUpdateOneRequiredWithoutVisitorsNestedInput;
    threads?: Prisma.ThreadUpdateManyWithoutVisitorNestedInput;
};
export type VisitorUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    chatSpaceId?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionToken?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    displayName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    threads?: Prisma.ThreadUncheckedUpdateManyWithoutVisitorNestedInput;
};
export type VisitorCreateManyInput = {
    id?: string;
    chatSpaceId: string;
    sessionToken: string;
    email?: string | null;
    displayName?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type VisitorUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionToken?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    displayName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VisitorUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    chatSpaceId?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionToken?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    displayName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VisitorListRelationFilter = {
    every?: Prisma.VisitorWhereInput;
    some?: Prisma.VisitorWhereInput;
    none?: Prisma.VisitorWhereInput;
};
export type VisitorOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type VisitorCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chatSpaceId?: Prisma.SortOrder;
    sessionToken?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    displayName?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type VisitorMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chatSpaceId?: Prisma.SortOrder;
    sessionToken?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    displayName?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type VisitorMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chatSpaceId?: Prisma.SortOrder;
    sessionToken?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    displayName?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type VisitorScalarRelationFilter = {
    is?: Prisma.VisitorWhereInput;
    isNot?: Prisma.VisitorWhereInput;
};
export type VisitorCreateNestedManyWithoutChatSpaceInput = {
    create?: Prisma.XOR<Prisma.VisitorCreateWithoutChatSpaceInput, Prisma.VisitorUncheckedCreateWithoutChatSpaceInput> | Prisma.VisitorCreateWithoutChatSpaceInput[] | Prisma.VisitorUncheckedCreateWithoutChatSpaceInput[];
    connectOrCreate?: Prisma.VisitorCreateOrConnectWithoutChatSpaceInput | Prisma.VisitorCreateOrConnectWithoutChatSpaceInput[];
    createMany?: Prisma.VisitorCreateManyChatSpaceInputEnvelope;
    connect?: Prisma.VisitorWhereUniqueInput | Prisma.VisitorWhereUniqueInput[];
};
export type VisitorUncheckedCreateNestedManyWithoutChatSpaceInput = {
    create?: Prisma.XOR<Prisma.VisitorCreateWithoutChatSpaceInput, Prisma.VisitorUncheckedCreateWithoutChatSpaceInput> | Prisma.VisitorCreateWithoutChatSpaceInput[] | Prisma.VisitorUncheckedCreateWithoutChatSpaceInput[];
    connectOrCreate?: Prisma.VisitorCreateOrConnectWithoutChatSpaceInput | Prisma.VisitorCreateOrConnectWithoutChatSpaceInput[];
    createMany?: Prisma.VisitorCreateManyChatSpaceInputEnvelope;
    connect?: Prisma.VisitorWhereUniqueInput | Prisma.VisitorWhereUniqueInput[];
};
export type VisitorUpdateManyWithoutChatSpaceNestedInput = {
    create?: Prisma.XOR<Prisma.VisitorCreateWithoutChatSpaceInput, Prisma.VisitorUncheckedCreateWithoutChatSpaceInput> | Prisma.VisitorCreateWithoutChatSpaceInput[] | Prisma.VisitorUncheckedCreateWithoutChatSpaceInput[];
    connectOrCreate?: Prisma.VisitorCreateOrConnectWithoutChatSpaceInput | Prisma.VisitorCreateOrConnectWithoutChatSpaceInput[];
    upsert?: Prisma.VisitorUpsertWithWhereUniqueWithoutChatSpaceInput | Prisma.VisitorUpsertWithWhereUniqueWithoutChatSpaceInput[];
    createMany?: Prisma.VisitorCreateManyChatSpaceInputEnvelope;
    set?: Prisma.VisitorWhereUniqueInput | Prisma.VisitorWhereUniqueInput[];
    disconnect?: Prisma.VisitorWhereUniqueInput | Prisma.VisitorWhereUniqueInput[];
    delete?: Prisma.VisitorWhereUniqueInput | Prisma.VisitorWhereUniqueInput[];
    connect?: Prisma.VisitorWhereUniqueInput | Prisma.VisitorWhereUniqueInput[];
    update?: Prisma.VisitorUpdateWithWhereUniqueWithoutChatSpaceInput | Prisma.VisitorUpdateWithWhereUniqueWithoutChatSpaceInput[];
    updateMany?: Prisma.VisitorUpdateManyWithWhereWithoutChatSpaceInput | Prisma.VisitorUpdateManyWithWhereWithoutChatSpaceInput[];
    deleteMany?: Prisma.VisitorScalarWhereInput | Prisma.VisitorScalarWhereInput[];
};
export type VisitorUncheckedUpdateManyWithoutChatSpaceNestedInput = {
    create?: Prisma.XOR<Prisma.VisitorCreateWithoutChatSpaceInput, Prisma.VisitorUncheckedCreateWithoutChatSpaceInput> | Prisma.VisitorCreateWithoutChatSpaceInput[] | Prisma.VisitorUncheckedCreateWithoutChatSpaceInput[];
    connectOrCreate?: Prisma.VisitorCreateOrConnectWithoutChatSpaceInput | Prisma.VisitorCreateOrConnectWithoutChatSpaceInput[];
    upsert?: Prisma.VisitorUpsertWithWhereUniqueWithoutChatSpaceInput | Prisma.VisitorUpsertWithWhereUniqueWithoutChatSpaceInput[];
    createMany?: Prisma.VisitorCreateManyChatSpaceInputEnvelope;
    set?: Prisma.VisitorWhereUniqueInput | Prisma.VisitorWhereUniqueInput[];
    disconnect?: Prisma.VisitorWhereUniqueInput | Prisma.VisitorWhereUniqueInput[];
    delete?: Prisma.VisitorWhereUniqueInput | Prisma.VisitorWhereUniqueInput[];
    connect?: Prisma.VisitorWhereUniqueInput | Prisma.VisitorWhereUniqueInput[];
    update?: Prisma.VisitorUpdateWithWhereUniqueWithoutChatSpaceInput | Prisma.VisitorUpdateWithWhereUniqueWithoutChatSpaceInput[];
    updateMany?: Prisma.VisitorUpdateManyWithWhereWithoutChatSpaceInput | Prisma.VisitorUpdateManyWithWhereWithoutChatSpaceInput[];
    deleteMany?: Prisma.VisitorScalarWhereInput | Prisma.VisitorScalarWhereInput[];
};
export type VisitorCreateNestedOneWithoutThreadsInput = {
    create?: Prisma.XOR<Prisma.VisitorCreateWithoutThreadsInput, Prisma.VisitorUncheckedCreateWithoutThreadsInput>;
    connectOrCreate?: Prisma.VisitorCreateOrConnectWithoutThreadsInput;
    connect?: Prisma.VisitorWhereUniqueInput;
};
export type VisitorUpdateOneRequiredWithoutThreadsNestedInput = {
    create?: Prisma.XOR<Prisma.VisitorCreateWithoutThreadsInput, Prisma.VisitorUncheckedCreateWithoutThreadsInput>;
    connectOrCreate?: Prisma.VisitorCreateOrConnectWithoutThreadsInput;
    upsert?: Prisma.VisitorUpsertWithoutThreadsInput;
    connect?: Prisma.VisitorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VisitorUpdateToOneWithWhereWithoutThreadsInput, Prisma.VisitorUpdateWithoutThreadsInput>, Prisma.VisitorUncheckedUpdateWithoutThreadsInput>;
};
export type VisitorCreateWithoutChatSpaceInput = {
    id?: string;
    sessionToken: string;
    email?: string | null;
    displayName?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    threads?: Prisma.ThreadCreateNestedManyWithoutVisitorInput;
};
export type VisitorUncheckedCreateWithoutChatSpaceInput = {
    id?: string;
    sessionToken: string;
    email?: string | null;
    displayName?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    threads?: Prisma.ThreadUncheckedCreateNestedManyWithoutVisitorInput;
};
export type VisitorCreateOrConnectWithoutChatSpaceInput = {
    where: Prisma.VisitorWhereUniqueInput;
    create: Prisma.XOR<Prisma.VisitorCreateWithoutChatSpaceInput, Prisma.VisitorUncheckedCreateWithoutChatSpaceInput>;
};
export type VisitorCreateManyChatSpaceInputEnvelope = {
    data: Prisma.VisitorCreateManyChatSpaceInput | Prisma.VisitorCreateManyChatSpaceInput[];
    skipDuplicates?: boolean;
};
export type VisitorUpsertWithWhereUniqueWithoutChatSpaceInput = {
    where: Prisma.VisitorWhereUniqueInput;
    update: Prisma.XOR<Prisma.VisitorUpdateWithoutChatSpaceInput, Prisma.VisitorUncheckedUpdateWithoutChatSpaceInput>;
    create: Prisma.XOR<Prisma.VisitorCreateWithoutChatSpaceInput, Prisma.VisitorUncheckedCreateWithoutChatSpaceInput>;
};
export type VisitorUpdateWithWhereUniqueWithoutChatSpaceInput = {
    where: Prisma.VisitorWhereUniqueInput;
    data: Prisma.XOR<Prisma.VisitorUpdateWithoutChatSpaceInput, Prisma.VisitorUncheckedUpdateWithoutChatSpaceInput>;
};
export type VisitorUpdateManyWithWhereWithoutChatSpaceInput = {
    where: Prisma.VisitorScalarWhereInput;
    data: Prisma.XOR<Prisma.VisitorUpdateManyMutationInput, Prisma.VisitorUncheckedUpdateManyWithoutChatSpaceInput>;
};
export type VisitorScalarWhereInput = {
    AND?: Prisma.VisitorScalarWhereInput | Prisma.VisitorScalarWhereInput[];
    OR?: Prisma.VisitorScalarWhereInput[];
    NOT?: Prisma.VisitorScalarWhereInput | Prisma.VisitorScalarWhereInput[];
    id?: Prisma.StringFilter<"Visitor"> | string;
    chatSpaceId?: Prisma.StringFilter<"Visitor"> | string;
    sessionToken?: Prisma.StringFilter<"Visitor"> | string;
    email?: Prisma.StringNullableFilter<"Visitor"> | string | null;
    displayName?: Prisma.StringNullableFilter<"Visitor"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"Visitor">;
    createdAt?: Prisma.DateTimeFilter<"Visitor"> | Date | string;
};
export type VisitorCreateWithoutThreadsInput = {
    id?: string;
    sessionToken: string;
    email?: string | null;
    displayName?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    chatSpace: Prisma.ChatSpaceCreateNestedOneWithoutVisitorsInput;
};
export type VisitorUncheckedCreateWithoutThreadsInput = {
    id?: string;
    chatSpaceId: string;
    sessionToken: string;
    email?: string | null;
    displayName?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type VisitorCreateOrConnectWithoutThreadsInput = {
    where: Prisma.VisitorWhereUniqueInput;
    create: Prisma.XOR<Prisma.VisitorCreateWithoutThreadsInput, Prisma.VisitorUncheckedCreateWithoutThreadsInput>;
};
export type VisitorUpsertWithoutThreadsInput = {
    update: Prisma.XOR<Prisma.VisitorUpdateWithoutThreadsInput, Prisma.VisitorUncheckedUpdateWithoutThreadsInput>;
    create: Prisma.XOR<Prisma.VisitorCreateWithoutThreadsInput, Prisma.VisitorUncheckedCreateWithoutThreadsInput>;
    where?: Prisma.VisitorWhereInput;
};
export type VisitorUpdateToOneWithWhereWithoutThreadsInput = {
    where?: Prisma.VisitorWhereInput;
    data: Prisma.XOR<Prisma.VisitorUpdateWithoutThreadsInput, Prisma.VisitorUncheckedUpdateWithoutThreadsInput>;
};
export type VisitorUpdateWithoutThreadsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionToken?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    displayName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chatSpace?: Prisma.ChatSpaceUpdateOneRequiredWithoutVisitorsNestedInput;
};
export type VisitorUncheckedUpdateWithoutThreadsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    chatSpaceId?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionToken?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    displayName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VisitorCreateManyChatSpaceInput = {
    id?: string;
    sessionToken: string;
    email?: string | null;
    displayName?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type VisitorUpdateWithoutChatSpaceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionToken?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    displayName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    threads?: Prisma.ThreadUpdateManyWithoutVisitorNestedInput;
};
export type VisitorUncheckedUpdateWithoutChatSpaceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionToken?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    displayName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    threads?: Prisma.ThreadUncheckedUpdateManyWithoutVisitorNestedInput;
};
export type VisitorUncheckedUpdateManyWithoutChatSpaceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionToken?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    displayName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VisitorCountOutputType = {
    threads: number;
};
export type VisitorCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    threads?: boolean | VisitorCountOutputTypeCountThreadsArgs;
};
export type VisitorCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitorCountOutputTypeSelect<ExtArgs> | null;
};
export type VisitorCountOutputTypeCountThreadsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ThreadWhereInput;
};
export type VisitorSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    chatSpaceId?: boolean;
    sessionToken?: boolean;
    email?: boolean;
    displayName?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    chatSpace?: boolean | Prisma.ChatSpaceDefaultArgs<ExtArgs>;
    threads?: boolean | Prisma.Visitor$threadsArgs<ExtArgs>;
    _count?: boolean | Prisma.VisitorCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["visitor"]>;
export type VisitorSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    chatSpaceId?: boolean;
    sessionToken?: boolean;
    email?: boolean;
    displayName?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    chatSpace?: boolean | Prisma.ChatSpaceDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["visitor"]>;
export type VisitorSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    chatSpaceId?: boolean;
    sessionToken?: boolean;
    email?: boolean;
    displayName?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    chatSpace?: boolean | Prisma.ChatSpaceDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["visitor"]>;
export type VisitorSelectScalar = {
    id?: boolean;
    chatSpaceId?: boolean;
    sessionToken?: boolean;
    email?: boolean;
    displayName?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
};
export type VisitorOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "chatSpaceId" | "sessionToken" | "email" | "displayName" | "metadata" | "createdAt", ExtArgs["result"]["visitor"]>;
export type VisitorInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    chatSpace?: boolean | Prisma.ChatSpaceDefaultArgs<ExtArgs>;
    threads?: boolean | Prisma.Visitor$threadsArgs<ExtArgs>;
    _count?: boolean | Prisma.VisitorCountOutputTypeDefaultArgs<ExtArgs>;
};
export type VisitorIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    chatSpace?: boolean | Prisma.ChatSpaceDefaultArgs<ExtArgs>;
};
export type VisitorIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    chatSpace?: boolean | Prisma.ChatSpaceDefaultArgs<ExtArgs>;
};
export type $VisitorPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Visitor";
    objects: {
        chatSpace: Prisma.$ChatSpacePayload<ExtArgs>;
        threads: Prisma.$ThreadPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        chatSpaceId: string;
        sessionToken: string;
        email: string | null;
        displayName: string | null;
        metadata: runtime.JsonValue | null;
        createdAt: Date;
    }, ExtArgs["result"]["visitor"]>;
    composites: {};
};
export type VisitorGetPayload<S extends boolean | null | undefined | VisitorDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VisitorPayload, S>;
export type VisitorCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VisitorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VisitorCountAggregateInputType | true;
};
export interface VisitorDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Visitor'];
        meta: {
            name: 'Visitor';
        };
    };
    findUnique<T extends VisitorFindUniqueArgs>(args: Prisma.SelectSubset<T, VisitorFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VisitorClient<runtime.Types.Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends VisitorFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VisitorFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VisitorClient<runtime.Types.Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends VisitorFindFirstArgs>(args?: Prisma.SelectSubset<T, VisitorFindFirstArgs<ExtArgs>>): Prisma.Prisma__VisitorClient<runtime.Types.Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends VisitorFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VisitorFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VisitorClient<runtime.Types.Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends VisitorFindManyArgs>(args?: Prisma.SelectSubset<T, VisitorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends VisitorCreateArgs>(args: Prisma.SelectSubset<T, VisitorCreateArgs<ExtArgs>>): Prisma.Prisma__VisitorClient<runtime.Types.Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends VisitorCreateManyArgs>(args?: Prisma.SelectSubset<T, VisitorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends VisitorCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, VisitorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends VisitorDeleteArgs>(args: Prisma.SelectSubset<T, VisitorDeleteArgs<ExtArgs>>): Prisma.Prisma__VisitorClient<runtime.Types.Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends VisitorUpdateArgs>(args: Prisma.SelectSubset<T, VisitorUpdateArgs<ExtArgs>>): Prisma.Prisma__VisitorClient<runtime.Types.Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends VisitorDeleteManyArgs>(args?: Prisma.SelectSubset<T, VisitorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends VisitorUpdateManyArgs>(args: Prisma.SelectSubset<T, VisitorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends VisitorUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, VisitorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends VisitorUpsertArgs>(args: Prisma.SelectSubset<T, VisitorUpsertArgs<ExtArgs>>): Prisma.Prisma__VisitorClient<runtime.Types.Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends VisitorCountArgs>(args?: Prisma.Subset<T, VisitorCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VisitorCountAggregateOutputType> : number>;
    aggregate<T extends VisitorAggregateArgs>(args: Prisma.Subset<T, VisitorAggregateArgs>): Prisma.PrismaPromise<GetVisitorAggregateType<T>>;
    groupBy<T extends VisitorGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VisitorGroupByArgs['orderBy'];
    } : {
        orderBy?: VisitorGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VisitorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisitorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: VisitorFieldRefs;
}
export interface Prisma__VisitorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    chatSpace<T extends Prisma.ChatSpaceDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ChatSpaceDefaultArgs<ExtArgs>>): Prisma.Prisma__ChatSpaceClient<runtime.Types.Result.GetResult<Prisma.$ChatSpacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    threads<T extends Prisma.Visitor$threadsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Visitor$threadsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface VisitorFieldRefs {
    readonly id: Prisma.FieldRef<"Visitor", 'String'>;
    readonly chatSpaceId: Prisma.FieldRef<"Visitor", 'String'>;
    readonly sessionToken: Prisma.FieldRef<"Visitor", 'String'>;
    readonly email: Prisma.FieldRef<"Visitor", 'String'>;
    readonly displayName: Prisma.FieldRef<"Visitor", 'String'>;
    readonly metadata: Prisma.FieldRef<"Visitor", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"Visitor", 'DateTime'>;
}
export type VisitorFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitorSelect<ExtArgs> | null;
    omit?: Prisma.VisitorOmit<ExtArgs> | null;
    include?: Prisma.VisitorInclude<ExtArgs> | null;
    where: Prisma.VisitorWhereUniqueInput;
};
export type VisitorFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitorSelect<ExtArgs> | null;
    omit?: Prisma.VisitorOmit<ExtArgs> | null;
    include?: Prisma.VisitorInclude<ExtArgs> | null;
    where: Prisma.VisitorWhereUniqueInput;
};
export type VisitorFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitorSelect<ExtArgs> | null;
    omit?: Prisma.VisitorOmit<ExtArgs> | null;
    include?: Prisma.VisitorInclude<ExtArgs> | null;
    where?: Prisma.VisitorWhereInput;
    orderBy?: Prisma.VisitorOrderByWithRelationInput | Prisma.VisitorOrderByWithRelationInput[];
    cursor?: Prisma.VisitorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VisitorScalarFieldEnum | Prisma.VisitorScalarFieldEnum[];
};
export type VisitorFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitorSelect<ExtArgs> | null;
    omit?: Prisma.VisitorOmit<ExtArgs> | null;
    include?: Prisma.VisitorInclude<ExtArgs> | null;
    where?: Prisma.VisitorWhereInput;
    orderBy?: Prisma.VisitorOrderByWithRelationInput | Prisma.VisitorOrderByWithRelationInput[];
    cursor?: Prisma.VisitorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VisitorScalarFieldEnum | Prisma.VisitorScalarFieldEnum[];
};
export type VisitorFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitorSelect<ExtArgs> | null;
    omit?: Prisma.VisitorOmit<ExtArgs> | null;
    include?: Prisma.VisitorInclude<ExtArgs> | null;
    where?: Prisma.VisitorWhereInput;
    orderBy?: Prisma.VisitorOrderByWithRelationInput | Prisma.VisitorOrderByWithRelationInput[];
    cursor?: Prisma.VisitorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VisitorScalarFieldEnum | Prisma.VisitorScalarFieldEnum[];
};
export type VisitorCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitorSelect<ExtArgs> | null;
    omit?: Prisma.VisitorOmit<ExtArgs> | null;
    include?: Prisma.VisitorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VisitorCreateInput, Prisma.VisitorUncheckedCreateInput>;
};
export type VisitorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.VisitorCreateManyInput | Prisma.VisitorCreateManyInput[];
    skipDuplicates?: boolean;
};
export type VisitorCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitorSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VisitorOmit<ExtArgs> | null;
    data: Prisma.VisitorCreateManyInput | Prisma.VisitorCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.VisitorIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type VisitorUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitorSelect<ExtArgs> | null;
    omit?: Prisma.VisitorOmit<ExtArgs> | null;
    include?: Prisma.VisitorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VisitorUpdateInput, Prisma.VisitorUncheckedUpdateInput>;
    where: Prisma.VisitorWhereUniqueInput;
};
export type VisitorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.VisitorUpdateManyMutationInput, Prisma.VisitorUncheckedUpdateManyInput>;
    where?: Prisma.VisitorWhereInput;
    limit?: number;
};
export type VisitorUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitorSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VisitorOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VisitorUpdateManyMutationInput, Prisma.VisitorUncheckedUpdateManyInput>;
    where?: Prisma.VisitorWhereInput;
    limit?: number;
    include?: Prisma.VisitorIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type VisitorUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitorSelect<ExtArgs> | null;
    omit?: Prisma.VisitorOmit<ExtArgs> | null;
    include?: Prisma.VisitorInclude<ExtArgs> | null;
    where: Prisma.VisitorWhereUniqueInput;
    create: Prisma.XOR<Prisma.VisitorCreateInput, Prisma.VisitorUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.VisitorUpdateInput, Prisma.VisitorUncheckedUpdateInput>;
};
export type VisitorDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitorSelect<ExtArgs> | null;
    omit?: Prisma.VisitorOmit<ExtArgs> | null;
    include?: Prisma.VisitorInclude<ExtArgs> | null;
    where: Prisma.VisitorWhereUniqueInput;
};
export type VisitorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VisitorWhereInput;
    limit?: number;
};
export type Visitor$threadsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type VisitorDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitorSelect<ExtArgs> | null;
    omit?: Prisma.VisitorOmit<ExtArgs> | null;
    include?: Prisma.VisitorInclude<ExtArgs> | null;
};
export {};
