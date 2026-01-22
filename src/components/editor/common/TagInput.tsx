import { useState } from 'preact/hooks'

interface Props {
  label: string
  tags: string[]
  onChange: (tags: string[]) => void
  placeholder?: string
}

export function TagInput({
  label,
  tags,
  onChange,
  placeholder = 'タグを入力して Enter',
}: Props) {
  const [inputValue, setInputValue] = useState('')

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault()
      if (!tags.includes(inputValue.trim())) {
        onChange([...tags, inputValue.trim()])
      }
      setInputValue('')
    } else if (e.key === 'Backspace' && !inputValue && tags.length > 0) {
      onChange(tags.slice(0, -1))
    }
  }

  const handleRemove = (index: number) => {
    onChange(tags.filter((_, i) => i !== index))
  }

  return (
    <div class="field">
      <label class="field-label">{label}</label>
      <div class="tag-input-container">
        <div class="tags">
          {tags.map((tag, index) => (
            <span key={index} class="tag">
              {tag}
              <button
                type="button"
                class="tag-remove"
                onClick={() => handleRemove(index)}
              >
                ×
              </button>
            </span>
          ))}
        </div>
        <input
          type="text"
          class="tag-input"
          value={inputValue}
          onInput={(e) => setInputValue((e.target as HTMLInputElement).value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}
