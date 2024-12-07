const port = process.env.PORT ?? 3000;
const host = process.env.HOST ?? "localhost";
const mongoURL = process.env.MONGO_URL ?? "mongodb://api_db:27017/api";
module.exports = { port, host, mongoURL };
