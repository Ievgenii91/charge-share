'use strict';

/**
 * handshake service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::handshake.handshake');
