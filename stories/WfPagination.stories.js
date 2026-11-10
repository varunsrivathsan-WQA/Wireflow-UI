export default {
  title: "Primitives/Navigation/Pagination",
  render: () => `<nav class="wf-pagination">
  <button class="wf-page-number" aria-label="Previous"><svg class="wf-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg></button>
  <a class="wf-page-number">1</a>
  <a class="wf-page-number" data-active="true">2</a>
  <a class="wf-page-number">3</a>
  <button class="wf-page-number" aria-label="Next"><svg class="wf-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg></button>
</nav>`,
};

export const Default = {};
