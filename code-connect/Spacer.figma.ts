// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=280-15
// source=stories/WfSpacer.stories.js
// component=wf-spacer
import figma from 'figma'
const instance = figma.selectedInstance
const size = instance.getEnum("Size", { "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8" })
export default {
  example: figma.code`<div class="wf-spacer" data-size="${size}"></div>`,
  imports: [],
  id: 'wf-spacer',
  metadata: { nestable: false },
}
