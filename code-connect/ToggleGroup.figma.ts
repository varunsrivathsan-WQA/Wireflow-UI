// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=2047-28
// source=stories/WfToggleGroup.stories.js
// component=wf-toggle-group
import figma from 'figma'

export default {
  example: figma.code`<div class="wf-toggle-group">
  <button data-active="true">Left</button>
  <button>Center</button>
  <button>Right</button>
</div>`,
  imports: [],
  id: 'wf-toggle-group',
  metadata: { nestable: false },
}
