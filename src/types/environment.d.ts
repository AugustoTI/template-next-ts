// Set the typing of your environment variables here 👇
type MyVariables = {}

declare global {
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface ProcessEnv extends MyVariables {}
  }
}

export {}
