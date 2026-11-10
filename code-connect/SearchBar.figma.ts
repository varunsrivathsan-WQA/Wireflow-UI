// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=32-52
// source=stories/WfSearchBar.stories.js
// component=wf-search-bar
import figma from 'figma'

export default {
  example: figma.code`<div class="wf-search-bar">
  <svg class="wf-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
  <input type="search" placeholder="Search">
</div>`,
  imports: [],
  id: 'wf-search-bar',
  metadata: { nestable: false },
}
