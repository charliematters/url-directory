// Libraries
import fs from 'fs'

export async function readFile(path: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      error ? reject(error) : resolve(data)
    })
  })
}
