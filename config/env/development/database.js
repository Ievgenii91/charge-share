const fs = require('fs');

module.exports = ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
			host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'bank'),
			user: env('DATABASE_USERNAME', 'postgres'),
			password: env('DATABASE_PASSWORD', '0000'),
			schema: env('DATABASE_SCHEMA', 'public'), // Not required
			ssl: { rejectUnauthorized: false },
			acquireConnectionTimeout: 1000000,
			pool: {
				min: 0,
				max: 1,
				acquireTimeoutMillis: 300000,
				createTimeoutMillis: 300000,
				destroyTimeoutMillis: 300000,
				idleTimeoutMillis: 30000,
				reapIntervalMillis: 1000,
				createRetryIntervalMillis: 2000,
			},
		},
		debug: false,
	},
	settings: {
		forceMigration: false,
	},
});
