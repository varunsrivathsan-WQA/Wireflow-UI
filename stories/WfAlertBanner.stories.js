export default {
  title: "Primitives/Feedback & overlays/Alert banner",
  render: () => `<div class="wf-alert">
  <svg class="wf-icon" data-size="md" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
  <div class="wf-alert__content">
    <strong class="wf-alert__title">Heads up!</strong>
    <span class="wf-alert__description">Message.</span>
  </div>
</div>`,
};

export const Default = {};
