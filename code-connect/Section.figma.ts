// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=10-18
// source=stories/WfSection.stories.js
// component=wf-section
import figma from 'figma'

export default {
  example: figma.code`<section class="wf-section">
  <h2 class="wf-heading" data-level="2">Section heading</h2>
  <p class="wf-body">Section content</p>
</section>`,
  imports: [],
  id: 'wf-section',
  metadata: { nestable: false },
}
