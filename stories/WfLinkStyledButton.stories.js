export default {
  title: "Primitives/Actions/Link-styled button",
  argTypes: {
    label: { control: 'text' },
  },
  args: { label: "Link-styled button" },
  render: ({ label }) => {
    return `<button class="wf-link-button">${label}</button>`;
  },
};

export const Default = {};
