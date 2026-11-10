// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=222-647
// source=stories/WfMessageRow.stories.js
// component=wf-message-row
import figma from 'figma'

export default {
  example: figma.code`<div class="wf-message" data-role="assistant">
  <span class="wf-avatar">AB</span>
  <div class="wf-message__content">
    <div class="wf-bubble">Message text</div>
    <span class="wf-message__time">9:41 AM</span>
  </div>
</div>`,
  imports: [],
  id: 'wf-message-row',
  metadata: { nestable: false },
}
