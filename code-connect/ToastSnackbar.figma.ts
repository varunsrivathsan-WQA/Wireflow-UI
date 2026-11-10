// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=33-73
// source=stories/WfToastSnackbar.stories.js
// component=wf-toast-snackbar
import figma from 'figma'

export default {
  example: figma.code`<div class="wf-toast">
  <span>Message.</span>
  <button><svg class="wf-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></button>
</div>`,
  imports: [],
  id: 'wf-toast-snackbar',
  metadata: { nestable: false },
}
