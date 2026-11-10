// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=2033-28
// source=stories/WfGrid.stories.js
// component=wf-grid
import figma from 'figma'

export default {
  example: figma.code`<div class="wf-grid">
  <div class="wf-grid-cell">Cell 1</div>
  <div class="wf-grid-cell">Cell 2</div>
  <div class="wf-grid-cell">Cell 3</div>
</div>`,
  imports: [],
  id: 'wf-grid',
  metadata: { nestable: false },
}
