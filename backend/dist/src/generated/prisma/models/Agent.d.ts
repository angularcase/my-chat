import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AgentModel = runtime.Types.Result.DefaultSelection<Prisma.$AgentPayload>;
export type AggregateAgent = {
    _count: AgentCountAggregateOutputType | null;
    _min: AgentMinAggregateOutputType | null;
    _max: AgentMaxAggregateOutputType | null;
};
export type AgentMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    email: string | null;
    passwordHash: string | null;
    displayName: string | null;
    role: string | null;
    isOnline: boolean | null;
    lastSeenAt: Date | null;
    createdAt: Date | null;
};
export type AgentMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    email: string | null;
    passwordHash: string | null;
    displayName: string | null;
    role: string | null;
    isOnline: boolean | null;
    lastSeenAt: Date | null;
    createdAt: Date | null;
};
export type AgentCountAggregateOutputType = {
    id: number;
    organizationId: number;
    email: number;
    passwordHash: number;
    displayName: number;
    role: number;
    isOnline: number;
    lastSeenAt: number;
    createdAt: number;
    _all: number;
};
export type AgentMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    email?: true;
    passwordHash?: true;
    displayName?: true;
    role?: true;
    isOnline?: true;
    lastSeenAt?: true;
    createdAt?: true;
};
export type AgentMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    email?: true;
    passwordHash?: true;
    displayName?: true;
    role?: true;
    isOnline?: true;
    lastSeenAt?: true;
    createdAt?: true;
};
export type AgentCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    email?: true;
    passwordHash?: true;
    displayName?: true;
    role?: true;
    isOnline?: true;
    lastSeenAt?: true;
    createdAt?: true;
    _all?: true;
};
export type AgentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AgentWhereInput;
    orderBy?: Prisma.AgentOrderByWithRelationInput | Prisma.AgentOrderByWithRelationInput[];
    cursor?: Prisma.AgentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AgentCountAggregateInputType;
    _min?: AgentMinAggregateInputType;
    _max?: AgentMaxAggregateInputType;
};
export type GetAgentAggregateType<T extends AgentAggregateArgs> = {
    [P in keyof T & keyof AggregateAgent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAgent[P]> : Prisma.GetScalarType<T[P], AggregateAgent[P]>;
};
export type AgentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AgentWhereInput;
    orderBy?: Prisma.AgentOrderByWithAggregationInput | Prisma.AgentOrderByWithAggregationInput[];
    by: Prisma.AgentScalarFieldEnum[] | Prisma.AgentScalarFieldEnum;
    having?: Prisma.AgentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AgentCountAggregateInputType | true;
    _min?: AgentMinAggregateInputType;
    _max?: AgentMaxAggregateInputType;
};
export type AgentGroupByOutputType = {
    id: string;
    organizationId: string;
    email: string;
    passwordHash: string;
    displayName: string | null;
    role: string;
    isOnline: boolean;
    lastSeenAt: Date | null;
    createdAt: Date;
    _count: AgentCountAggregateOutputType | null;
    _min: AgentMinAggregateOutputType | null;
    _max: AgentMaxAggregateOutputType | null;
};
type GetAgentGroupByPayload<T extends AgentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AgentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AgentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AgentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AgentGroupByOutputType[P]>;
}>>;
export type AgentWhereInput = {
    AND?: Prisma.AgentWhereInput | Prisma.AgentWhereInput[];
    OR?: Prisma.AgentWhereInput[];
    NOT?: Prisma.AgentWhereInput | Prisma.AgentWhereInput[];
    id?: Prisma.StringFilter<"Agent"> | string;
    organizationId?: Prisma.StringFilter<"Agent"> | string;
    email?: Prisma.StringFilter<"Agent"> | string;
    passwordHash?: Prisma.StringFilter<"Agent"> | string;
    displayName?: Prisma.StringNullableFilter<"Agent"> | string | null;
    role?: Prisma.StringFilter<"Agent"> | string;
    isOnline?: Prisma.BoolFilter<"Agent"> | boolean;
    lastSeenAt?: Prisma.DateTimeNullableFilter<"Agent"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Agent"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    threads?: Prisma.ThreadListRelationFilter;
};
export type AgentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    displayName?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isOnline?: Prisma.SortOrder;
    lastSeenAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    threads?: Prisma.ThreadOrderByRelationAggregateInput;
};
export type AgentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AgentWhereInput | Prisma.AgentWhereInput[];
    OR?: Prisma.AgentWhereInput[];
    NOT?: Prisma.AgentWhereInput | Prisma.AgentWhereInput[];
    organizationId?: Prisma.StringFilter<"Agent"> | string;
    email?: Prisma.StringFilter<"Agent"> | string;
    passwordHash?: Prisma.StringFilter<"Agent"> | string;
    displayName?: Prisma.StringNullableFilter<"Agent"> | string | null;
    role?: Prisma.StringFilter<"Agent"> | string;
    isOnline?: Prisma.BoolFilter<"Agent"> | boolean;
    lastSeenAt?: Prisma.DateTimeNullableFilter<"Agent"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Agent"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    threads?: Prisma.ThreadListRelationFilter;
}, "id">;
export type AgentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    displayName?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isOnline?: Prisma.SortOrder;
    lastSeenAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AgentCountOrderByAggregateInput;
    _max?: Prisma.AgentMaxOrderByAggregateInput;
    _min?: Prisma.AgentMinOrderByAggregateInput;
};
export type AgentScalarWhereWithAggregatesInput = {
    AND?: Prisma.AgentScalarWhereWithAggregatesInput | Prisma.AgentScalarWhereWithAggregatesInput[];
    OR?: Prisma.AgentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AgentScalarWhereWithAggregatesInput | Prisma.AgentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Agent"> | string;
    organizationId?: Prisma.StringWithAggregatesFilter<"Agent"> | string;
    email?: Prisma.StringWithAggregatesFilter<"Agent"> | string;
    passwordHash?: Prisma.StringWithAggregatesFilter<"Agent"> | string;
    displayName?: Prisma.StringNullableWithAggregatesFilter<"Agent"> | string | null;
    role?: Prisma.StringWithAggregatesFilter<"Agent"> | string;
    isOnline?: Prisma.BoolWithAggregatesFilter<"Agent"> | boolean;
    lastSeenAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Agent"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Agent"> | Date | string;
};
export type AgentCreateInput = {
    id?: string;
    email: string;
    passwordHash: string;
    displayName?: string | null;
    role?: string;
    isOnline?: boolean;
    lastSeenAt?: Date | string | null;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutAgentsInput;
    threads?: Prisma.ThreadCreateNestedManyWithoutAgentInput;
};
export type AgentUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    email: string;
    passwordHash: string;
    displayName?: string | null;
    role?: string;
    isOnline?: boolean;
    lastSeenAt?: Date | string | null;
    createdAt?: Date | string;
    threads?: Prisma.ThreadUncheckedCreateNestedManyWithoutAgentInput;
};
export type AgentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    isOnline?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutAgentsNestedInput;
    threads?: Prisma.ThreadUpdateManyWithoutAgentNestedInput;
};
export type AgentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    isOnline?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    threads?: Prisma.ThreadUncheckedUpdateManyWithoutAgentNestedInput;
};
export type AgentCreateManyInput = {
    id?: string;
    organizationId: string;
    email: string;
    passwordHash: string;
    displayName?: string | null;
    role?: string;
    isOnline?: boolean;
    lastSeenAt?: Date | string | null;
    createdAt?: Date | string;
};
export type AgentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    isOnline?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AgentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    isOnline?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AgentListRelationFilter = {
    every?: Prisma.AgentWhereInput;
    some?: Prisma.AgentWhereInput;
    none?: Prisma.AgentWhereInput;
};
export type AgentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AgentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    displayName?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isOnline?: Prisma.SortOrder;
    lastSeenAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AgentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    displayName?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isOnline?: Prisma.SortOrder;
    lastSeenAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AgentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    displayName?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isOnline?: Prisma.SortOrder;
    lastSeenAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AgentNullableScalarRelationFilter = {
    is?: Prisma.AgentWhereInput | null;
    isNot?: Prisma.AgentWhereInput | null;
};
export type AgentCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.AgentCreateWithoutOrganizationInput, Prisma.AgentUncheckedCreateWithoutOrganizationInput> | Prisma.AgentCreateWithoutOrganizationInput[] | Prisma.AgentUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.AgentCreateOrConnectWithoutOrganizationInput | Prisma.AgentCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.AgentCreateManyOrganizationInputEnvelope;
    connect?: Prisma.AgentWhereUniqueInput | Prisma.AgentWhereUniqueInput[];
};
export type AgentUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.AgentCreateWithoutOrganizationInput, Prisma.AgentUncheckedCreateWithoutOrganizationInput> | Prisma.AgentCreateWithoutOrganizationInput[] | Prisma.AgentUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.AgentCreateOrConnectWithoutOrganizationInput | Prisma.AgentCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.AgentCreateManyOrganizationInputEnvelope;
    connect?: Prisma.AgentWhereUniqueInput | Prisma.AgentWhereUniqueInput[];
};
export type AgentUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.AgentCreateWithoutOrganizationInput, Prisma.AgentUncheckedCreateWithoutOrganizationInput> | Prisma.AgentCreateWithoutOrganizationInput[] | Prisma.AgentUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.AgentCreateOrConnectWithoutOrganizationInput | Prisma.AgentCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.AgentUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.AgentUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.AgentCreateManyOrganizationInputEnvelope;
    set?: Prisma.AgentWhereUniqueInput | Prisma.AgentWhereUniqueInput[];
    disconnect?: Prisma.AgentWhereUniqueInput | Prisma.AgentWhereUniqueInput[];
    delete?: Prisma.AgentWhereUniqueInput | Prisma.AgentWhereUniqueInput[];
    connect?: Prisma.AgentWhereUniqueInput | Prisma.AgentWhereUniqueInput[];
    update?: Prisma.AgentUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.AgentUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.AgentUpdateManyWithWhereWithoutOrganizationInput | Prisma.AgentUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.AgentScalarWhereInput | Prisma.AgentScalarWhereInput[];
};
export type AgentUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.AgentCreateWithoutOrganizationInput, Prisma.AgentUncheckedCreateWithoutOrganizationInput> | Prisma.AgentCreateWithoutOrganizationInput[] | Prisma.AgentUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.AgentCreateOrConnectWithoutOrganizationInput | Prisma.AgentCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.AgentUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.AgentUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.AgentCreateManyOrganizationInputEnvelope;
    set?: Prisma.AgentWhereUniqueInput | Prisma.AgentWhereUniqueInput[];
    disconnect?: Prisma.AgentWhereUniqueInput | Prisma.AgentWhereUniqueInput[];
    delete?: Prisma.AgentWhereUniqueInput | Prisma.AgentWhereUniqueInput[];
    connect?: Prisma.AgentWhereUniqueInput | Prisma.AgentWhereUniqueInput[];
    update?: Prisma.AgentUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.AgentUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.AgentUpdateManyWithWhereWithoutOrganizationInput | Prisma.AgentUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.AgentScalarWhereInput | Prisma.AgentScalarWhereInput[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type AgentCreateNestedOneWithoutThreadsInput = {
    create?: Prisma.XOR<Prisma.AgentCreateWithoutThreadsInput, Prisma.AgentUncheckedCreateWithoutThreadsInput>;
    connectOrCreate?: Prisma.AgentCreateOrConnectWithoutThreadsInput;
    connect?: Prisma.AgentWhereUniqueInput;
};
export type AgentUpdateOneWithoutThreadsNestedInput = {
    create?: Prisma.XOR<Prisma.AgentCreateWithoutThreadsInput, Prisma.AgentUncheckedCreateWithoutThreadsInput>;
    connectOrCreate?: Prisma.AgentCreateOrConnectWithoutThreadsInput;
    upsert?: Prisma.AgentUpsertWithoutThreadsInput;
    disconnect?: Prisma.AgentWhereInput | boolean;
    delete?: Prisma.AgentWhereInput | boolean;
    connect?: Prisma.AgentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AgentUpdateToOneWithWhereWithoutThreadsInput, Prisma.AgentUpdateWithoutThreadsInput>, Prisma.AgentUncheckedUpdateWithoutThreadsInput>;
};
export type AgentCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    passwordHash: string;
    displayName?: string | null;
    role?: string;
    isOnline?: boolean;
    lastSeenAt?: Date | string | null;
    createdAt?: Date | string;
    threads?: Prisma.ThreadCreateNestedManyWithoutAgentInput;
};
export type AgentUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    passwordHash: string;
    displayName?: string | null;
    role?: string;
    isOnline?: boolean;
    lastSeenAt?: Date | string | null;
    createdAt?: Date | string;
    threads?: Prisma.ThreadUncheckedCreateNestedManyWithoutAgentInput;
};
export type AgentCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.AgentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AgentCreateWithoutOrganizationInput, Prisma.AgentUncheckedCreateWithoutOrganizationInput>;
};
export type AgentCreateManyOrganizationInputEnvelope = {
    data: Prisma.AgentCreateManyOrganizationInput | Prisma.AgentCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type AgentUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.AgentWhereUniqueInput;
    update: Prisma.XOR<Prisma.AgentUpdateWithoutOrganizationInput, Prisma.AgentUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.AgentCreateWithoutOrganizationInput, Prisma.AgentUncheckedCreateWithoutOrganizationInput>;
};
export type AgentUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.AgentWhereUniqueInput;
    data: Prisma.XOR<Prisma.AgentUpdateWithoutOrganizationInput, Prisma.AgentUncheckedUpdateWithoutOrganizationInput>;
};
export type AgentUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.AgentScalarWhereInput;
    data: Prisma.XOR<Prisma.AgentUpdateManyMutationInput, Prisma.AgentUncheckedUpdateManyWithoutOrganizationInput>;
};
export type AgentScalarWhereInput = {
    AND?: Prisma.AgentScalarWhereInput | Prisma.AgentScalarWhereInput[];
    OR?: Prisma.AgentScalarWhereInput[];
    NOT?: Prisma.AgentScalarWhereInput | Prisma.AgentScalarWhereInput[];
    id?: Prisma.StringFilter<"Agent"> | string;
    organizationId?: Prisma.StringFilter<"Agent"> | string;
    email?: Prisma.StringFilter<"Agent"> | string;
    passwordHash?: Prisma.StringFilter<"Agent"> | string;
    displayName?: Prisma.StringNullableFilter<"Agent"> | string | null;
    role?: Prisma.StringFilter<"Agent"> | string;
    isOnline?: Prisma.BoolFilter<"Agent"> | boolean;
    lastSeenAt?: Prisma.DateTimeNullableFilter<"Agent"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Agent"> | Date | string;
};
export type AgentCreateWithoutThreadsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    displayName?: string | null;
    role?: string;
    isOnline?: boolean;
    lastSeenAt?: Date | string | null;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutAgentsInput;
};
export type AgentUncheckedCreateWithoutThreadsInput = {
    id?: string;
    organizationId: string;
    email: string;
    passwordHash: string;
    displayName?: string | null;
    role?: string;
    isOnline?: boolean;
    lastSeenAt?: Date | string | null;
    createdAt?: Date | string;
};
export type AgentCreateOrConnectWithoutThreadsInput = {
    where: Prisma.AgentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AgentCreateWithoutThreadsInput, Prisma.AgentUncheckedCreateWithoutThreadsInput>;
};
export type AgentUpsertWithoutThreadsInput = {
    update: Prisma.XOR<Prisma.AgentUpdateWithoutThreadsInput, Prisma.AgentUncheckedUpdateWithoutThreadsInput>;
    create: Prisma.XOR<Prisma.AgentCreateWithoutThreadsInput, Prisma.AgentUncheckedCreateWithoutThreadsInput>;
    where?: Prisma.AgentWhereInput;
};
export type AgentUpdateToOneWithWhereWithoutThreadsInput = {
    where?: Prisma.AgentWhereInput;
    data: Prisma.XOR<Prisma.AgentUpdateWithoutThreadsInput, Prisma.AgentUncheckedUpdateWithoutThreadsInput>;
};
export type AgentUpdateWithoutThreadsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    isOnline?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutAgentsNestedInput;
};
export type AgentUncheckedUpdateWithoutThreadsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    isOnline?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AgentCreateManyOrganizationInput = {
    id?: string;
    email: string;
    passwordHash: string;
    displayName?: string | null;
    role?: string;
    isOnline?: boolean;
    lastSeenAt?: Date | string | null;
    createdAt?: Date | string;
};
export type AgentUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    isOnline?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    threads?: Prisma.ThreadUpdateManyWithoutAgentNestedInput;
};
export type AgentUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    isOnline?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    threads?: Prisma.ThreadUncheckedUpdateManyWithoutAgentNestedInput;
};
export type AgentUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    isOnline?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AgentCountOutputType = {
    threads: number;
};
export type AgentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    threads?: boolean | AgentCountOutputTypeCountThreadsArgs;
};
export type AgentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AgentCountOutputTypeSelect<ExtArgs> | null;
};
export type AgentCountOutputTypeCountThreadsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ThreadWhereInput;
};
export type AgentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    displayName?: boolean;
    role?: boolean;
    isOnline?: boolean;
    lastSeenAt?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    threads?: boolean | Prisma.Agent$threadsArgs<ExtArgs>;
    _count?: boolean | Prisma.AgentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["agent"]>;
