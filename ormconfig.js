module.exports = {
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'moneyControl',
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/migrations/*.js'],
    cli: {
        migrationsDir: 'src/migrations',
    },
};