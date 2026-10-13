import { devError, devLog, devWarn } from '~/shared/lib/log'

const { mockedEnv } = vi.hoisted(() => ({
  mockedEnv: { NODE_ENV: 'test' as 'development' | 'test' | 'production' },
}))

vi.mock('~/shared/config/env', () => ({ env: mockedEnv }))

describe('development logging utilities', () => {
  beforeEach(() => {
    mockedEnv.NODE_ENV = 'test'
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it.each([
    ['devLog', devLog, 'log'],
    ['devError', devError, 'error'],
    ['devWarn', devWarn, 'warn'],
  ] as const)('%s does not log outside development', (_name, log, method) => {
    const consoleSpy = vi.spyOn(console, method).mockImplementation(() => {})

    log('message')

    expect(consoleSpy).not.toHaveBeenCalled()
  })

  it.each([
    ['devLog', devLog, 'log'],
    ['devError', devError, 'error'],
    ['devWarn', devWarn, 'warn'],
  ] as const)(
    '%s logs a timestamp and truthy arguments in development',
    (_name, log, method) => {
      mockedEnv.NODE_ENV = 'development'
      const consoleSpy = vi.spyOn(console, method).mockImplementation(() => {})

      log('message', false, null, 0, 'detail')

      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringMatching(/^\d{2}:\d{2}:\d{2}$/),
        'message',
        'detail',
      )
    },
  )
})
