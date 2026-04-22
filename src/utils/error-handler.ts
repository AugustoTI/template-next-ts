export type TupleResult<T, E = Error> = [T, null] | [null, E]

export function errorHandler<T, E = Error>(fn: () => T): TupleResult<T, E> {
  try {
    return [fn(), null]
  } catch (err) {
    return [null, err as E]
  }
}

export async function errorHandlerAsync<T, E = Error>(
  promise: Promise<T>,
): Promise<TupleResult<T, E>> {
  try {
    const data = await promise
    return [data, null]
  } catch (err) {
    return [null, err as E]
  }
}
