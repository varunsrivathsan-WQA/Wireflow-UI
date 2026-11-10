// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=29-105
// source=stories/WfLinkText.stories.js
// component=wf-link-text
import figma from 'figma'
const instance = figma.selectedInstance
const content = instance.getString("Content")
export default {
  example: figma.code`<a class="wf-link" href="#">${content}</a>`,
  imports: [],
  id: 'wf-link-text',
  metadata: { nestable: false },
}
