import { expect, it, describe } from 'vitest'
import * as devtoolsAPI from '../src'

describe('vue-devtools-stub', () => {
  it('setupDevtoolsPlugin', () => {
    expect(devtoolsAPI.setupDevtoolsPlugin()).toBe(undefined)
  })
  it('setupDevtoolsPlugin', () => {
    expect(devtoolsAPI.isPerformanceSupported()).toBe(false)
  })
  it('setupDevtoolsPlugin', () => {
    expect(typeof devtoolsAPI.now()).toBe('number')
  })
})
