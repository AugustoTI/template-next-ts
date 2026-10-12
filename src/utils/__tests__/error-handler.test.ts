import { errorHandler, errorHandlerAsync } from '~/utils/error-handler'

describe('errorHandler', () => {
  it('returns the result and a null error when the function succeeds', () => {
    expect(errorHandler(() => 'result')).toEqual(['result', null])
  })

  it('returns the thrown error and null data when the function fails', () => {
    const error = new Error('failure')

    expect(
      errorHandler(() => {
        throw error
      }),
    ).toEqual([null, error])
  })
})

describe('errorHandlerAsync', () => {
  it('returns the resolved value and a null error', async () => {
    await expect(errorHandlerAsync(Promise.resolve('result'))).resolves.toEqual([
      'result',
      null,
    ])
  })

  it('returns the rejection reason and null data', async () => {
    const error = new Error('failure')

    await expect(errorHandlerAsync(Promise.reject(error))).resolves.toEqual([null, error])
  })
})
