// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=2037-1203
// source=stories/WfHeading.stories.js
// component=wf-heading
import figma from 'figma'
const instance = figma.selectedInstance
const level = instance.getEnum("Level", { H1: "1", H2: "2", H3: "3", H4: "4", H5: "5", H6: "6" })
export default {
  example: figma.code`<h${level} class="wf-heading" data-level="${level}">Heading</h${level}>`,
  imports: [],
  id: 'wf-heading',
  metadata: { nestable: false },
}
