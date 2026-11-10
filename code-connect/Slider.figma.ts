// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=222-666
// source=stories/WfSlider.stories.js
// component=wf-slider
import figma from 'figma'

export default {
  example: figma.code`<div class="wf-slider">
  <div class="wf-slider__track">
    <div class="wf-slider__fill" style="width:62%"></div>
    <span class="wf-slider__thumb" style="left:62%"></span>
  </div>
</div>`,
  imports: [],
  id: 'wf-slider',
  metadata: { nestable: false },
}
