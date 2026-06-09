export const setupDevtoolsPlugin = (): void => {}

export const isPerformanceSupported = (): boolean => false

export const now = (): number => Date.now()

export default {
  setupDevtoolsPlugin,
  isPerformanceSupported,
  now,
} as {
  setupDevtoolsPlugin: () => void
  isPerformanceSupported: () => boolean
  now: () => number
}