export type AgentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    displayName?: boolean;
    role?: boolean;
    isOnline?: boolean;
    lastSeenAt?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["agent"]>;
export type AgentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    displayName?: boolean;
    role?: boolean;
    isOnline?: boolean;
    lastSeenAt?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["agent"]>;
export type AgentSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    displayName?: boolean;
    role?: boolean;
    isOnline?: boolean;
    lastSeenAt?: boolean;
    createdAt?: boolean;
};
export type AgentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "email" | "passwordHash" | "displayName" | "role" | "isOnline" | "lastSeenAt" | "createdAt", ExtArgs["result"]["agent"]>;
export type AgentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    threads?: boolean | Prisma.Agent$threadsArgs<ExtArgs>;
    _count?: boolean | Prisma.AgentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AgentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type AgentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type $AgentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Agent";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        threads: Prisma.$ThreadPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        email: string;
        passwordHash: string;
        displayName: string | null;
        role: string;
        isOnline: boolean;
        lastSeenAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["agent"]>;
    composites: {};
};
export type AgentGetPayload<S extends boolean | null | undefined | AgentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AgentPayload, S>;
export type AgentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AgentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AgentCountAggregateInputType | true;
};
export interface AgentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Agent'];
        meta: {
            name: 'Agent';
        };
    };
    findUnique<T extends AgentFindUniqueArgs>(args: Prisma.SelectSubset<T, AgentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AgentClient<runtime.Types.Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AgentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AgentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AgentClient<runtime.Types.Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AgentFindFirstArgs>(args?: Prisma.SelectSubset<T, AgentFindFirstArgs<ExtArgs>>): Prisma.Prisma__AgentClient<runtime.Types.Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AgentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AgentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AgentClient<runtime.Types.Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AgentFindManyArgs>(args?: Prisma.SelectSubset<T, AgentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AgentCreateArgs>(args: Prisma.SelectSubset<T, AgentCreateArgs<ExtArgs>>): Prisma.Prisma__AgentClient<runtime.Types.Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AgentCreateManyArgs>(args?: Prisma.SelectSubset<T, AgentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AgentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AgentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AgentDeleteArgs>(args: Prisma.SelectSubset<T, AgentDeleteArgs<ExtArgs>>): Prisma.Prisma__AgentClient<runtime.Types.Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AgentUpdateArgs>(args: Prisma.SelectSubset<T, AgentUpdateArgs<ExtArgs>>): Prisma.Prisma__AgentClient<runtime.Types.Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AgentDeleteManyArgs>(args?: Prisma.SelectSubset<T, AgentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AgentUpdateManyArgs>(args: Prisma.SelectSubset<T, AgentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AgentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AgentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AgentUpsertArgs>(args: Prisma.SelectSubset<T, AgentUpsertArgs<ExtArgs>>): Prisma.Prisma__AgentClient<runtime.Types.Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AgentCountArgs>(args?: Prisma.Subset<T, AgentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AgentCountAggregateOutputType> : number>;
    aggregate<T extends AgentAggregateArgs>(args: Prisma.Subset<T, AgentAggregateArgs>): Prisma.PrismaPromise<GetAgentAggregateType<T>>;
    groupBy<T extends AgentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AgentGroupByArgs['orderBy'];
    } : {
        orderBy?: AgentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AgentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AgentFieldRefs;
}
export interface Prisma__AgentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    threads<T extends Prisma.Agent$threadsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Agent$threadsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AgentFieldRefs {
    readonly id: Prisma.FieldRef<"Agent", 'String'>;
    readonly organizationId: Prisma.FieldRef<"Agent", 'String'>;
    readonly email: Prisma.FieldRef<"Agent", 'String'>;
    readonly passwordHash: Prisma.FieldRef<"Agent", 'String'>;
    readonly displayName: Prisma.FieldRef<"Agent", 'String'>;
    readonly role: Prisma.FieldRef<"Agent", 'String'>;
    readonly isOnline: Prisma.FieldRef<"Agent", 'Boolean'>;
    readonly lastSeenAt: Prisma.FieldRef<"Agent", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Agent", 'DateTime'>;
}
export type AgentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AgentSelect<ExtArgs> | null;
    omit?: Prisma.AgentOmit<ExtArgs> | null;
    include?: Prisma.AgentInclude<ExtArgs> | null;
    where: Prisma.AgentWhereUniqueInput;
};
export type AgentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AgentSelect<ExtArgs> | null;
    omit?: Prisma.AgentOmit<ExtArgs> | null;
    include?: Prisma.AgentInclude<ExtArgs> | null;
    where: Prisma.AgentWhereUniqueInput;
};
export type AgentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AgentSelect<ExtArgs> | null;
    omit?: Prisma.AgentOmit<ExtArgs> | null;
    include?: Prisma.AgentInclude<ExtArgs> | null;
    where?: Prisma.AgentWhereInput;
    orderBy?: Prisma.AgentOrderByWithRelationInput | Prisma.AgentOrderByWithRelationInput[];
    cursor?: Prisma.AgentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AgentScalarFieldEnum | Prisma.AgentScalarFieldEnum[];
};
export type AgentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AgentSelect<ExtArgs> | null;
    omit?: Prisma.AgentOmit<ExtArgs> | null;
    include?: Prisma.AgentInclude<ExtArgs> | null;
    where?: Prisma.AgentWhereInput;
    orderBy?: Prisma.AgentOrderByWithRelationInput | Prisma.AgentOrderByWithRelationInput[];
    cursor?: Prisma.AgentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AgentScalarFieldEnum | Prisma.AgentScalarFieldEnum[];
};
export type AgentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AgentSelect<ExtArgs> | null;
    omit?: Prisma.AgentOmit<ExtArgs> | null;
    include?: Prisma.AgentInclude<ExtArgs> | null;
    where?: Prisma.AgentWhereInput;
    orderBy?: Prisma.AgentOrderByWithRelationInput | Prisma.AgentOrderByWithRelationInput[];
    cursor?: Prisma.AgentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AgentScalarFieldEnum | Prisma.AgentScalarFieldEnum[];
};
export type AgentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AgentSelect<ExtArgs> | null;
    omit?: Prisma.AgentOmit<ExtArgs> | null;
    include?: Prisma.AgentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AgentCreateInput, Prisma.AgentUncheckedCreateInput>;
};
export type AgentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AgentCreateManyInput | Prisma.AgentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AgentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AgentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AgentOmit<ExtArgs> | null;
    data: Prisma.AgentCreateManyInput | Prisma.AgentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AgentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AgentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AgentSelect<ExtArgs> | null;
    omit?: Prisma.AgentOmit<ExtArgs> | null;
    include?: Prisma.AgentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AgentUpdateInput, Prisma.AgentUncheckedUpdateInput>;
    where: Prisma.AgentWhereUniqueInput;
};
export type AgentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AgentUpdateManyMutationInput, Prisma.AgentUncheckedUpdateManyInput>;
    where?: Prisma.AgentWhereInput;
    limit?: number;
};
export type AgentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AgentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AgentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AgentUpdateManyMutationInput, Prisma.AgentUncheckedUpdateManyInput>;
    where?: Prisma.AgentWhereInput;
    limit?: number;
    include?: Prisma.AgentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AgentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AgentSelect<ExtArgs> | null;
    omit?: Prisma.AgentOmit<ExtArgs> | null;
    include?: Prisma.AgentInclude<ExtArgs> | null;
    where: Prisma.AgentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AgentCreateInput, Prisma.AgentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AgentUpdateInput, Prisma.AgentUncheckedUpdateInput>;
};
export type AgentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AgentSelect<ExtArgs> | null;
    omit?: Prisma.AgentOmit<ExtArgs> | null;
    include?: Prisma.AgentInclude<ExtArgs> | null;
    where: Prisma.AgentWhereUniqueInput;
};
export type AgentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AgentWhereInput;
    limit?: number;
};
export type Agent$threadsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AgentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AgentSelect<ExtArgs> | null;
    omit?: Prisma.AgentOmit<ExtArgs> | null;
    include?: Prisma.AgentInclude<ExtArgs> | null;
};
export {};
