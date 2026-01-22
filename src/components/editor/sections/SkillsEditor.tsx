import type { CVSkillCategory } from '../../../types/cv-data'
import { TextField } from '../common/TextField'
import { TagInput } from '../common/TagInput'
import { ArrayField } from '../common/ArrayField'

interface Props {
  data: CVSkillCategory[]
  onChange: (data: CVSkillCategory[]) => void
}

export function SkillsEditor({ data, onChange }: Props) {
  return (
    <div class="section-editor">
      <h2>スキル</h2>

      <ArrayField
        label="スキルカテゴリ"
        items={data}
        onChange={onChange}
        itemLabel="カテゴリ"
        createItem={() => ({ category: '', description: '', tags: [] })}
        renderItem={(skill, _index, onItemChange) => (
          <div class="skill-item-editor">
            <TextField
              label="カテゴリ名"
              value={skill.category}
              onChange={(value) => onItemChange({ ...skill, category: value })}
              placeholder="Machine Learning / Deep Learning"
            />
            <TextField
              label="説明"
              value={skill.description || ''}
              onChange={(value) =>
                onItemChange({ ...skill, description: value || null })
              }
              multiline
              rows={5}
              placeholder="スキルの詳細説明..."
            />
            <TagInput
              label="技術タグ"
              tags={skill.tags}
              onChange={(tags) => onItemChange({ ...skill, tags })}
              placeholder="タグを入力して Enter"
            />
          </div>
        )}
      />
    </div>
  )
}
