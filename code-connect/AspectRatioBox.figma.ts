// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=280-14
// source=stories/WfAspectRatioBox.stories.js
// component=wf-aspect-ratio-box
import figma from 'figma'
const instance = figma.selectedInstance
const ratio = instance.getEnum("Ratio", { "4-3": "4-3", "16-9": "16-9", "1-1": "1-1" })
export default {
  example: figma.code`<div class="wf-aspect-ratio" data-ratio="${ratio}">
  <div class="wf-image-placeholder" style="width:100%;height:100%">Image</div>
</div>`,
  imports: [],
  id: 'wf-aspect-ratio-box',
  metadata: { nestable: false },
}
