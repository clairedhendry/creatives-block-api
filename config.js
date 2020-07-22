module.exports = {
    PORT: process.env.PORT || 8000,
    CLIENT_ORIGIN: "http://localhost:3000/" || "https://creatives-block-client.vercel.app/",
    NODE_ENV: process.env.NODE_ENV || 'development',
    DATABASE_URL: process.env.DATABASE_URL || 'postgresql://CreativesBlock:password@localhost/CreativesBlock',
    TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://CreativesBlock:password@localhost/CreativesBlock-test',
    API_TOKEN: process.env.API_TOKEN,
    API_KEY: process.env.API_KEY,
    API_SECRET: process.env.API_SECRET,
    JWT_SECRET: process.env.JWT_SECRET || 'change-this-secret',
    CLOUD_NAME: process.env.CLOUDINARY_NAME,
    CLOUD_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUD_API_SECRET: process.env.CLOUDINARY_API_SECRET
};

