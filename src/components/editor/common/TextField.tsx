interface Props {
  label: string
  value: string
  onChange: (value: string) => void
  multiline?: boolean
  rows?: number
  placeholder?: string
}

export function TextField({
  label,
  value,
  onChange,
  multiline = false,
  rows = 3,
  placeholder,
}: Props) {
  return (
    <div class="field">
      <label class="field-label">{label}</label>
      {multiline ? (
        <textarea
          class="field-input"
          value={value}
          onInput={(e) => onChange((e.target as HTMLTextAreaElement).value)}
          rows={rows}
          placeholder={placeholder}
        />
      ) : (
        <input
          type="text"
          class="field-input"
          value={value}
          onInput={(e) => onChange((e.target as HTMLInputElement).value)}
          placeholder={placeholder}
        />
      )}
    </div>
  )
}
