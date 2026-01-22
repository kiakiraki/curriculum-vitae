import type {
  CVWorkExperience,
  CVProject,
  CVProjectReference,
} from '../../../types/cv-data'
import { TextField } from '../common/TextField'
import { TagInput } from '../common/TagInput'
import { ArrayField } from '../common/ArrayField'

interface Props {
  data: CVWorkExperience[]
  onChange: (data: CVWorkExperience[]) => void
}

function ProjectEditor({
  project,
  onChange,
}: {
  project: CVProject
  onChange: (project: CVProject) => void
}) {
  return (
    <div class="project-editor">
      <TextField
        label="プロジェクト名"
        value={project.title}
        onChange={(value) => onChange({ ...project, title: value })}
      />
      <TextField
        label="期間"
        value={project.period || ''}
        onChange={(value) => onChange({ ...project, period: value || null })}
        placeholder="2021/03～進行中"
      />
      <TextField
        label="説明"
        value={project.description}
        onChange={(value) => onChange({ ...project, description: value })}
        multiline
        rows={4}
      />
      <ArrayField
        label="ハイライト"
        items={project.highlights}
        onChange={(highlights) => onChange({ ...project, highlights })}
        itemLabel="項目"
        createItem={() => ''}
        renderItem={(highlight, _index, onItemChange) => (
          <TextField label="" value={highlight} onChange={onItemChange} />
        )}
      />
      <ArrayField
        label="参考リンク"
        items={project.references}
        onChange={(references) => onChange({ ...project, references })}
        itemLabel="リンク"
        createItem={() => ({ label: '', url: '' })}
        renderItem={(
          ref: CVProjectReference,
          _index: number,
          onItemChange: (ref: CVProjectReference) => void,
        ) => (
          <div class="reference-item">
            <TextField
              label="ラベル"
              value={ref.label}
              onChange={(value) => onItemChange({ ...ref, label: value })}
            />
            <TextField
              label="URL"
              value={ref.url}
              onChange={(value) => onItemChange({ ...ref, url: value })}
            />
          </div>
        )}
      />
      <TagInput
        label="技術タグ"
        tags={project.tags}
        onChange={(tags) => onChange({ ...project, tags })}
      />
    </div>
  )
}

export function WorkExperienceEditor({ data, onChange }: Props) {
  return (
    <div class="section-editor">
      <h2>職務経験詳細</h2>

      <ArrayField
        label="会社一覧"
        items={data}
        onChange={onChange}
        itemLabel="会社"
        createItem={() => ({
          company: '',
          period: '',
          projects: [],
        })}
        renderItem={(experience, _index, onItemChange) => (
          <div class="experience-item-editor">
            <TextField
              label="会社名"
              value={experience.company}
              onChange={(value) =>
                onItemChange({ ...experience, company: value })
              }
            />
            <TextField
              label="在籍期間"
              value={experience.period}
              onChange={(value) =>
                onItemChange({ ...experience, period: value })
              }
              placeholder="2021/03～現在"
            />
            <ArrayField
              label="プロジェクト"
              items={experience.projects}
              onChange={(projects) => onItemChange({ ...experience, projects })}
              itemLabel="プロジェクト"
              createItem={() => ({
                title: '',
                period: null,
                description: '',
                highlights: [],
                references: [],
                tags: [],
              })}
              renderItem={(project, _projectIndex, onProjectChange) => (
                <ProjectEditor project={project} onChange={onProjectChange} />
              )}
            />
          </div>
        )}
      />
    </div>
  )
}
