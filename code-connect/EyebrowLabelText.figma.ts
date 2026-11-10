// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=29-101
// source=stories/WfEyebrowLabelText.stories.js
// component=wf-eyebrow-label-text
import figma from 'figma'
const instance = figma.selectedInstance
const content = instance.getString("Content")
export default {
  example: figma.code`<p class="wf-eyebrow">${content}</p>`,
  imports: [],
  id: 'wf-eyebrow-label-text',
  metadata: { nestable: false },
}
