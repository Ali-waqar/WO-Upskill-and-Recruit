'use strict';

/**
 * Module dependencies.
 */

var Identify = require('segmentio-facade').Identify;
var alias = require('@segment/alias');
var convertDates = require('@segment/convert-dates');
var integration = require('@segment/analytics.js-integration');

var MAX_YEAR_SUPPORTED_AS_UNIX = 1970;
/**
 * Expose `Customerio` integration.
 */

var Customerio = (module.exports = integration('Customer.io')
    .global('_cio')
    .option('siteId', '')
    .option('datacenter', '')
    .tag(
        'eu-tag',
        '<script id="cio-tracker" src="https://assets.customer.io/assets/track-eu.js" data-site-id="{{ siteId }}">'
    )
    .tag(
        'global-tag',
        '<script id="cio-tracker" src="https://assets.customer.io/assets/track.js" data-site-id="{{ siteId }}">'
    ));

/**
 * Initialize.
 *
 * http://customer.io/docs/api/javascript.html
 *
 * @api public
 */

Customerio.prototype.initialize = function() {
    window._cio = window._cio || [];
    /* eslint-disable */
    (function() {
        var a, b, c;
        a = function(f) {
            return function() {
                window._cio.push([f].concat(Array.prototype.slice.call(arguments, 0)));
            };
        };
        b = ['identify', 'track'];
        for (c = 0; c < b.length; c++) {
            window._cio[b[c]] = a(b[c]);
        }
    })();
    /* eslint-enable */

    if (this.options.datacenter === 'eu' && this.templates['eu-tag']) {
        this.load('eu-tag', this.ready)
    } else {
        this.load('global-tag', this.ready);
    }
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Customerio.prototype.loaded = function() {
    return !!(window._cio && window._cio.push !== Array.prototype.push);
};

/**
 * Page.
 *
 * https://learn.customer.io/api/#apipageview_event
 *
 * @api public
 * @param {Page} page
 */

Customerio.prototype.page = function(page) {
    var name = page.name() || page.url();
    window._cio.page(name, page.properties());
};

/**
 * Identify.
 *
 * http://customer.io/docs/api/javascript.html#section-Identify_customers
 *
 * @api public
 * @param {Identify} identify
 */

Customerio.prototype.identify = function(identify) {
    if (!identify.userId()) return this.debug('user id required');
    var traits = identify.traits({
        createdAt: 'created'
    });
    traits = alias(traits, {
        created: 'created_at'
    });
    traits = convertDates(traits, convertDate);
    window._cio.identify(traits);
};

/**
 * Group.
 *
 * @api public
 * @param {Group} group
 */

Customerio.prototype.group = function(group) {
    var traits = group.traits();
    var user = this.analytics.user();

    traits = alias(traits, function(trait) {
        return 'Group ' + trait;
    });

    this.identify(
        new Identify({
            userId: user.id(),
            traits: traits
        })
    );
};

/**
 * Track.
 *
 * http://customer.io/docs/api/javascript.html#section-Track_a_custom_event
 *
 * @api public
 * @param {Track} track
 */

Customerio.prototype.track = function(track) {
    var properties = track.properties();
    properties = convertDates(properties, convertDate);
    window._cio.track(track.event(), properties);
};

/**
 * Convert a date to the format Customer.io supports.
 *
 * @api private
 * @param {Date} date
 * @return {number}
 */

function convertDate(date) {
    if (date.getFullYear() < MAX_YEAR_SUPPORTED_AS_UNIX) {
        return date.toISOString();
    }
    return Math.floor(date.getTime() / 1000);
}