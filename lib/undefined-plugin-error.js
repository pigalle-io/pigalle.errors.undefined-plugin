/**
 * This file is part of pigalle.errors.undefined-plugin
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */


/**
 * @module undefined-plugin-error
 * @description An exception to throw when a Pigalle plugin is missing.
 * @example
 *
 * const {UndefinedPluginError} = require('@pigalle/errors.undefined-plugin')
 *
 * if (!plugin) {
 *   throw UndefinedPluginError.factory()
 * }
 *
 */

const {ErrorBase} = require('@pigalle/core.base.error')

/**
 * Exception class to raise when missing a Pigalle plugin.
 *
 * @class
 * @public
 */
class UndefinedPluginError extends ErrorBase {
  /**
   * Create a new instance of {UndefinedPluginError}
   *
   * @param args
   * @constructor
   * @public
   */
  constructor (...args) {
    super('Undefined plugin', ...args)
  }
}

module.exports = {}
module.exports.UndefinedPluginError = UndefinedPluginError
