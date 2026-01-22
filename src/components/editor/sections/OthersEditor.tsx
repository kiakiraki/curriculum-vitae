import type { CVOtherItem } from '../../../types/cv-data'
import { TextField } from '../common/TextField'
import { ArrayField } from '../common/ArrayField'

interface Props {
  data: CVOtherItem[]
  onChange: (data: CVOtherItem[]) => void
}

export function OthersEditor({ data, onChange }: Props) {
  return (
    <div class="section-editor">
      <h2>その他</h2>

      <ArrayField
        label="項目一覧"
        items={data}
        onChange={onChange}
        itemLabel="項目"
        createItem={() => ({
          content: '',
          reference: null,
        })}
        renderItem={(item, _index, onItemChange) => (
          <div class="other-item-editor">
            <TextField
              label="内容"
              value={item.content}
              onChange={(value) => onItemChange({ ...item, content: value })}
              multiline
              rows={2}
            />
            <div class="field-group">
              <h4>参考リンク (任意)</h4>
              <TextField
                label="ラベル"
                value={item.reference?.label || ''}
                onChange={(value) =>
                  onItemChange({
                    ...item,
                    reference: value
                      ? { label: value, url: item.reference?.url || '' }
                      : null,
                  })
                }
              />
              <TextField
                label="URL"
                value={item.reference?.url || ''}
                onChange={(value) =>
                  onItemChange({
                    ...item,
                    reference:
                      value || item.reference?.label
                        ? {
                            label: item.reference?.label || '',
                            url: value,
                          }
                        : null,
                  })
                }
              />
            </div>
          </div>
        )}
      />
    </div>
  )
}
