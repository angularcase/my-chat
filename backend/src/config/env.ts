export const env = {
  port: () => parseInt(process.env.PORT ?? '3000', 10),
  databaseUrl: () => process.env.DATABASE_URL ?? '',
  redisUrl: () => process.env.REDIS_URL ?? 'redis://localhost:6380',
  jwt: {
    accessSecret: () => process.env.JWT_ACCESS_SECRET ?? 'access-secret',
    refreshSecret: () => process.env.JWT_REFRESH_SECRET ?? 'refresh-secret',
    accessExpiresIn: () => process.env.JWT_ACCESS_EXPIRES_IN ?? '15m',
    refreshExpiresIn: () => process.env.JWT_REFRESH_EXPIRES_IN ?? '7d',
  },
  corsOrigins: () =>
    (process.env.CORS_ORIGINS ?? 'http://localhost:3000').split(',').map((s) => s.trim()),
};
