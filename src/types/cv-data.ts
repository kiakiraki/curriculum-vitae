/**
 * CV Data Type Definitions
 * src/data/cv-data.yaml の型定義
 */

export interface CVMeta {
  title: string
  description: string
  updateDate: string
}

export interface CVBasicInfoName {
  ja: string
  en: string
}

export interface CVBasicInfoLink {
  label: string
  url: string
  displayText: string
}

export interface CVBasicInfo {
  name: CVBasicInfoName
  links: CVBasicInfoLink[]
}

export interface CVCareerItem {
  period: string
  company: string
  details: string[]
}

export interface CVSkillCategory {
  category: string
  description: string | null
  tags: string[]
}

export interface CVAITools {
  work: string[]
  private: string[]
}

export interface CVProjectReference {
  label: string
  url: string
}

export interface CVProject {
  title: string
  period: string | null
  description: string
  highlights: string[]
  references: CVProjectReference[]
  tags: string[]
}

export interface CVWorkExperience {
  company: string
  period: string
  projects: CVProject[]
}

export interface CVPullRequest {
  title: string
  url: string
  number: number
}

export interface CVOSSContribution {
  project: string
  description: string
  pullRequests: CVPullRequest[]
}

export interface CVNetworkDiagram {
  mermaidCode: string
}

export interface CVOtherItem {
  content: string
  reference: CVProjectReference | null
}

export interface CVAIAnalysisCategory {
  title: string
  items: string[]
}

export interface CVAIAnalysis {
  description: string
  categories: CVAIAnalysisCategory[]
}

export interface CVData {
  meta: CVMeta
  basicInfo: CVBasicInfo
  career: CVCareerItem[]
  skills: CVSkillCategory[]
  aiTools: CVAITools
  strengths: string[]
  aiAnalysis: CVAIAnalysis
  workExperience: CVWorkExperience[]
  ossContributions: CVOSSContribution[]
  networkDiagram: CVNetworkDiagram
  others: CVOtherItem[]
}
