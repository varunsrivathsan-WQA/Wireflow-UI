// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=222-633
// source=stories/WfOTPInput.stories.js
// component=wf-otp-input
import figma from 'figma'

export default {
  example: figma.code`<div class="wf-otp">
  <input class="wf-otp__slot" maxlength="1">
  <input class="wf-otp__slot" maxlength="1">
  <input class="wf-otp__slot" maxlength="1">
  <input class="wf-otp__slot" maxlength="1">
  <input class="wf-otp__slot" maxlength="1">
  <input class="wf-otp__slot" maxlength="1">
</div>`,
  imports: [],
  id: 'wf-otp-input',
  metadata: { nestable: false },
}
