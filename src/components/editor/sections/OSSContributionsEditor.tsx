import type { CVOSSContribution, CVPullRequest } from '../../../types/cv-data'
import { TextField } from '../common/TextField'
import { ArrayField } from '../common/ArrayField'

interface Props {
  data: CVOSSContribution[]
  onChange: (data: CVOSSContribution[]) => void
}

export function OSSContributionsEditor({ data, onChange }: Props) {
  return (
    <div class="section-editor">
      <h2>OSSコントリビューション</h2>

      <ArrayField
        label="プロジェクト一覧"
        items={data}
        onChange={onChange}
        itemLabel="プロジェクト"
        createItem={() => ({
          project: '',
          description: '',
          pullRequests: [],
        })}
        renderItem={(contrib, _index, onItemChange) => (
          <div class="contribution-item-editor">
            <TextField
              label="プロジェクト名"
              value={contrib.project}
              onChange={(value) => onItemChange({ ...contrib, project: value })}
            />
            <TextField
              label="説明"
              value={contrib.description}
              onChange={(value) =>
                onItemChange({ ...contrib, description: value })
              }
              multiline
              rows={3}
            />
            <ArrayField
              label="Pull Requests"
              items={contrib.pullRequests}
              onChange={(pullRequests) =>
                onItemChange({ ...contrib, pullRequests })
              }
              itemLabel="PR"
              createItem={() => ({
                title: '',
                url: '',
                number: 0,
              })}
              renderItem={(
                pr: CVPullRequest,
                _prIndex: number,
                onPrChange: (pr: CVPullRequest) => void,
              ) => (
                <div class="pr-item">
                  <TextField
                    label="タイトル"
                    value={pr.title}
                    onChange={(value) => onPrChange({ ...pr, title: value })}
                  />
                  <TextField
                    label="URL"
                    value={pr.url}
                    onChange={(value) => onPrChange({ ...pr, url: value })}
                    placeholder="https://github.com/org/repo/pull/123"
                  />
                  <div class="field">
                    <label class="field-label">PR番号</label>
                    <input
                      type="number"
                      class="field-input"
                      value={pr.number}
                      onInput={(e) =>
                        onPrChange({
                          ...pr,
                          number:
                            parseInt((e.target as HTMLInputElement).value) || 0,
                        })
                      }
                    />
                  </div>
                </div>
              )}
            />
          </div>
        )}
      />
    </div>
  )
}
