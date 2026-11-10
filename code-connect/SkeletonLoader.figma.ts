// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=2071-15
// source=stories/WfSkeletonLoader.stories.js
// component=wf-skeleton-loader
import figma from 'figma'
const instance = figma.selectedInstance
const shape = instance.getEnum("Shape", { Text: "text", Circle: "circle", Rect: "rect" })
export default {
  example: figma.code`<span class="wf-skeleton" data-shape="${shape}"></span>`,
  imports: [],
  id: 'wf-skeleton-loader',
  metadata: { nestable: false },
}
