// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=2045-2607
// source=stories/WfScrollContainer.stories.js
// component=wf-scroll-container
import figma from 'figma'

export default {
  example: figma.code`<div class="wf-scroll">
  <p class="wf-body">Scrollable content, line 1</p>
  <p class="wf-body">Scrollable content, line 2</p>
  <p class="wf-body">Scrollable content, line 3</p>
  <p class="wf-body">Scrollable content, line 4</p>
  <p class="wf-body">Scrollable content, line 5</p>
  <p class="wf-body">Scrollable content, line 6</p>
</div>`,
  imports: [],
  id: 'wf-scroll-container',
  metadata: { nestable: false },
}
