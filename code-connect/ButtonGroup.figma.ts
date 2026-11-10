// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=2045-2619
// source=stories/WfButtonGroup.stories.js
// component=wf-button-group
import figma from 'figma'

export default {
  example: figma.code`<div class="wf-button-group">
  <button class="wf-button wf-button-group__item" data-variant="secondary">One</button>
  <button class="wf-button wf-button-group__item" data-variant="secondary">Two</button>
  <button class="wf-button wf-button-group__item" data-variant="secondary">Three</button>
</div>`,
  imports: [],
  id: 'wf-button-group',
  metadata: { nestable: false },
}
