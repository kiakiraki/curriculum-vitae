import fs from 'node:fs'
import path from 'node:path'
import yaml from 'js-yaml'
import type { CVData } from '../types/cv-data'

function assertHttpUrl(url: string, label: string): void {
  const trimmed = url.trim()
  if (trimmed !== url) {
    throw new Error(`URL must not have surrounding whitespace in ${label}`)
  }

  let parsed: URL
  try {
    parsed = new URL(url)
  } catch {
    throw new Error(`Invalid URL in ${label}: ${url}`)
  }

  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
    throw new Error(`Disallowed URL scheme in ${label}: ${url}`)
  }

  if (parsed.username || parsed.password) {
    throw new Error(`URL credentials are not allowed in ${label}`)
  }
}

function pushUrl(
  urls: Array<[string, string]>,
  url: unknown,
  label: string,
): void {
  if (typeof url !== 'string' || url === '') {
    throw new Error(`Missing URL in ${label}`)
  }
  urls.push([url, label])
}

function collectUrls(data: CVData): Array<[string, string]> {
  const urls: Array<[string, string]> = []

  for (const link of data.basicInfo.links) {
    pushUrl(urls, link.url, `basicInfo.links (${link.label})`)
  }

  for (const company of data.workExperience) {
    for (const project of company.projects) {
      for (const ref of project.references) {
        pushUrl(urls, ref.url, `workExperience (${project.title})`)
      }
    }
  }

  for (const contrib of data.ossContributions) {
    for (const pr of contrib.pullRequests) {
      pushUrl(urls, pr.url, `ossContributions (${contrib.project})`)
    }
  }

  for (const project of data.personalProjects) {
    for (const ref of project.references) {
      pushUrl(urls, ref.url, `personalProjects (${project.title})`)
    }
  }

  for (const item of data.others) {
    if (item.reference) {
      pushUrl(urls, item.reference.url, 'others')
    }
  }

  return urls
}

export function loadCvData(): CVData {
  const yamlPath = path.join(process.cwd(), 'src/data/cv-data.yaml')
  const yamlContent = fs.readFileSync(yamlPath, 'utf-8')
  const data = yaml.load(yamlContent, { schema: yaml.JSON_SCHEMA })

  if (!data || typeof data !== 'object') {
    throw new Error('cv-data.yaml did not parse to an object')
  }

  const cvData = data as CVData
  for (const [url, label] of collectUrls(cvData)) {
    assertHttpUrl(url, label)
  }

  return cvData
}
