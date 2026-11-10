// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=33-55
// source=stories/WfAlertBanner.stories.js
// component=wf-alert-banner
import figma from 'figma'

export default {
  example: figma.code`<div class="wf-alert">
  <svg class="wf-icon" data-size="md" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
  <div class="wf-alert__content">
    <strong class="wf-alert__title">Heads up!</strong>
    <span class="wf-alert__description">Message.</span>
  </div>
</div>`,
  imports: [],
  id: 'wf-alert-banner',
  metadata: { nestable: false },
}
