// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=33-44
// source=stories/WfBadgeTag.stories.js
// component=wf-badge-tag
import figma from 'figma'
const instance = figma.selectedInstance
const content = instance.getString("Content")
export default {
  example: figma.code`<span class="wf-badge">${content}</span>`,
  imports: [],
  id: 'wf-badge-tag',
  metadata: { nestable: false },
}
