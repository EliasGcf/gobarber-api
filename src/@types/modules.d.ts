declare namespace NodeJS {
  export interface ProcessEnv {
    // # APP URL's
    APP_API_URL?: string;
    APP_WEB_URL?: string;
    NODE_ENV?: 'production' | 'development';

    // JWT Secret
    APP_SECRET?: string;

    // Mail Service
    MAIL_DRIVER?: string;

    // Storage
    STORAGE_DRIVER?: string;

    // PostgreSQL
    POSTGRES_HOST?: string;
    POSTGRES_USER?: string;
    POSTGRES_PASS?: string;
    POSTGRES_NAME?: string;

    // MongoDB
    MONGO_HOST?: string;
    MONGO_USER?: string;
    MONGO_PASS?: string;
    MONGO_NAME?: string;

    // Redis
    REDIS_HOST?: string;
    REDIS_PORT?: string;
    REDIS_PASS?: string;

    // AWS
    AWS_ACCESS_KEY_ID?: string;
    AWS_SECRET_ACCESS_KEY?: string;
  }
}
