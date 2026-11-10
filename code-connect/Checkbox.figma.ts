// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=395-20
// source=stories/WfCheckbox.stories.js
// component=wf-checkbox
import figma from 'figma'
const instance = figma.selectedInstance
const checked = instance.getEnum("State", { Checked: "checked", Unchecked: "" })
export default {
  example: figma.code`<label class="wf-checkbox"><input type="checkbox" ${checked}>Checkbox label</label>`,
  imports: [],
  id: 'wf-checkbox',
  metadata: { nestable: false },
}
