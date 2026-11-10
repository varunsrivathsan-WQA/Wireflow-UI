// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=29-63
// source=stories/WfBreadcrumb.stories.js
// component=wf-breadcrumb
import figma from 'figma'

export default {
  example: figma.code`<nav class="wf-breadcrumb">
  <a>Home</a>
  <svg class="wf-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
  <a>Category</a>
  <svg class="wf-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
  <span data-current="true">Current</span>
</nav>`,
  imports: [],
  id: 'wf-breadcrumb',
  metadata: { nestable: false },
}
