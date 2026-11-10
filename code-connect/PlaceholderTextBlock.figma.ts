// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=29-103
// source=stories/WfPlaceholderTextBlock.stories.js
// component=wf-placeholder-text-block
import figma from 'figma'
const instance = figma.selectedInstance
const content = instance.getString("Content")
export default {
  example: figma.code`<p class="wf-placeholder-text">${content}</p>`,
  imports: [],
  id: 'wf-placeholder-text-block',
  metadata: { nestable: false },
}
