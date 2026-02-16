import type { JSX } from 'preact'

interface Props<T> {
  label: string
  items: T[]
  onChange: (items: T[]) => void
  renderItem: (
    item: T,
    index: number,
    onChange: (item: T) => void,
  ) => JSX.Element
  createItem: () => T
  itemLabel?: string
}

export function ArrayField<T>({
  label,
  items,
  onChange,
  renderItem,
  createItem,
  itemLabel = 'アイテム',
}: Props<T>) {
  const handleItemChange = (index: number, item: T) => {
    const newItems = [...items]
    newItems[index] = item
    onChange(newItems)
  }

  const handleAdd = () => {
    onChange([...items, createItem()])
  }

  const handleRemove = (index: number) => {
    onChange(items.filter((_, i) => i !== index))
  }

  const handleMoveUp = (index: number) => {
    if (index === 0) return
    const newItems = [...items]
    ;[newItems[index - 1], newItems[index]] = [
      newItems[index],
      newItems[index - 1],
    ]
    onChange(newItems)
  }

  const handleMoveDown = (index: number) => {
    if (index === items.length - 1) return
    const newItems = [...items]
    ;[newItems[index], newItems[index + 1]] = [
      newItems[index + 1],
      newItems[index],
    ]
    onChange(newItems)
  }

  return (
    <div class="array-field">
      <div class="array-field-header">
        <label class="field-label">{label}</label>
        <button type="button" class="btn btn-add" onClick={handleAdd}>
          + {itemLabel}を追加
        </button>
      </div>
      <div class="array-field-items">
        {items.map((item, index) => (
          <div key={index} class="array-field-item">
            <div class="array-field-item-controls">
              <button
                type="button"
                class="btn btn-sm"
                onClick={() => handleMoveUp(index)}
                disabled={index === 0}
                aria-label={`${itemLabel} ${index + 1} を上に移動`}
              >
                ↑
              </button>
              <button
                type="button"
                class="btn btn-sm"
                onClick={() => handleMoveDown(index)}
                disabled={index === items.length - 1}
                aria-label={`${itemLabel} ${index + 1} を下に移動`}
              >
                ↓
              </button>
              <button
                type="button"
                class="btn btn-sm btn-danger"
                onClick={() => handleRemove(index)}
                aria-label={`${itemLabel} ${index + 1} を削除`}
              >
                削除
              </button>
            </div>
            <div class="array-field-item-content">
              {renderItem(item, index, (newItem) =>
                handleItemChange(index, newItem),
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
