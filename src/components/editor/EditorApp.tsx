import { useState, useEffect, useCallback } from 'preact/hooks'
import type { CVData } from '../../types/cv-data'
import { EditorSidebar, type Section } from './EditorSidebar'
import { MetaEditor } from './sections/MetaEditor'
import { BasicInfoEditor } from './sections/BasicInfoEditor'
import { CareerEditor } from './sections/CareerEditor'
import { SkillsEditor } from './sections/SkillsEditor'
import { AIToolsEditor } from './sections/AIToolsEditor'
import { StrengthsEditor } from './sections/StrengthsEditor'
import { WorkExperienceEditor } from './sections/WorkExperienceEditor'
import { OSSContributionsEditor } from './sections/OSSContributionsEditor'
import { PersonalProjectsEditor } from './sections/PersonalProjectsEditor'
import { NetworkDiagramEditor } from './sections/NetworkDiagramEditor'
import { OthersEditor } from './sections/OthersEditor'

export function EditorApp() {
  const [data, setData] = useState<CVData | null>(null)
  const [currentSection, setCurrentSection] = useState<Section>('meta')
  const [saveStatus, setSaveStatus] = useState<
    'idle' | 'saving' | 'saved' | 'error'
  >('idle')
  const [error, setError] = useState<string | null>(null)

  // Load data on mount
  useEffect(() => {
    fetch('/api/cv-data')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError(err.message))
  }, [])

  // Debounced save
  const saveData = useCallback(async (newData: CVData) => {
    setSaveStatus('saving')
    try {
      const res = await fetch('/api/cv-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newData),
      })
      if (!res.ok) throw new Error('Save failed')
      setSaveStatus('saved')
      setTimeout(() => setSaveStatus('idle'), 2000)
    } catch (err) {
      setSaveStatus('error')
      setError((err as Error).message)
    }
  }, [])

  // Auto-save with debounce
  useEffect(() => {
    if (!data) return
    const timer = setTimeout(() => {
      saveData(data)
    }, 1000)
    return () => clearTimeout(timer)
  }, [data, saveData])

  const updateData = <K extends keyof CVData>(key: K, value: CVData[K]) => {
    if (!data) return
    setData({ ...data, [key]: value })
  }

  if (error) {
    return (
      <div class="editor-error">
        <h1>エラー</h1>
        <p>{error}</p>
        <p>このエディタは開発環境でのみ動作します。</p>
      </div>
    )
  }

  if (!data) {
    return (
      <div class="editor-loading">
        <p>読み込み中...</p>
      </div>
    )
  }

  const renderSection = () => {
    switch (currentSection) {
      case 'meta':
        return (
          <MetaEditor
            data={data.meta}
            onChange={(meta) => updateData('meta', meta)}
          />
        )
      case 'basicInfo':
        return (
          <BasicInfoEditor
            data={data.basicInfo}
            onChange={(basicInfo) => updateData('basicInfo', basicInfo)}
          />
        )
      case 'career':
        return (
          <CareerEditor
            data={data.career}
            onChange={(career) => updateData('career', career)}
          />
        )
      case 'skills':
        return (
          <SkillsEditor
            data={data.skills}
            onChange={(skills) => updateData('skills', skills)}
          />
        )
      case 'aiTools':
        return (
          <AIToolsEditor
            data={data.aiTools}
            onChange={(aiTools) => updateData('aiTools', aiTools)}
          />
        )
      case 'strengths':
        return (
          <StrengthsEditor
            data={data.strengths}
            onChange={(strengths) => updateData('strengths', strengths)}
          />
        )
      case 'workExperience':
        return (
          <WorkExperienceEditor
            data={data.workExperience}
            onChange={(workExperience) =>
              updateData('workExperience', workExperience)
            }
          />
        )
      case 'ossContributions':
        return (
          <OSSContributionsEditor
            data={data.ossContributions}
            onChange={(ossContributions) =>
              updateData('ossContributions', ossContributions)
            }
          />
        )
      case 'personalProjects':
        return (
          <PersonalProjectsEditor
            data={data.personalProjects}
            onChange={(personalProjects) =>
              updateData('personalProjects', personalProjects)
            }
          />
        )
      case 'networkDiagram':
        return (
          <NetworkDiagramEditor
            data={data.networkDiagram}
            onChange={(networkDiagram) =>
              updateData('networkDiagram', networkDiagram)
            }
          />
        )
      case 'others':
        return (
          <OthersEditor
            data={data.others}
            onChange={(others) => updateData('others', others)}
          />
        )
      default:
        return null
    }
  }

  return (
    <div class="editor-app">
      <EditorSidebar
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
      />
      <main class="editor-main">
        <div class="editor-status-bar">
          <span
            class={`save-status ${saveStatus}`}
            role="status"
            aria-live="polite"
          >
            {saveStatus === 'idle' && ''}
            {saveStatus === 'saving' && '保存中...'}
            {saveStatus === 'saved' && '保存しました'}
            {saveStatus === 'error' && '保存エラー'}
          </span>
        </div>
        <div class="editor-content">{renderSection()}</div>
      </main>
    </div>
  )
}
