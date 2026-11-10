export default {
  title: "Primitives/Navigation/Navbar",
  render: () => `<nav class="wf-navbar">
  <div class="wf-navbar__logo"></div>
  <div class="wf-row">
    <a class="wf-nav-item">Menu item</a>
    <a class="wf-nav-item">Menu item</a>
    <a class="wf-nav-item">Menu item</a>
  </div>
  <button class="wf-button">Button</button>
  <button class="wf-navbar__menu-toggle" aria-label="Menu"><svg class="wf-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg></button>
</nav>`,
};

export const Default = {};
