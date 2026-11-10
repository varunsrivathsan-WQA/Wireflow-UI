// url=https://www.figma.com/design/Vnd1lVvmWGs19CXMtqUMqx/Wireflow-UI-Kit?node-id=2045-70
// source=stories/WfFooter.stories.js
// component=wf-footer
import figma from 'figma'

export default {
  example: figma.code`<footer class="wf-footer">
  <div class="wf-row wf-footer__columns">
    <nav class="wf-stack">
      <h3>Product</h3>
      <a class="wf-footer__link">Features</a>
      <a class="wf-footer__link">Pricing</a>
    </nav>
  </div>
  <hr class="wf-divider">
  <div class="wf-row">
    <small>&copy; 2026 Wireflow</small>
    <div class="wf-row">
      <svg class="wf-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
      <svg class="wf-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
      <svg class="wf-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
    </div>
  </div>
</footer>`,
  imports: [],
  id: 'wf-footer',
  metadata: { nestable: false },
}
