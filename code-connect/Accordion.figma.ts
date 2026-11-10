// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=33-78
// source=stories/WfAccordion.stories.js
// component=wf-accordion
import figma from 'figma'

export default {
  example: figma.code`<div class="wf-accordion-item">
  <div class="wf-accordion-item__header">
    <h4 class="wf-heading" data-level="4">Accordion title</h4>
    <svg class="wf-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
  </div>
  <hr class="wf-divider">
  <p class="wf-accordion-item__body">Accordion body content.</p>
</div>`,
  imports: [],
  id: 'wf-accordion',
  metadata: { nestable: false },
}
