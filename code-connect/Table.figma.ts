// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=2045-2557
// source=stories/WfTable.stories.js
// component=wf-table
import figma from 'figma'

export default {
  example: figma.code`<table class="wf-table">
  <thead>
    <tr><th>Name</th><th>Role</th><th>Status</th></tr>
  </thead>
  <tbody>
    <tr><td>Item one</td><td>Value</td><td>Active</td></tr>
    <tr><td>Item two</td><td>Value</td><td>Pending</td></tr>
    <tr><td>Item three</td><td>Value</td><td>Active</td></tr>
  </tbody>
</table>`,
  imports: [],
  id: 'wf-table',
  metadata: { nestable: false },
}
