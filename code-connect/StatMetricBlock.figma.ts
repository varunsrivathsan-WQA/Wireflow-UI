// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=33-46
// source=stories/WfStatMetricBlock.stories.js
// component=wf-stat-metric-block
import figma from 'figma'
const instance = figma.selectedInstance
const value = instance.getString("Value")
export default {
  example: figma.code`<div class="wf-stat">
  <strong>${value}</strong>
  <span>Metric label</span>
</div>`,
  imports: [],
  id: 'wf-stat-metric-block',
  metadata: { nestable: false },
}
