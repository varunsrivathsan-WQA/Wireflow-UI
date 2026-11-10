// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=280-17
// source=stories/WfToggleSwitch.stories.js
// component=wf-toggle-switch
import figma from 'figma'
const instance = figma.selectedInstance
const checked = instance.getEnum("State", { unchecked: "false", checked: "true" })
export default {
  example: figma.code`<label class="wf-toggle" data-checked="${checked}">
  <span class="wf-toggle__track"><span class="wf-toggle__knob"></span></span>
  Toggle label
</label>`,
  imports: [],
  id: 'wf-toggle-switch',
  metadata: { nestable: false },
}
