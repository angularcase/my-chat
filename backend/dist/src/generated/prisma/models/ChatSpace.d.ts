import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ChatSpaceModel = runtime.Types.Result.DefaultSelection<Prisma.$ChatSpacePayload>;
export type AggregateChatSpace = {
    _count: ChatSpaceCountAggregateOutputType | null;
    _min: ChatSpaceMinAggregateOutputType | null;
    _max: ChatSpaceMaxAggregateOutputType | null;
};
export type ChatSpaceMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    name: string | null;
    widgetKey: string | null;
    createdAt: Date | null;
};
export type ChatSpaceMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    name: string | null;
    widgetKey: string | null;
    createdAt: Date | null;
};
export type ChatSpaceCountAggregateOutputType = {
    id: number;
    organizationId: number;
    name: number;
    widgetKey: number;
    allowedDomains: number;
    settings: number;
    createdAt: number;
    _all: number;
};
export type ChatSpaceMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    widgetKey?: true;
    createdAt?: true;
};
export type ChatSpaceMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    widgetKey?: true;
    createdAt?: true;
};
export type ChatSpaceCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    widgetKey?: true;
    allowedDomains?: true;
    settings?: true;
    createdAt?: true;
    _all?: true;
};
export type ChatSpaceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChatSpaceWhereInput;
    orderBy?: Prisma.ChatSpaceOrderByWithRelationInput | Prisma.ChatSpaceOrderByWithRelationInput[];
    cursor?: Prisma.ChatSpaceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ChatSpaceCountAggregateInputType;
    _min?: ChatSpaceMinAggregateInputType;
    _max?: ChatSpaceMaxAggregateInputType;
};
export type GetChatSpaceAggregateType<T extends ChatSpaceAggregateArgs> = {
    [P in keyof T & keyof AggregateChatSpace]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateChatSpace[P]> : Prisma.GetScalarType<T[P], AggregateChatSpace[P]>;
};
export type ChatSpaceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChatSpaceWhereInput;
    orderBy?: Prisma.ChatSpaceOrderByWithAggregationInput | Prisma.ChatSpaceOrderByWithAggregationInput[];
    by: Prisma.ChatSpaceScalarFieldEnum[] | Prisma.ChatSpaceScalarFieldEnum;
    having?: Prisma.ChatSpaceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ChatSpaceCountAggregateInputType | true;
    _min?: ChatSpaceMinAggregateInputType;
    _max?: ChatSpaceMaxAggregateInputType;
};
export type ChatSpaceGroupByOutputType = {
    id: string;
    organizationId: string;
    name: string;
    widgetKey: string;
    allowedDomains: string[];
    settings: runtime.JsonValue | null;
    createdAt: Date;
    _count: ChatSpaceCountAggregateOutputType | null;
    _min: ChatSpaceMinAggregateOutputType | null;
    _max: ChatSpaceMaxAggregateOutputType | null;
};
type GetChatSpaceGroupByPayload<T extends ChatSpaceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ChatSpaceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ChatSpaceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ChatSpaceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ChatSpaceGroupByOutputType[P]>;
}>>;
export type ChatSpaceWhereInput = {
    AND?: Prisma.ChatSpaceWhereInput | Prisma.ChatSpaceWhereInput[];
    OR?: Prisma.ChatSpaceWhereInput[];
    NOT?: Prisma.ChatSpaceWhereInput | Prisma.ChatSpaceWhereInput[];
    id?: Prisma.StringFilter<"ChatSpace"> | string;
    organizationId?: Prisma.StringFilter<"ChatSpace"> | string;
    name?: Prisma.StringFilter<"ChatSpace"> | string;
    widgetKey?: Prisma.StringFilter<"ChatSpace"> | string;
    allowedDomains?: Prisma.StringNullableListFilter<"ChatSpace">;
    settings?: Prisma.JsonNullableFilter<"ChatSpace">;
    createdAt?: Prisma.DateTimeFilter<"ChatSpace"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    threads?: Prisma.ThreadListRelationFilter;
    visitors?: Prisma.VisitorListRelationFilter;
};
export type ChatSpaceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    widgetKey?: Prisma.SortOrder;
    allowedDomains?: Prisma.SortOrder;
    settings?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    threads?: Prisma.ThreadOrderByRelationAggregateInput;
    visitors?: Prisma.VisitorOrderByRelationAggregateInput;
};
export type ChatSpaceWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    widgetKey?: string;
    AND?: Prisma.ChatSpaceWhereInput | Prisma.ChatSpaceWhereInput[];
    OR?: Prisma.ChatSpaceWhereInput[];
    NOT?: Prisma.ChatSpaceWhereInput | Prisma.ChatSpaceWhereInput[];
    organizationId?: Prisma.StringFilter<"ChatSpace"> | string;
    name?: Prisma.StringFilter<"ChatSpace"> | string;
    allowedDomains?: Prisma.StringNullableListFilter<"ChatSpace">;
    settings?: Prisma.JsonNullableFilter<"ChatSpace">;
    createdAt?: Prisma.DateTimeFilter<"ChatSpace"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    threads?: Prisma.ThreadListRelationFilter;
    visitors?: Prisma.VisitorListRelationFilter;
}, "id" | "widgetKey">;
export type ChatSpaceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    widgetKey?: Prisma.SortOrder;
    allowedDomains?: Prisma.SortOrder;
    settings?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ChatSpaceCountOrderByAggregateInput;
    _max?: Prisma.ChatSpaceMaxOrderByAggregateInput;
    _min?: Prisma.ChatSpaceMinOrderByAggregateInput;
};
export type ChatSpaceScalarWhereWithAggregatesInput = {
    AND?: Prisma.ChatSpaceScalarWhereWithAggregatesInput | Prisma.ChatSpaceScalarWhereWithAggregatesInput[];
    OR?: Prisma.ChatSpaceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ChatSpaceScalarWhereWithAggregatesInput | Prisma.ChatSpaceScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ChatSpace"> | string;
    organizationId?: Prisma.StringWithAggregatesFilter<"ChatSpace"> | string;
    name?: Prisma.StringWithAggregatesFilter<"ChatSpace"> | string;
    widgetKey?: Prisma.StringWithAggregatesFilter<"ChatSpace"> | string;
    allowedDomains?: Prisma.StringNullableListFilter<"ChatSpace">;
    settings?: Prisma.JsonNullableWithAggregatesFilter<"ChatSpace">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ChatSpace"> | Date | string;
};
export type ChatSpaceCreateInput = {
    id?: string;
    name: string;
    widgetKey: string;
    allowedDomains?: Prisma.ChatSpaceCreateallowedDomainsInput | string[];
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutChatSpacesInput;
    threads?: Prisma.ThreadCreateNestedManyWithoutChatSpaceInput;
    visitors?: Prisma.VisitorCreateNestedManyWithoutChatSpaceInput;
};
export type ChatSpaceUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    name: string;
    widgetKey: string;
    allowedDomains?: Prisma.ChatSpaceCreateallowedDomainsInput | string[];
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    threads?: Prisma.ThreadUncheckedCreateNestedManyWithoutChatSpaceInput;
    visitors?: Prisma.VisitorUncheckedCreateNestedManyWithoutChatSpaceInput;
};
export type ChatSpaceUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    widgetKey?: Prisma.StringFieldUpdateOperationsInput | string;
    allowedDomains?: Prisma.ChatSpaceUpdateallowedDomainsInput | string[];
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutChatSpacesNestedInput;
    threads?: Prisma.ThreadUpdateManyWithoutChatSpaceNestedInput;
    visitors?: Prisma.VisitorUpdateManyWithoutChatSpaceNestedInput;
};
export type ChatSpaceUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    widgetKey?: Prisma.StringFieldUpdateOperationsInput | string;
    allowedDomains?: Prisma.ChatSpaceUpdateallowedDomainsInput | string[];
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    threads?: Prisma.ThreadUncheckedUpdateManyWithoutChatSpaceNestedInput;
    visitors?: Prisma.VisitorUncheckedUpdateManyWithoutChatSpaceNestedInput;
};
export type ChatSpaceCreateManyInput = {
    id?: string;
    organizationId: string;
    name: string;
    widgetKey: string;
    allowedDomains?: Prisma.ChatSpaceCreateallowedDomainsInput | string[];
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ChatSpaceUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    widgetKey?: Prisma.StringFieldUpdateOperationsInput | string;
    allowedDomains?: Prisma.ChatSpaceUpdateallowedDomainsInput | string[];
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChatSpaceUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    widgetKey?: Prisma.StringFieldUpdateOperationsInput | string;
    allowedDomains?: Prisma.ChatSpaceUpdateallowedDomainsInput | string[];
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChatSpaceListRelationFilter = {
    every?: Prisma.ChatSpaceWhereInput;
    some?: Prisma.ChatSpaceWhereInput;
    none?: Prisma.ChatSpaceWhereInput;
};
export type ChatSpaceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type ChatSpaceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    widgetKey?: Prisma.SortOrder;
    allowedDomains?: Prisma.SortOrder;
    settings?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ChatSpaceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    widgetKey?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ChatSpaceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    widgetKey?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ChatSpaceScalarRelationFilter = {
    is?: Prisma.ChatSpaceWhereInput;
    isNot?: Prisma.ChatSpaceWhereInput;
};
export type ChatSpaceCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.ChatSpaceCreateWithoutOrganizationInput, Prisma.ChatSpaceUncheckedCreateWithoutOrganizationInput> | Prisma.ChatSpaceCreateWithoutOrganizationInput[] | Prisma.ChatSpaceUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.ChatSpaceCreateOrConnectWithoutOrganizationInput | Prisma.ChatSpaceCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.ChatSpaceCreateManyOrganizationInputEnvelope;
    connect?: Prisma.ChatSpaceWhereUniqueInput | Prisma.ChatSpaceWhereUniqueInput[];
};
export type ChatSpaceUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.ChatSpaceCreateWithoutOrganizationInput, Prisma.ChatSpaceUncheckedCreateWithoutOrganizationInput> | Prisma.ChatSpaceCreateWithoutOrganizationInput[] | Prisma.ChatSpaceUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.ChatSpaceCreateOrConnectWithoutOrganizationInput | Prisma.ChatSpaceCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.ChatSpaceCreateManyOrganizationInputEnvelope;
    connect?: Prisma.ChatSpaceWhereUniqueInput | Prisma.ChatSpaceWhereUniqueInput[];
};
export type ChatSpaceUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.ChatSpaceCreateWithoutOrganizationInput, Prisma.ChatSpaceUncheckedCreateWithoutOrganizationInput> | Prisma.ChatSpaceCreateWithoutOrganizationInput[] | Prisma.ChatSpaceUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.ChatSpaceCreateOrConnectWithoutOrganizationInput | Prisma.ChatSpaceCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.ChatSpaceUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.ChatSpaceUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.ChatSpaceCreateManyOrganizationInputEnvelope;
    set?: Prisma.ChatSpaceWhereUniqueInput | Prisma.ChatSpaceWhereUniqueInput[];
    disconnect?: Prisma.ChatSpaceWhereUniqueInput | Prisma.ChatSpaceWhereUniqueInput[];
    delete?: Prisma.ChatSpaceWhereUniqueInput | Prisma.ChatSpaceWhereUniqueInput[];
    connect?: Prisma.ChatSpaceWhereUniqueInput | Prisma.ChatSpaceWhereUniqueInput[];
    update?: Prisma.ChatSpaceUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.ChatSpaceUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.ChatSpaceUpdateManyWithWhereWithoutOrganizationInput | Prisma.ChatSpaceUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.ChatSpaceScalarWhereInput | Prisma.ChatSpaceScalarWhereInput[];
};
export type ChatSpaceUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.ChatSpaceCreateWithoutOrganizationInput, Prisma.ChatSpaceUncheckedCreateWithoutOrganizationInput> | Prisma.ChatSpaceCreateWithoutOrganizationInput[] | Prisma.ChatSpaceUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.ChatSpaceCreateOrConnectWithoutOrganizationInput | Prisma.ChatSpaceCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.ChatSpaceUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.ChatSpaceUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.ChatSpaceCreateManyOrganizationInputEnvelope;
    set?: Prisma.ChatSpaceWhereUniqueInput | Prisma.ChatSpaceWhereUniqueInput[];
    disconnect?: Prisma.ChatSpaceWhereUniqueInput | Prisma.ChatSpaceWhereUniqueInput[];
    delete?: Prisma.ChatSpaceWhereUniqueInput | Prisma.ChatSpaceWhereUniqueInput[];
    connect?: Prisma.ChatSpaceWhereUniqueInput | Prisma.ChatSpaceWhereUniqueInput[];
    update?: Prisma.ChatSpaceUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.ChatSpaceUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.ChatSpaceUpdateManyWithWhereWithoutOrganizationInput | Prisma.ChatSpaceUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.ChatSpaceScalarWhereInput | Prisma.ChatSpaceScalarWhereInput[];
};
export type ChatSpaceCreateallowedDomainsInput = {
    set: string[];
};
export type ChatSpaceUpdateallowedDomainsInput = {
    set?: string[];
    push?: string | string[];
};
export type ChatSpaceCreateNestedOneWithoutVisitorsInput = {
    create?: Prisma.XOR<Prisma.ChatSpaceCreateWithoutVisitorsInput, Prisma.ChatSpaceUncheckedCreateWithoutVisitorsInput>;
    connectOrCreate?: Prisma.ChatSpaceCreateOrConnectWithoutVisitorsInput;
    connect?: Prisma.ChatSpaceWhereUniqueInput;
};
export type ChatSpaceUpdateOneRequiredWithoutVisitorsNestedInput = {
    create?: Prisma.XOR<Prisma.ChatSpaceCreateWithoutVisitorsInput, Prisma.ChatSpaceUncheckedCreateWithoutVisitorsInput>;
    connectOrCreate?: Prisma.ChatSpaceCreateOrConnectWithoutVisitorsInput;
    upsert?: Prisma.ChatSpaceUpsertWithoutVisitorsInput;
    connect?: Prisma.ChatSpaceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ChatSpaceUpdateToOneWithWhereWithoutVisitorsInput, Prisma.ChatSpaceUpdateWithoutVisitorsInput>, Prisma.ChatSpaceUncheckedUpdateWithoutVisitorsInput>;
};
export type ChatSpaceCreateNestedOneWithoutThreadsInput = {
    create?: Prisma.XOR<Prisma.ChatSpaceCreateWithoutThreadsInput, Prisma.ChatSpaceUncheckedCreateWithoutThreadsInput>;
    connectOrCreate?: Prisma.ChatSpaceCreateOrConnectWithoutThreadsInput;
    connect?: Prisma.ChatSpaceWhereUniqueInput;
};
export type ChatSpaceUpdateOneRequiredWithoutThreadsNestedInput = {
    create?: Prisma.XOR<Prisma.ChatSpaceCreateWithoutThreadsInput, Prisma.ChatSpaceUncheckedCreateWithoutThreadsInput>;
    connectOrCreate?: Prisma.ChatSpaceCreateOrConnectWithoutThreadsInput;
    upsert?: Prisma.ChatSpaceUpsertWithoutThreadsInput;
    connect?: Prisma.ChatSpaceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ChatSpaceUpdateToOneWithWhereWithoutThreadsInput, Prisma.ChatSpaceUpdateWithoutThreadsInput>, Prisma.ChatSpaceUncheckedUpdateWithoutThreadsInput>;
};
export type ChatSpaceCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    widgetKey: string;
    allowedDomains?: Prisma.ChatSpaceCreateallowedDomainsInput | string[];
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    threads?: Prisma.ThreadCreateNestedManyWithoutChatSpaceInput;
    visitors?: Prisma.VisitorCreateNestedManyWithoutChatSpaceInput;
};
export type ChatSpaceUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    widgetKey: string;
    allowedDomains?: Prisma.ChatSpaceCreateallowedDomainsInput | string[];
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    threads?: Prisma.ThreadUncheckedCreateNestedManyWithoutChatSpaceInput;
    visitors?: Prisma.VisitorUncheckedCreateNestedManyWithoutChatSpaceInput;
};
export type ChatSpaceCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.ChatSpaceWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChatSpaceCreateWithoutOrganizationInput, Prisma.ChatSpaceUncheckedCreateWithoutOrganizationInput>;
};
export type ChatSpaceCreateManyOrganizationInputEnvelope = {
    data: Prisma.ChatSpaceCreateManyOrganizationInput | Prisma.ChatSpaceCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type ChatSpaceUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.ChatSpaceWhereUniqueInput;
    update: Prisma.XOR<Prisma.ChatSpaceUpdateWithoutOrganizationInput, Prisma.ChatSpaceUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.ChatSpaceCreateWithoutOrganizationInput, Prisma.ChatSpaceUncheckedCreateWithoutOrganizationInput>;
};
export type ChatSpaceUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.ChatSpaceWhereUniqueInput;
    data: Prisma.XOR<Prisma.ChatSpaceUpdateWithoutOrganizationInput, Prisma.ChatSpaceUncheckedUpdateWithoutOrganizationInput>;
};
export type ChatSpaceUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.ChatSpaceScalarWhereInput;
    data: Prisma.XOR<Prisma.ChatSpaceUpdateManyMutationInput, Prisma.ChatSpaceUncheckedUpdateManyWithoutOrganizationInput>;
};
export type ChatSpaceScalarWhereInput = {
    AND?: Prisma.ChatSpaceScalarWhereInput | Prisma.ChatSpaceScalarWhereInput[];
    OR?: Prisma.ChatSpaceScalarWhereInput[];
    NOT?: Prisma.ChatSpaceScalarWhereInput | Prisma.ChatSpaceScalarWhereInput[];
    id?: Prisma.StringFilter<"ChatSpace"> | string;
    organizationId?: Prisma.StringFilter<"ChatSpace"> | string;
    name?: Prisma.StringFilter<"ChatSpace"> | string;
    widgetKey?: Prisma.StringFilter<"ChatSpace"> | string;
    allowedDomains?: Prisma.StringNullableListFilter<"ChatSpace">;
    settings?: Prisma.JsonNullableFilter<"ChatSpace">;
    createdAt?: Prisma.DateTimeFilter<"ChatSpace"> | Date | string;
};
export type ChatSpaceCreateWithoutVisitorsInput = {
    id?: string;
    name: string;
    widgetKey: string;
    allowedDomains?: Prisma.ChatSpaceCreateallowedDomainsInput | string[];
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutChatSpacesInput;
    threads?: Prisma.ThreadCreateNestedManyWithoutChatSpaceInput;
};
export type ChatSpaceUncheckedCreateWithoutVisitorsInput = {
    id?: string;
    organizationId: string;
    name: string;
    widgetKey: string;
    allowedDomains?: Prisma.ChatSpaceCreateallowedDomainsInput | string[];
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    threads?: Prisma.ThreadUncheckedCreateNestedManyWithoutChatSpaceInput;
};
export type ChatSpaceCreateOrConnectWithoutVisitorsInput = {
    where: Prisma.ChatSpaceWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChatSpaceCreateWithoutVisitorsInput, Prisma.ChatSpaceUncheckedCreateWithoutVisitorsInput>;
};
export type ChatSpaceUpsertWithoutVisitorsInput = {
    update: Prisma.XOR<Prisma.ChatSpaceUpdateWithoutVisitorsInput, Prisma.ChatSpaceUncheckedUpdateWithoutVisitorsInput>;
    create: Prisma.XOR<Prisma.ChatSpaceCreateWithoutVisitorsInput, Prisma.ChatSpaceUncheckedCreateWithoutVisitorsInput>;
    where?: Prisma.ChatSpaceWhereInput;
};
export type ChatSpaceUpdateToOneWithWhereWithoutVisitorsInput = {
    where?: Prisma.ChatSpaceWhereInput;
    data: Prisma.XOR<Prisma.ChatSpaceUpdateWithoutVisitorsInput, Prisma.ChatSpaceUncheckedUpdateWithoutVisitorsInput>;
};
export type ChatSpaceUpdateWithoutVisitorsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    widgetKey?: Prisma.StringFieldUpdateOperationsInput | string;
    allowedDomains?: Prisma.ChatSpaceUpdateallowedDomainsInput | string[];
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutChatSpacesNestedInput;
    threads?: Prisma.ThreadUpdateManyWithoutChatSpaceNestedInput;
};
export type ChatSpaceUncheckedUpdateWithoutVisitorsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    widgetKey?: Prisma.StringFieldUpdateOperationsInput | string;
    allowedDomains?: Prisma.ChatSpaceUpdateallowedDomainsInput | string[];
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    threads?: Prisma.ThreadUncheckedUpdateManyWithoutChatSpaceNestedInput;
};
export type ChatSpaceCreateWithoutThreadsInput = {
    id?: string;
    name: string;
    widgetKey: string;
    allowedDomains?: Prisma.ChatSpaceCreateallowedDomainsInput | string[];
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutChatSpacesInput;
    visitors?: Prisma.VisitorCreateNestedManyWithoutChatSpaceInput;
};
export type ChatSpaceUncheckedCreateWithoutThreadsInput = {
    id?: string;
    organizationId: string;
    name: string;
    widgetKey: string;
    allowedDomains?: Prisma.ChatSpaceCreateallowedDomainsInput | string[];
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    visitors?: Prisma.VisitorUncheckedCreateNestedManyWithoutChatSpaceInput;
};
export type ChatSpaceCreateOrConnectWithoutThreadsInput = {
    where: Prisma.ChatSpaceWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChatSpaceCreateWithoutThreadsInput, Prisma.ChatSpaceUncheckedCreateWithoutThreadsInput>;
};
export type ChatSpaceUpsertWithoutThreadsInput = {
    update: Prisma.XOR<Prisma.ChatSpaceUpdateWithoutThreadsInput, Prisma.ChatSpaceUncheckedUpdateWithoutThreadsInput>;
    create: Prisma.XOR<Prisma.ChatSpaceCreateWithoutThreadsInput, Prisma.ChatSpaceUncheckedCreateWithoutThreadsInput>;
    where?: Prisma.ChatSpaceWhereInput;
};
export type ChatSpaceUpdateToOneWithWhereWithoutThreadsInput = {
    where?: Prisma.ChatSpaceWhereInput;
    data: Prisma.XOR<Prisma.ChatSpaceUpdateWithoutThreadsInput, Prisma.ChatSpaceUncheckedUpdateWithoutThreadsInput>;
};
export type ChatSpaceUpdateWithoutThreadsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    widgetKey?: Prisma.StringFieldUpdateOperationsInput | string;
    allowedDomains?: Prisma.ChatSpaceUpdateallowedDomainsInput | string[];
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutChatSpacesNestedInput;
    visitors?: Prisma.VisitorUpdateManyWithoutChatSpaceNestedInput;
};
export type ChatSpaceUncheckedUpdateWithoutThreadsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    widgetKey?: Prisma.StringFieldUpdateOperationsInput | string;
    allowedDomains?: Prisma.ChatSpaceUpdateallowedDomainsInput | string[];
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    visitors?: Prisma.VisitorUncheckedUpdateManyWithoutChatSpaceNestedInput;
};
export type ChatSpaceCreateManyOrganizationInput = {
    id?: string;
    name: string;
    widgetKey: string;
    allowedDomains?: Prisma.ChatSpaceCreateallowedDomainsInput | string[];
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ChatSpaceUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    widgetKey?: Prisma.StringFieldUpdateOperationsInput | string;
    allowedDomains?: Prisma.ChatSpaceUpdateallowedDomainsInput | string[];
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    threads?: Prisma.ThreadUpdateManyWithoutChatSpaceNestedInput;
    visitors?: Prisma.VisitorUpdateManyWithoutChatSpaceNestedInput;
};
export type ChatSpaceUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    widgetKey?: Prisma.StringFieldUpdateOperationsInput | string;
    allowedDomains?: Prisma.ChatSpaceUpdateallowedDomainsInput | string[];
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    threads?: Prisma.ThreadUncheckedUpdateManyWithoutChatSpaceNestedInput;
    visitors?: Prisma.VisitorUncheckedUpdateManyWithoutChatSpaceNestedInput;
};
export type ChatSpaceUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    widgetKey?: Prisma.StringFieldUpdateOperationsInput | string;
    allowedDomains?: Prisma.ChatSpaceUpdateallowedDomainsInput | string[];
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChatSpaceCountOutputType = {
    threads: number;
    visitors: number;
};
export type ChatSpaceCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    threads?: boolean | ChatSpaceCountOutputTypeCountThreadsArgs;
    visitors?: boolean | ChatSpaceCountOutputTypeCountVisitorsArgs;
};
export type ChatSpaceCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatSpaceCountOutputTypeSelect<ExtArgs> | null;
};
export type ChatSpaceCountOutputTypeCountThreadsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ThreadWhereInput;
};
export type ChatSpaceCountOutputTypeCountVisitorsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VisitorWhereInput;
};
export type ChatSpaceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    widgetKey?: boolean;
    allowedDomains?: boolean;
    settings?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    threads?: boolean | Prisma.ChatSpace$threadsArgs<ExtArgs>;
    visitors?: boolean | Prisma.ChatSpace$visitorsArgs<ExtArgs>;
    _count?: boolean | Prisma.ChatSpaceCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["chatSpace"]>;
