'use strict';

/**
 * handshake controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::handshake.handshake');
