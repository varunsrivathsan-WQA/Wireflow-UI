// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=2045-2491
// source=stories/WfEmptyState.stories.js
// component=wf-empty-state
import figma from 'figma'

export default {
  example: figma.code`<div class="wf-empty">
  <span class="wf-icon-placeholder"><svg class="wf-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg></span>
  <h3 class="wf-empty__title">No results</h3>
  <p class="wf-empty__body">Try adjusting your filters or search term.</p>
  <button class="wf-button" data-variant="primary">Reset filters</button>
</div>`,
  imports: [],
  id: 'wf-empty-state',
  metadata: { nestable: false },
}
