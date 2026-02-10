import { Agent } from '@prisma/client';
export type CurrentUserPayload = Pick<Agent, 'id' | 'organizationId' | 'email' | 'displayName' | 'role'>;
export declare const CurrentUser: (...dataOrPipes: ("id" | "email" | "organizationId" | "displayName" | "role" | import("@nestjs/common").PipeTransform<any, any> | import("@nestjs/common").Type<import("@nestjs/common").PipeTransform<any, any>> | undefined)[]) => ParameterDecorator;
