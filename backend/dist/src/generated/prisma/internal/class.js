"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.3.0",
    "engineVersion": "9d6ad21cbbceab97458517b147a6a09ff43aa735",
    "activeProvider": "postgresql",
    "inlineSchema": "// My-Chat database schema\n// https://pris.ly/d/prisma-schema\n\ngenerator client {\n  provider = \"prisma-client\"\n  output   = \"../src/generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel Organization {\n  id           String   @id @default(uuid())\n  name         String\n  email        String   @unique\n  passwordHash String\n  createdAt    DateTime @default(now())\n\n  chatSpaces ChatSpace[]\n  agents     Agent[]\n}\n\nmodel ChatSpace {\n  id             String   @id @default(uuid())\n  organizationId String\n  name           String\n  widgetKey      String   @unique\n  allowedDomains String[] @default([])\n  settings       Json?    @default(\"{}\")\n  createdAt      DateTime @default(now())\n\n  organization Organization @relation(fields: [organizationId], references: [id], onDelete: Cascade)\n  threads      Thread[]\n  visitors     Visitor[]\n}\n\nmodel Agent {\n  id             String    @id @default(uuid())\n  organizationId String\n  email          String\n  passwordHash   String\n  displayName    String?\n  role           String    @default(\"agent\") // admin | agent\n  isOnline       Boolean   @default(false)\n  lastSeenAt     DateTime?\n  createdAt      DateTime  @default(now())\n\n  organization Organization @relation(fields: [organizationId], references: [id], onDelete: Cascade)\n  threads      Thread[]\n}\n\nmodel Visitor {\n  id           String   @id @default(uuid())\n  chatSpaceId  String\n  sessionToken String   @unique\n  email        String?\n  displayName  String?\n  metadata     Json?    @default(\"{}\")\n  createdAt    DateTime @default(now())\n\n  chatSpace ChatSpace @relation(fields: [chatSpaceId], references: [id], onDelete: Cascade)\n  threads   Thread[]\n}\n\nenum ThreadStatus {\n  unassigned\n  active\n  closed\n  expired\n}\n\nmodel Thread {\n  id              String       @id @default(uuid())\n  chatSpaceId     String\n  visitorId       String\n  assignedAgentId String?\n  status          ThreadStatus @default(unassigned)\n  lastActivityAt  DateTime     @default(now())\n  createdAt       DateTime     @default(now())\n  updatedAt       DateTime     @updatedAt\n\n  chatSpace ChatSpace @relation(fields: [chatSpaceId], references: [id], onDelete: Cascade)\n  visitor   Visitor   @relation(fields: [visitorId], references: [id], onDelete: Cascade)\n  agent     Agent?    @relation(fields: [assignedAgentId], references: [id], onDelete: SetNull)\n  messages  Message[]\n}\n\nenum MessageSenderType {\n  visitor\n  agent\n  system\n}\n\nmodel Message {\n  id         String            @id @default(uuid())\n  threadId   String\n  senderType MessageSenderType\n  senderId   String? // visitor id or agent id; null for system\n  content    String\n  createdAt  DateTime          @default(now())\n\n  thread Thread @relation(fields: [threadId], references: [id], onDelete: Cascade)\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"Organization\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"passwordHash\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"chatSpaces\",\"kind\":\"object\",\"type\":\"ChatSpace\",\"relationName\":\"ChatSpaceToOrganization\"},{\"name\":\"agents\",\"kind\":\"object\",\"type\":\"Agent\",\"relationName\":\"AgentToOrganization\"}],\"dbName\":null},\"ChatSpace\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"organizationId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"widgetKey\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"allowedDomains\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"settings\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"organization\",\"kind\":\"object\",\"type\":\"Organization\",\"relationName\":\"ChatSpaceToOrganization\"},{\"name\":\"threads\",\"kind\":\"object\",\"type\":\"Thread\",\"relationName\":\"ChatSpaceToThread\"},{\"name\":\"visitors\",\"kind\":\"object\",\"type\":\"Visitor\",\"relationName\":\"ChatSpaceToVisitor\"}],\"dbName\":null},\"Agent\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"organizationId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"passwordHash\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"displayName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"role\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"isOnline\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"lastSeenAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"organization\",\"kind\":\"object\",\"type\":\"Organization\",\"relationName\":\"AgentToOrganization\"},{\"name\":\"threads\",\"kind\":\"object\",\"type\":\"Thread\",\"relationName\":\"AgentToThread\"}],\"dbName\":null},\"Visitor\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"chatSpaceId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"sessionToken\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"displayName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"metadata\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"chatSpace\",\"kind\":\"object\",\"type\":\"ChatSpace\",\"relationName\":\"ChatSpaceToVisitor\"},{\"name\":\"threads\",\"kind\":\"object\",\"type\":\"Thread\",\"relationName\":\"ThreadToVisitor\"}],\"dbName\":null},\"Thread\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"chatSpaceId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"visitorId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"assignedAgentId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"ThreadStatus\"},{\"name\":\"lastActivityAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"chatSpace\",\"kind\":\"object\",\"type\":\"ChatSpace\",\"relationName\":\"ChatSpaceToThread\"},{\"name\":\"visitor\",\"kind\":\"object\",\"type\":\"Visitor\",\"relationName\":\"ThreadToVisitor\"},{\"name\":\"agent\",\"kind\":\"object\",\"type\":\"Agent\",\"relationName\":\"AgentToThread\"},{\"name\":\"messages\",\"kind\":\"object\",\"type\":\"Message\",\"relationName\":\"MessageToThread\"}],\"dbName\":null},\"Message\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"threadId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"senderType\",\"kind\":\"enum\",\"type\":\"MessageSenderType\"},{\"name\":\"senderId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"content\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"thread\",\"kind\":\"object\",\"type\":\"Thread\",\"relationName\":\"MessageToThread\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.mjs");
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map