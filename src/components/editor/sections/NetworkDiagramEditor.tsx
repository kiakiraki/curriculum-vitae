import type { CVNetworkDiagram } from '../../../types/cv-data'
import { TextField } from '../common/TextField'

interface Props {
  data: CVNetworkDiagram
  onChange: (data: CVNetworkDiagram) => void
}

export function NetworkDiagramEditor({ data, onChange }: Props) {
  return (
    <div class="section-editor">
      <h2>ホームネットワーク構成</h2>

      <TextField
        label="Mermaidコード"
        value={data.mermaidCode}
        onChange={(value) => onChange({ ...data, mermaidCode: value })}
        multiline
        rows={20}
        placeholder="graph TD
  Router[Router] --> Switch[Switch]
  ..."
      />

      <div class="mermaid-preview">
        <h3>プレビュー</h3>
        <p class="hint">※ プレビューは保存後、メインページで確認してください</p>
      </div>
    </div>
  )
}
