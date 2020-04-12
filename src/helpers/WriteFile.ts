// Libraries
import fs from 'fs'

export async function writeFile(path: string, content: string): Promise<void> {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, content, 'utf8', (error) => {
      error ? reject(error) : resolve()
    })
  })
}
