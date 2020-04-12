// Helpers
import { getConfig } from './GetConfig'
import { readEntriesFromFile } from './ReadEntriesFromFile'

export async function getEntries(): Promise<Entry[]> {
  const config = await getConfig()
  const allSources = [config.userSource, ...config.sources]

  const allFiles = await Promise.all(
    allSources.map((filepath) =>
      readEntriesFromFile(filepath).catch((error) => {
        console.log(`Could not open ${filepath} - ${error.message}`)
        return []
      }),
    ),
  )
  return allFiles.reduce((allEntries, entriesFromFile) => [...allEntries, ...entriesFromFile], [])
}
