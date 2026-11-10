export default {
  title: "Primitives/Media & branding/Avatar",
  argTypes: {
    initials: { control: 'text' },
  },
  args: { initials: "AB" },
  render: ({ initials }) => {
    return `<span class="wf-avatar">${initials}</span>`;
  },
};

export const Default = {};
