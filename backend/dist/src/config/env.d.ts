export declare const env: {
    port: () => number;
    databaseUrl: () => string;
    redisUrl: () => string;
    jwt: {
        accessSecret: () => string;
        refreshSecret: () => string;
        accessExpiresIn: () => string;
        refreshExpiresIn: () => string;
    };
    corsOrigins: () => string[];
};
