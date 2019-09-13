require("dotenv").config();

module.exports = {
	REDIS_PORT: process.env.REDIS_PORT,
	REDIS_HOST: process.env.REDIS_HOST,
	SENDGRID_API: process.env.SENDGRID_API
};
