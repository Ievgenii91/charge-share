'use strict';

/**
 * consumer controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::consumer.consumer');
