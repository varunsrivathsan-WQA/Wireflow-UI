// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=222-625
// source=stories/WfDateField.stories.js
// component=wf-date-field
import figma from 'figma'

export default {
  example: figma.code`<div class="wf-date-field">
  <input type="text" placeholder="MM/DD/YYYY">
  <svg class="wf-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
</div>`,
  imports: [],
  id: 'wf-date-field',
  metadata: { nestable: false },
}
