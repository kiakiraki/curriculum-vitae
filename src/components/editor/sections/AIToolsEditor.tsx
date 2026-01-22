import type { CVAITools } from '../../../types/cv-data'
import { TagInput } from '../common/TagInput'

interface Props {
  data: CVAITools
  onChange: (data: CVAITools) => void
}

export function AIToolsEditor({ data, onChange }: Props) {
  return (
    <div class="section-editor">
      <h2>AIツール利用状況</h2>

      <TagInput
        label="業務で利用しているもの"
        tags={data.work}
        onChange={(work) => onChange({ ...data, work })}
        placeholder="ツール名を入力して Enter"
      />

      <TagInput
        label="プライベートで利用しているもの"
        tags={data.private}
        onChange={(privateTags) => onChange({ ...data, private: privateTags })}
        placeholder="ツール名を入力して Enter"
      />
    </div>
  )
}
