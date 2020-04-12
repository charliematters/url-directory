// Helpers
import { readFile } from './ReadFile'

const defaultConfig: Config = {
  port: 3000,
  sources: [],
  userSource: './data/user.json',
}

let tempPort: number

export async function getConfig(): Promise<Config> {
  let configFromFile: Partial<Config> = {}
  try {
    const jsonFromFile = await readFile('data/config.json')
    configFromFile = JSON.parse(jsonFromFile)
  } catch (error) {
    console.log(`Could not load config from data/config.json: ${error.message}`)
  }

  const config = { ...defaultConfig, ...configFromFile }

  // Watch for port changes - we can't react to these
  if (tempPort && tempPort !== config.port) {
    console.log(`Port has changed from ${tempPort} to ${config.port} - a restart will be required`)
  }
  tempPort = config.port

  return config
}
