module.exports = {
    PORT: process.env.PORT || 8000,
    CLIENT_ORIGIN: "http://localhost:3002/",
    NODE_ENV: process.env.NODE_ENV || 'development',
    DATABASE_URL: process.env.DATABASE_URL || "postgresql://CreativesBlock@localhost/CreativesBlock-test",
    TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || "postgresql://CreativesBlock@localhost/CreativesBlock-test",
    API_TOKEN: process.env.API_TOKEN,
    API_KEY: process.env.API_KEY,
    API_SECRET: process.env.API_SECRET
};