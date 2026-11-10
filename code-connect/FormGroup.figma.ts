// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=280-20
// source=stories/WfFormGroup.stories.js
// component=wf-form-group
import figma from 'figma'
const instance = figma.selectedInstance
const state = instance.getEnum("State", { default: "default", error: "error" })
const helper = instance.getEnum("State", { default: "Helper text", error: "This field is required." })
export default {
  example: figma.code`<div class="wf-form-group">
  <label>Label</label>
  <input class="wf-input">
  <small data-variant="${state}">${helper}</small>
</div>`,
  imports: [],
  id: 'wf-form-group',
  metadata: { nestable: false },
}
