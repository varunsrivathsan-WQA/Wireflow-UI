// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=33-19
// source=stories/WfListItem.stories.js
// component=wf-list-item
import figma from 'figma'

export default {
  example: figma.code`<div class="wf-list-item">
  <div class="wf-row">
    <svg class="wf-list-item__icon wf-icon" data-size="lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
    <span>Label</span>
  </div>
  <span>Detail</span>
</div>`,
  imports: [],
  id: 'wf-list-item',
  metadata: { nestable: false },
}
