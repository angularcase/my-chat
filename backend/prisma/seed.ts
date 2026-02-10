import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

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
      // Empty = allow any origin (development mode).
      // In production, populate with actual domains.
      allowedDomains: [],
    },
  });

  console.log('\n--- My-Chat seed ---');
  console.log('Organization:', org.email);
  console.log('Agent login: admin@demo.com / admin123');
  console.log('Your widget key:', chatSpace.widgetKey);
  console.log(
    'Add to your page: <script src="..." data-widget-key="' +
      chatSpace.widgetKey +
      '"></script>\n',
  );

  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
