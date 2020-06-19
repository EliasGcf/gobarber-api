require("dotenv/config");

const devConfig = [
  {
    name: 'default',
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASS,
    database: process.env.POSTGRES_NAME,
    entities: [
      './src/modules/**/infra/typeorm/entities/*.ts'
    ],
    migrations: [
      './src/shared/infra/typeorm/migrations/*.ts'
    ],
    cli: {
      migrationsDir: './src/shared/infra/typeorm/migrations',
    },
  },
  {
    name: 'mongo',
    type: 'mongodb',
    host: process.env.MONGO_HOST,
    port: 27017,
    database: process.env.MONGO_NAME,
    useUnifiedTopology: true,
    entities: [
      './src/modules/**/infra/typeorm/schemas/*.ts'
    ]
  }
];

const prodConfig = [
  {
    name: 'default',
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASS,
    database: process.env.POSTGRES_NAME,
    entities: [
      './dist/modules/**/infra/typeorm/entities/*.js'
    ],
    migrations: [
      './dist/shared/infra/typeorm/migrations/*.js'
    ],
    cli: {
      migrationsDir: './dist/shared/infra/typeorm/migrations',
    },
  },
  {
    name: 'mongo',
    type: 'mongodb',
    host: process.env.MONGO_HOST,
    port: 27017,
    database: process.env.MONGO_NAME,
    useUnifiedTopology: true,
    entities: [
      './dist/modules/**/infra/typeorm/schemas/*.js'
    ]
  }
];

module.exports = process.env.NODE_ENV === 'development' ? devConfig : prodConfig;
