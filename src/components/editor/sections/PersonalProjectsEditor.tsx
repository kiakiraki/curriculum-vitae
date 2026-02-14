import type { CVPersonalProject } from '../../../types/cv-data'
import { TextField } from '../common/TextField'
import { TagInput } from '../common/TagInput'
import { ArrayField } from '../common/ArrayField'

interface Props {
  data: CVPersonalProject[]
  onChange: (data: CVPersonalProject[]) => void
}

export function PersonalProjectsEditor({ data, onChange }: Props) {
  return (
    <div class="section-editor">
      <h2>個人開発</h2>

      <ArrayField
        label="プロジェクト一覧"
        items={data}
        onChange={onChange}
        itemLabel="プロジェクト"
        createItem={() => ({
          title: '',
          status: '開発中',
          description: '',
          highlights: [],
          references: [],
          tags: [],
        })}
        renderItem={(project, _index, onItemChange) => (
          <div class="project-item-editor">
            <TextField
              label="プロジェクト名"
              value={project.title}
              onChange={(value) => onItemChange({ ...project, title: value })}
            />
            <TextField
              label="ステータス"
              value={project.status}
              onChange={(value) => onItemChange({ ...project, status: value })}
            />
            <TextField
              label="説明"
              value={project.description}
              onChange={(value) =>
                onItemChange({ ...project, description: value })
              }
              multiline
              rows={6}
            />
            <TextField
              label="ハイライト (1行1項目)"
              value={project.highlights.join('\n')}
              onChange={(value) =>
                onItemChange({
                  ...project,
                  highlights: value.split('\n').filter((s) => s.trim()),
                })
              }
              multiline
              rows={4}
            />
            <TagInput
              label="技術タグ"
              tags={project.tags}
              onChange={(tags) => onItemChange({ ...project, tags })}
            />
          </div>
        )}
      />
    </div>
  )
}
