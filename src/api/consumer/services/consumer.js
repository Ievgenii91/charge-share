'use strict';

/**
 * consumer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::consumer.consumer');
