'use strict';

/**
 * consumer router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::consumer.consumer');
