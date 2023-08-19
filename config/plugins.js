module.exports = ({ env }) => ({
	transformer: {
		enabled: true,
		config: {
			prefix: '/api/',
			responseTransforms: {
				removeAttributesKey: true,
				removeDataKey: true,
			},
		},
	},
	email: {
		enabled: true,
		config: {
			provider: 'amazon-ses',
			providerOptions: {
				key: env('AWS_SES_KEY'),
				secret: env('AWS_SES_SECRET'),
				amazon: env('AWS_SES_HOST'),
			},
			settings: {
				defaultFrom: env('SUPPORT_EMAIL'),
				defaultReplyTo: env('SUPPORT_EMAIL'),
			},
		},
	},
});
