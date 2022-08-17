import { expect, it, describe } from 'vitest'
import * as actualDevtools from '@vue/devtools-api'
import * as devtoolsAPI from '../src'

describe('vue-devtools-stub', () => {
  describe('has same exports of @vue/devtools-api', () => {
    for (const key in actualDevtools) {
      it(key, () => {
        expect(typeof (devtoolsAPI as any)[key]).toBe(typeof (actualDevtools as any)[key])
      })
    }
  })
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