export type ChatSpaceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    widgetKey?: boolean;
    allowedDomains?: boolean;
    settings?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["chatSpace"]>;
export type ChatSpaceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    widgetKey?: boolean;
    allowedDomains?: boolean;
    settings?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["chatSpace"]>;
export type ChatSpaceSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    widgetKey?: boolean;
    allowedDomains?: boolean;
    settings?: boolean;
    createdAt?: boolean;
};
export type ChatSpaceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "name" | "widgetKey" | "allowedDomains" | "settings" | "createdAt", ExtArgs["result"]["chatSpace"]>;
export type ChatSpaceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    threads?: boolean | Prisma.ChatSpace$threadsArgs<ExtArgs>;
    visitors?: boolean | Prisma.ChatSpace$visitorsArgs<ExtArgs>;
    _count?: boolean | Prisma.ChatSpaceCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ChatSpaceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type ChatSpaceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type $ChatSpacePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ChatSpace";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        threads: Prisma.$ThreadPayload<ExtArgs>[];
        visitors: Prisma.$VisitorPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        name: string;
        widgetKey: string;
        allowedDomains: string[];
        settings: runtime.JsonValue | null;
        createdAt: Date;
    }, ExtArgs["result"]["chatSpace"]>;
    composites: {};
};
export type ChatSpaceGetPayload<S extends boolean | null | undefined | ChatSpaceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ChatSpacePayload, S>;
export type ChatSpaceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ChatSpaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ChatSpaceCountAggregateInputType | true;
};
export interface ChatSpaceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ChatSpace'];
        meta: {
            name: 'ChatSpace';
        };
    };
    findUnique<T extends ChatSpaceFindUniqueArgs>(args: Prisma.SelectSubset<T, ChatSpaceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ChatSpaceClient<runtime.Types.Result.GetResult<Prisma.$ChatSpacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ChatSpaceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ChatSpaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ChatSpaceClient<runtime.Types.Result.GetResult<Prisma.$ChatSpacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ChatSpaceFindFirstArgs>(args?: Prisma.SelectSubset<T, ChatSpaceFindFirstArgs<ExtArgs>>): Prisma.Prisma__ChatSpaceClient<runtime.Types.Result.GetResult<Prisma.$ChatSpacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ChatSpaceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ChatSpaceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ChatSpaceClient<runtime.Types.Result.GetResult<Prisma.$ChatSpacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ChatSpaceFindManyArgs>(args?: Prisma.SelectSubset<T, ChatSpaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChatSpacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ChatSpaceCreateArgs>(args: Prisma.SelectSubset<T, ChatSpaceCreateArgs<ExtArgs>>): Prisma.Prisma__ChatSpaceClient<runtime.Types.Result.GetResult<Prisma.$ChatSpacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ChatSpaceCreateManyArgs>(args?: Prisma.SelectSubset<T, ChatSpaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ChatSpaceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ChatSpaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChatSpacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ChatSpaceDeleteArgs>(args: Prisma.SelectSubset<T, ChatSpaceDeleteArgs<ExtArgs>>): Prisma.Prisma__ChatSpaceClient<runtime.Types.Result.GetResult<Prisma.$ChatSpacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ChatSpaceUpdateArgs>(args: Prisma.SelectSubset<T, ChatSpaceUpdateArgs<ExtArgs>>): Prisma.Prisma__ChatSpaceClient<runtime.Types.Result.GetResult<Prisma.$ChatSpacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ChatSpaceDeleteManyArgs>(args?: Prisma.SelectSubset<T, ChatSpaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ChatSpaceUpdateManyArgs>(args: Prisma.SelectSubset<T, ChatSpaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ChatSpaceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ChatSpaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChatSpacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ChatSpaceUpsertArgs>(args: Prisma.SelectSubset<T, ChatSpaceUpsertArgs<ExtArgs>>): Prisma.Prisma__ChatSpaceClient<runtime.Types.Result.GetResult<Prisma.$ChatSpacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ChatSpaceCountArgs>(args?: Prisma.Subset<T, ChatSpaceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ChatSpaceCountAggregateOutputType> : number>;
    aggregate<T extends ChatSpaceAggregateArgs>(args: Prisma.Subset<T, ChatSpaceAggregateArgs>): Prisma.PrismaPromise<GetChatSpaceAggregateType<T>>;
    groupBy<T extends ChatSpaceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ChatSpaceGroupByArgs['orderBy'];
    } : {
        orderBy?: ChatSpaceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ChatSpaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatSpaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ChatSpaceFieldRefs;
}
export interface Prisma__ChatSpaceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    threads<T extends Prisma.ChatSpace$threadsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ChatSpace$threadsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    visitors<T extends Prisma.ChatSpace$visitorsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ChatSpace$visitorsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ChatSpaceFieldRefs {
    readonly id: Prisma.FieldRef<"ChatSpace", 'String'>;
    readonly organizationId: Prisma.FieldRef<"ChatSpace", 'String'>;
    readonly name: Prisma.FieldRef<"ChatSpace", 'String'>;
    readonly widgetKey: Prisma.FieldRef<"ChatSpace", 'String'>;
    readonly allowedDomains: Prisma.FieldRef<"ChatSpace", 'String[]'>;
    readonly settings: Prisma.FieldRef<"ChatSpace", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"ChatSpace", 'DateTime'>;
}
export type ChatSpaceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatSpaceSelect<ExtArgs> | null;
    omit?: Prisma.ChatSpaceOmit<ExtArgs> | null;
    include?: Prisma.ChatSpaceInclude<ExtArgs> | null;
    where: Prisma.ChatSpaceWhereUniqueInput;
};
export type ChatSpaceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatSpaceSelect<ExtArgs> | null;
    omit?: Prisma.ChatSpaceOmit<ExtArgs> | null;
    include?: Prisma.ChatSpaceInclude<ExtArgs> | null;
    where: Prisma.ChatSpaceWhereUniqueInput;
};
export type ChatSpaceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatSpaceSelect<ExtArgs> | null;
    omit?: Prisma.ChatSpaceOmit<ExtArgs> | null;
    include?: Prisma.ChatSpaceInclude<ExtArgs> | null;
    where?: Prisma.ChatSpaceWhereInput;
    orderBy?: Prisma.ChatSpaceOrderByWithRelationInput | Prisma.ChatSpaceOrderByWithRelationInput[];
    cursor?: Prisma.ChatSpaceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChatSpaceScalarFieldEnum | Prisma.ChatSpaceScalarFieldEnum[];
};
export type ChatSpaceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatSpaceSelect<ExtArgs> | null;
    omit?: Prisma.ChatSpaceOmit<ExtArgs> | null;
    include?: Prisma.ChatSpaceInclude<ExtArgs> | null;
    where?: Prisma.ChatSpaceWhereInput;
    orderBy?: Prisma.ChatSpaceOrderByWithRelationInput | Prisma.ChatSpaceOrderByWithRelationInput[];
    cursor?: Prisma.ChatSpaceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChatSpaceScalarFieldEnum | Prisma.ChatSpaceScalarFieldEnum[];
};
export type ChatSpaceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatSpaceSelect<ExtArgs> | null;
    omit?: Prisma.ChatSpaceOmit<ExtArgs> | null;
    include?: Prisma.ChatSpaceInclude<ExtArgs> | null;
    where?: Prisma.ChatSpaceWhereInput;
    orderBy?: Prisma.ChatSpaceOrderByWithRelationInput | Prisma.ChatSpaceOrderByWithRelationInput[];
    cursor?: Prisma.ChatSpaceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChatSpaceScalarFieldEnum | Prisma.ChatSpaceScalarFieldEnum[];
};
export type ChatSpaceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatSpaceSelect<ExtArgs> | null;
    omit?: Prisma.ChatSpaceOmit<ExtArgs> | null;
    include?: Prisma.ChatSpaceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ChatSpaceCreateInput, Prisma.ChatSpaceUncheckedCreateInput>;
};
export type ChatSpaceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ChatSpaceCreateManyInput | Prisma.ChatSpaceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ChatSpaceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatSpaceSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ChatSpaceOmit<ExtArgs> | null;
    data: Prisma.ChatSpaceCreateManyInput | Prisma.ChatSpaceCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ChatSpaceIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ChatSpaceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatSpaceSelect<ExtArgs> | null;
    omit?: Prisma.ChatSpaceOmit<ExtArgs> | null;
    include?: Prisma.ChatSpaceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ChatSpaceUpdateInput, Prisma.ChatSpaceUncheckedUpdateInput>;
    where: Prisma.ChatSpaceWhereUniqueInput;
};
export type ChatSpaceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ChatSpaceUpdateManyMutationInput, Prisma.ChatSpaceUncheckedUpdateManyInput>;
    where?: Prisma.ChatSpaceWhereInput;
    limit?: number;
};
export type ChatSpaceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatSpaceSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ChatSpaceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ChatSpaceUpdateManyMutationInput, Prisma.ChatSpaceUncheckedUpdateManyInput>;
    where?: Prisma.ChatSpaceWhereInput;
    limit?: number;
    include?: Prisma.ChatSpaceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ChatSpaceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatSpaceSelect<ExtArgs> | null;
    omit?: Prisma.ChatSpaceOmit<ExtArgs> | null;
    include?: Prisma.ChatSpaceInclude<ExtArgs> | null;
    where: Prisma.ChatSpaceWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChatSpaceCreateInput, Prisma.ChatSpaceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ChatSpaceUpdateInput, Prisma.ChatSpaceUncheckedUpdateInput>;
};
export type ChatSpaceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatSpaceSelect<ExtArgs> | null;
    omit?: Prisma.ChatSpaceOmit<ExtArgs> | null;
    include?: Prisma.ChatSpaceInclude<ExtArgs> | null;
    where: Prisma.ChatSpaceWhereUniqueInput;
};
export type ChatSpaceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChatSpaceWhereInput;
    limit?: number;
};
export type ChatSpace$threadsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ChatSpace$visitorsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ChatSpaceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatSpaceSelect<ExtArgs> | null;
    omit?: Prisma.ChatSpaceOmit<ExtArgs> | null;
    include?: Prisma.ChatSpaceInclude<ExtArgs> | null;
};
export {};
