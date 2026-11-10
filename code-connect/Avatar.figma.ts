// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=32-30
// source=stories/WfAvatar.stories.js
// component=wf-avatar
import figma from 'figma'
const instance = figma.selectedInstance
const initials = instance.getString("Initials")
export default {
  example: figma.code`<span class="wf-avatar">${initials}</span>`,
  imports: [],
  id: 'wf-avatar',
  metadata: { nestable: false },
}
