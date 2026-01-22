import type { CVMeta } from '../../../types/cv-data'
import { TextField } from '../common/TextField'

interface Props {
  data: CVMeta
  onChange: (data: CVMeta) => void
}

export function MetaEditor({ data, onChange }: Props) {
  return (
    <div class="section-editor">
      <h2>メタ情報</h2>
      <TextField
        label="タイトル"
        value={data.title}
        onChange={(value) => onChange({ ...data, title: value })}
      />
      <TextField
        label="説明"
        value={data.description}
        onChange={(value) => onChange({ ...data, description: value })}
      />
      <TextField
        label="更新日"
        value={data.updateDate}
        onChange={(value) => onChange({ ...data, updateDate: value })}
        placeholder="2025/06現在"
      />
    </div>
  )
}
