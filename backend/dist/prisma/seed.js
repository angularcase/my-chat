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
require("dotenv/config");
const client_1 = require("@prisma/client");
const bcrypt = __importStar(require("bcrypt"));
const prisma = new client_1.PrismaClient();
async function main() {
    const passwordHash = await bcrypt.hash('admin123', 10);
    const org = await prisma.organization.upsert({
        where: { email: 'demo@mychat.local' },
        update: {},
        create: {
            name: 'Demo Organization',
            email: 'demo@mychat.local',
            passwordHash,
        },
    });
    let agent = await prisma.agent.findFirst({
        where: { organizationId: org.id, email: 'admin@demo.com' },
    });
    if (!agent) {
        agent = await prisma.agent.create({
            data: {
                organizationId: org.id,
                email: 'admin@demo.com',
                passwordHash,
                displayName: 'Admin',
                role: 'admin',
            },
        });
    }
    const demoWidgetKey = 'demo-widget-key';
    const chatSpace = await prisma.chatSpace.upsert({
        where: { widgetKey: demoWidgetKey },
        update: {},
        create: {
            organizationId: org.id,
            name: 'Default',
            widgetKey: demoWidgetKey,
            allowedDomains: [],
        },
    });
    console.log('\n--- My-Chat seed ---');
    console.log('Organization:', org.email);
    console.log('Agent login: admin@demo.com / admin123');
    console.log('Your widget key:', chatSpace.widgetKey);
    console.log('Add to your page: <script src="..." data-widget-key="' +
        chatSpace.widgetKey +
        '"></script>\n');
    await prisma.$disconnect();
}
main().catch((e) => {
    console.error(e);
    process.exit(1);
});
//# sourceMappingURL=seed.js.map