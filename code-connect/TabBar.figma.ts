// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=2045-2588
// source=stories/WfTabBar.stories.js
// component=wf-tab-bar
import figma from 'figma'

export default {
  example: figma.code`<div class="wf-tab-bar">
  <button class="wf-tab" data-active="true">Tab one</button>
  <button class="wf-tab">Tab two</button>
  <button class="wf-tab">Tab three</button>
</div>`,
  imports: [],
  id: 'wf-tab-bar',
  metadata: { nestable: false },
}
