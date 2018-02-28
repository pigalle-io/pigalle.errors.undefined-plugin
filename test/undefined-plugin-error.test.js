/**
 * This file is part of pigalle.errors.undefined-plugin
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/* eslint-env mocha */

require('should')

const {UndefinedPluginError} = require('../lib/undefined-plugin-error')

describe('Class {UndefinedPluginError}', () => {
  it('should be a function', () => {
    (UndefinedPluginError).should.be.a.Function()
  })
})

describe('Create a instance of {UndefinedPluginError} using <new> keyword', () => {
  it('should be an object', () => {
    (new UndefinedPluginError()).should.be.an.Object()
  })

  it('should be an instance of {UndefinedPluginError}', () => {
    (new UndefinedPluginError()).should.be.an.instanceOf(UndefinedPluginError)
  })
})

describe('Throw a new {UndefinedPluginError}', () => {
  it('should throw an {Error}', () => {
    (() => { throw new UndefinedPluginError() }).should.throw(Error)
  })

  it('should throw an {UndefinedPluginError}', () => {
    (() => { throw new UndefinedPluginError() }).should.throw(UndefinedPluginError)
  })
})
