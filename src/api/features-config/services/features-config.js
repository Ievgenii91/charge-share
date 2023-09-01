'use strict';

/**
 * features-config service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::features-config.features-config');
