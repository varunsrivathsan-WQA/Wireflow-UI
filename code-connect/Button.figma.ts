// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=20-18
// source=stories/WfButton.stories.js
// component=wf-button
import figma from 'figma'

const instance = figma.selectedInstance

const style = instance.getEnum('Style', {
  Primary: 'primary',
  Secondary: 'secondary',
})
const label = instance.getString('Label')

export default {
  example: figma.code`<button class="wf-button" data-variant="${style}">${label}</button>`,
  imports: [],
  id: 'wf-button',
  metadata: {
    nestable: false,
  },
}