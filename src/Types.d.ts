declare module 'is-url'

interface Entry {
  shortcut: string
  url: string
  isRegex?: boolean
}

interface Config {
  port: number
  sources: string[]
  userSource: string
}
