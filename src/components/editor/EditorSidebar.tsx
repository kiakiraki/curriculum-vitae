export type Section =
  | 'meta'
  | 'basicInfo'
  | 'career'
  | 'skills'
  | 'aiTools'
  | 'strengths'
  | 'workExperience'
  | 'ossContributions'
  | 'personalProjects'
  | 'networkDiagram'
  | 'others'

interface Props {
  currentSection: Section
  onSectionChange: (section: Section) => void
}

const sections: { id: Section; label: string }[] = [
  { id: 'meta', label: 'メタ情報' },
  { id: 'basicInfo', label: '基本情報' },
  { id: 'career', label: '職歴' },
  { id: 'skills', label: 'スキル' },
  { id: 'aiTools', label: 'AIツール' },
  { id: 'strengths', label: '強み' },
  { id: 'workExperience', label: '職務経験詳細' },
  { id: 'ossContributions', label: 'OSS貢献' },
  { id: 'personalProjects', label: '個人開発' },
  { id: 'networkDiagram', label: 'ネットワーク図' },
  { id: 'others', label: 'その他' },
]

export function EditorSidebar({ currentSection, onSectionChange }: Props) {
  return (
    <nav class="editor-sidebar">
      <div class="sidebar-header">
        <h2>CV エディタ</h2>
        <a href="/" class="preview-link" target="_blank">
          プレビュー →
        </a>
      </div>
      <ul class="sidebar-nav">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              type="button"
              class={`sidebar-nav-item ${currentSection === section.id ? 'active' : ''}`}
              onClick={() => onSectionChange(section.id)}
            >
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
