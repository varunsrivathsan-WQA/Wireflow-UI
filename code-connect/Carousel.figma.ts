// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=222-604
// source=stories/WfCarousel.stories.js
// component=wf-carousel
import figma from 'figma'

export default {
  example: figma.code`<div class="wf-carousel">
  <div class="wf-carousel__viewport">
    <div class="wf-carousel__slide">Slide</div>
  </div>
  <button class="wf-carousel__control" data-direction="prev"><svg class="wf-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg></button>
  <button class="wf-carousel__control" data-direction="next"><svg class="wf-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg></button>
</div>`,
  imports: [],
  id: 'wf-carousel',
  metadata: { nestable: false },
}
