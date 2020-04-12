// Libraries
import memoize from 'lodash/memoize'

const makeRegex = memoize((string) => new RegExp(`^${string}$`, 'i'))

export async function getUrlFromQuery(query: string, entries: Entry[]): Promise<string | null> {
  let url = null

  entries.find((entry) => {
    const shortcut = entry.shortcut.trim()
    if (entry.isRegex) {
      // Check the regex
      const regex = makeRegex(shortcut)
      if (query.match(regex)) {
        url = query.replace(regex, entry.url)
        return true
      }
    } else {
      // Exact match
      if (shortcut.toLowerCase() === query.toLowerCase()) {
        url = entry.url
        return true
      }
    }
  })

  return url
}
