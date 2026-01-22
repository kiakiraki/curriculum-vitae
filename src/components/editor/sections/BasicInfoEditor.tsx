import type { CVBasicInfo, CVBasicInfoLink } from '../../../types/cv-data'
import { TextField } from '../common/TextField'
import { ArrayField } from '../common/ArrayField'

interface Props {
  data: CVBasicInfo
  onChange: (data: CVBasicInfo) => void
}

export function BasicInfoEditor({ data, onChange }: Props) {
  const handleNameChange = (key: 'ja' | 'en', value: string) => {
    onChange({
      ...data,
      name: { ...data.name, [key]: value },
    })
  }

  const handleLinksChange = (links: CVBasicInfoLink[]) => {
    onChange({ ...data, links })
  }

  return (
    <div class="section-editor">
      <h2>基本情報</h2>

      <div class="field-group">
        <h3>氏名</h3>
        <TextField
          label="日本語"
          value={data.name.ja}
          onChange={(value) => handleNameChange('ja', value)}
        />
        <TextField
          label="英語"
          value={data.name.en}
          onChange={(value) => handleNameChange('en', value)}
        />
      </div>

      <ArrayField
        label="リンク"
        items={data.links}
        onChange={handleLinksChange}
        itemLabel="リンク"
        createItem={() => ({ label: '', url: '', displayText: '' })}
        renderItem={(link, _index, onItemChange) => (
          <div class="link-item">
            <TextField
              label="ラベル"
              value={link.label}
              onChange={(value) => onItemChange({ ...link, label: value })}
              placeholder="GitHub"
            />
            <TextField
              label="URL"
              value={link.url}
              onChange={(value) => onItemChange({ ...link, url: value })}
              placeholder="https://github.com/username"
            />
            <TextField
              label="表示テキスト"
              value={link.displayText}
              onChange={(value) =>
                onItemChange({ ...link, displayText: value })
              }
              placeholder="username"
            />
          </div>
        )}
      />
    </div>
  )
}
