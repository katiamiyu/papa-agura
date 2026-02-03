import dotenv from "dotenv";
dotenv.config();

const env = process.env.NODE_ENV || "development";

let envConfig;

switch (env) {
    case "test":
        envConfig = (await import("./test.js")).default;
        break;
    case "production":
        envConfig = (await import("./prod.js")).default;
        break;
    default:
        envConfig = (await import("./dev.js")).default;
}

const config = {
    env,
    name: "express-app-papa-agura",
    author: "kazeem tiamiyu",
    port: process.env.PORT || 3000,
    mongoUri: envConfig.mongoUri
};

if (!config.mongoUri) throw new Error(`mongo uri missing for ${env}`);

export default config;
