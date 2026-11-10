// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=222-617
// source=stories/WfCollapsibleSection.stories.js
// component=wf-collapsible-section
import figma from 'figma'

export default {
  example: figma.code`<div class="wf-collapsible">
  <div class="wf-collapsible__trigger">
    <span>Collapsible title</span>
    <svg class="wf-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
  </div>
  <div class="wf-collapsible__content">Collapsible content.</div>
</div>`,
  imports: [],
  id: 'wf-collapsible-section',
  metadata: { nestable: false },
}
