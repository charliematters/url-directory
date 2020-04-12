// Libraries
import isUrl from 'is-url'
import isString from 'lodash/isString'

export function validateEntry(entry: Entry): boolean {
  return (
    isString(entry.shortcut) &&
    entry.shortcut.length > 0 &&
    isString(entry.url) &&
    entry.url.length > 0 &&
    isUrl(entry.url) &&
    [undefined, true, false].includes(entry.isRegex)
  )
}
