// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=29-107
// source=stories/WfBlockquote.stories.js
// component=wf-blockquote
import figma from 'figma'
const instance = figma.selectedInstance
const quote = instance.getString("Quote")
export default {
  example: figma.code`<blockquote class="wf-blockquote">
  <p>${quote}</p>
  <cite>— Attribution</cite>
</blockquote>`,
  imports: [],
  id: 'wf-blockquote',
  metadata: { nestable: false },
}
