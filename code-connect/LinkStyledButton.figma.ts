// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=32-23
// source=stories/WfLinkStyledButton.stories.js
// component=wf-link-styled-button
import figma from 'figma'
const instance = figma.selectedInstance
const label = instance.getString("Label")
export default {
  example: figma.code`<button class="wf-link-button">${label}</button>`,
  imports: [],
  id: 'wf-link-styled-button',
  metadata: { nestable: false },
}
