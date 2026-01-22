import type { CVCareerItem } from '../../../types/cv-data'
import { TextField } from '../common/TextField'
import { ArrayField } from '../common/ArrayField'

interface Props {
  data: CVCareerItem[]
  onChange: (data: CVCareerItem[]) => void
}

export function CareerEditor({ data, onChange }: Props) {
  return (
    <div class="section-editor">
      <h2>職歴</h2>

      <ArrayField
        label="職歴一覧"
        items={data}
        onChange={onChange}
        itemLabel="職歴"
        createItem={() => ({ period: '', company: '', details: [''] })}
        renderItem={(career, _index, onItemChange) => (
          <div class="career-item-editor">
            <TextField
              label="期間"
              value={career.period}
              onChange={(value) => onItemChange({ ...career, period: value })}
              placeholder="2021/03〜"
            />
            <TextField
              label="会社名"
              value={career.company}
              onChange={(value) => onItemChange({ ...career, company: value })}
            />
            <ArrayField
              label="詳細"
              items={career.details}
              onChange={(details) => onItemChange({ ...career, details })}
              itemLabel="詳細項目"
              createItem={() => ''}
              renderItem={(detail, _detailIndex, onDetailChange) => (
                <TextField
                  label=""
                  value={detail}
                  onChange={onDetailChange}
                  placeholder="役職・部署など"
                />
              )}
            />
          </div>
        )}
      />
    </div>
  )
}
