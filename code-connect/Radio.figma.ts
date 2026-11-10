// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=395-2295
// source=stories/WfRadio.stories.js
// component=wf-radio
import figma from 'figma'
const instance = figma.selectedInstance
const checked = instance.getEnum("State", { Unselected: "", Selected: "checked" })
export default {
  example: figma.code`<label class="wf-radio"><input type="radio" name="radio-group" ${checked}>Radio label</label>`,
  imports: [],
  id: 'wf-radio',
  metadata: { nestable: false },
}
