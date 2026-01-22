/**
 * Vite plugin for CV Editor API
 * Development-only API endpoints for reading/writing CV data
 */

import fs from 'node:fs'
import path from 'node:path'
import yaml from 'js-yaml'

const CV_DATA_PATH = path.join(process.cwd(), 'src/data/cv-data.yaml')

/**
 * @returns {import('vite').Plugin}
 */
export function cvEditorApi() {
  return {
    name: 'cv-editor-api',
    configureServer(server) {
      // Only enabled in development mode
      server.middlewares.use(async (req, res, next) => {
        // Handle GET /api/cv-data
        if (req.url === '/api/cv-data' && req.method === 'GET') {
          try {
            const yamlContent = fs.readFileSync(CV_DATA_PATH, 'utf-8')
            const data = yaml.load(yamlContent)

            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(data, null, 2))
          } catch (error) {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: error.message }))
          }
          return
        }

        // Handle POST /api/cv-data
        if (req.url === '/api/cv-data' && req.method === 'POST') {
          try {
            let body = ''
            for await (const chunk of req) {
              body += chunk
            }

            const data = JSON.parse(body)
            const yamlContent = yaml.dump(data, {
              indent: 2,
              lineWidth: -1, // Don't wrap long lines
              quotingType: '"',
              forceQuotes: false,
              noRefs: true,
            })

            fs.writeFileSync(CV_DATA_PATH, yamlContent, 'utf-8')

            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ success: true }))
          } catch (error) {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: error.message }))
          }
          return
        }

        next()
      })
    },
  }
}
