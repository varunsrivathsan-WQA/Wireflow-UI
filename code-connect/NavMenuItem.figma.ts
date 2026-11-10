// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=280-21
// source=stories/WfNavMenuItem.stories.js
// component=wf-nav-menu-item
import figma from 'figma'
const instance = figma.selectedInstance
const active = instance.getEnum("State", { default: "false", active: "true" })
const content = instance.getString("Content")
export default {
  example: figma.code`<a class="wf-nav-item" data-active="${active}">${content}</a>`,
  imports: [],
  id: 'wf-nav-menu-item',
  metadata: { nestable: false },
}
