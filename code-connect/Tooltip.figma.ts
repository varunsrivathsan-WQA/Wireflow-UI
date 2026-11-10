// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=280-16
// source=stories/WfTooltip.stories.js
// component=wf-tooltip
import figma from 'figma'
const instance = figma.selectedInstance
const variant = instance.getEnum("Variant", { simple: "simple", rich: "rich" })
const content = instance.getString("Content")
const example = variant === "rich"
  ? figma.code`<div class="wf-tooltip" data-variant="rich">
  <div class="wf-tooltip__bubble">
    <strong>Card title</strong>
    <p>${content}</p>
  </div>
  <span class="wf-tooltip__pointer"></span>
</div>`
  : figma.code`<div class="wf-tooltip">
  <span class="wf-tooltip__bubble">${content}</span>
  <span class="wf-tooltip__pointer"></span>
</div>`
export default {
  example,
  imports: [],
  id: 'wf-tooltip',
  metadata: { nestable: false },
}
