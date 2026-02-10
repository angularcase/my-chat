import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Agent } from '@prisma/client';

export type CurrentUserPayload = Pick<
  Agent,
  'id' | 'organizationId' | 'email' | 'displayName' | 'role'
>;

export const CurrentUser = createParamDecorator(
  (data: keyof CurrentUserPayload | undefined, ctx: ExecutionContext): CurrentUserPayload | unknown => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user as CurrentUserPayload;
    return data ? user?.[data] : user;
  },
);
