// Libraries
import path from 'path'

// Helpers
import { getConfig } from './GetConfig'
import { writeFile } from './WriteFile'
import { validateEntry } from './ValidateEntry'
import { readEntriesFromFile } from './ReadEntriesFromFile'

async function writeEntriesToFile(entries: Entry[], filepath: string): Promise<void> {
  const resolvedPath = path.resolve(filepath)
  return writeFile(resolvedPath, JSON.stringify(entries, null, 2))
}

export async function saveEntry(entry: Entry): Promise<void> {
  if (!validateEntry(entry)) {
    throw new Error('Invalid shortcut')
  }
  const { userSource } = await getConfig()
  const userEntries = await readEntriesFromFile(userSource).catch(() => [])
  return writeEntriesToFile([entry, ...userEntries], userSource)
}
