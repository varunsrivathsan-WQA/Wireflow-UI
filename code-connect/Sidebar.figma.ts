// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=2045-2514
// source=stories/WfSidebar.stories.js
// component=wf-sidebar
import figma from 'figma'

export default {
  example: figma.code`<nav class="wf-sidebar">
  <a class="wf-nav-item">Menu item</a>
  <a class="wf-nav-item" data-active="true">Active item</a>
  <a class="wf-nav-item">Menu item</a>
</nav>`,
  imports: [],
  id: 'wf-sidebar',
  metadata: { nestable: false },
}
