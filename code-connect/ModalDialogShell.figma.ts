// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=33-58
// source=stories/WfModalDialogShell.stories.js
// component=wf-modal-dialog-shell
import figma from 'figma'

export default {
  example: figma.code`<div class="wf-modal">
  <div class="wf-modal__header">
    <h2 class="wf-heading" data-level="3">Title</h2>
    <button><svg class="wf-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></button>
  </div>
  <hr class="wf-divider">
  <p class="wf-modal__body">Modal body content.</p>
  <div class="wf-modal__footer">
    <button class="wf-button" data-variant="secondary">Cancel</button>
    <button class="wf-button" data-variant="primary">Confirm</button>
  </div>
</div>`,
  imports: [],
  id: 'wf-modal-dialog-shell',
  metadata: { nestable: false },
}
