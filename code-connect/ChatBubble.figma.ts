// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=2071-14
// source=stories/WfChatBubble.stories.js
// component=wf-chat-bubble
import figma from 'figma'
const instance = figma.selectedInstance
const role = instance.getEnum("Role", { Assistant: "assistant", User: "user" })
export default {
  example: figma.code`<div class="wf-bubble" data-role="${role}">Message text</div>`,
  imports: [],
  id: 'wf-chat-bubble',
  metadata: { nestable: false },
}
