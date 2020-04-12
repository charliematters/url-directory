// Libraries
import path from 'path'
import isArray from 'lodash/isArray'

// Helpers
import { readFile } from './ReadFile'
import { validateEntry } from './ValidateEntry'

export async function readEntriesFromFile(filepath: string): Promise<Entry[]> {
  const resolvedPath = path.resolve(filepath)
  const file = await readFile(resolvedPath)
  const entries = JSON.parse(file)
  if (!isArray(entries)) {
    throw new Error(`Invalid Data: expected array, but got ${typeof entries}`)
  }
  return entries.filter(validateEntry)
}
