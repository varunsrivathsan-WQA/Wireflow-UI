// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=11-15
// source=stories/WfBodyText.stories.js
// component=wf-body-text
import figma from 'figma'
const instance = figma.selectedInstance
const content = instance.getString("Content")
export default {
  example: figma.code`<p class="wf-body">${content}</p>`,
  imports: [],
  id: 'wf-body-text',
  metadata: { nestable: false },
}
