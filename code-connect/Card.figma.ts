// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=16-15
// source=stories/WfCard.stories.js
// component=wf-card
import figma from 'figma'

export default {
  example: figma.code`<div class="wf-card">
  <div class="wf-image-placeholder">Image</div>
  <h3 class="wf-heading" data-level="3">Card title</h3>
  <p class="wf-body">Supporting card copy goes here.</p>
  <button class="wf-button" data-variant="primary">Learn more</button>
</div>`,
  imports: [],
  id: 'wf-card',
  metadata: { nestable: false },
}
