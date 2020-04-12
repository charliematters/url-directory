// Libraries
import FuzzySearch from 'fuzzy-search'

export function getSuggestedEntries(input: string, entries: Entry[]): Entry[] {
  return new FuzzySearch(entries, ['shortcut'], { sort: true }).search(input)
}
