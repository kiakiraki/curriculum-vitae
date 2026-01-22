import { ArrayField } from '../common/ArrayField'
import { TextField } from '../common/TextField'

interface Props {
  data: string[]
  onChange: (data: string[]) => void
}

export function StrengthsEditor({ data, onChange }: Props) {
  return (
    <div class="section-editor">
      <h2>強み</h2>

      <ArrayField
        label="強み一覧"
        items={data}
        onChange={onChange}
        itemLabel="強み"
        createItem={() => ''}
        renderItem={(strength, _index, onItemChange) => (
          <TextField label="" value={strength} onChange={onItemChange} />
        )}
      />
    </div>
  )
}
