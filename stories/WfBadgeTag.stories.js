export default {
  title: "Primitives/Data & content display/Badge tag",
  argTypes: {
    content: { control: 'text' },
  },
  args: { content: "Badge" },
  render: ({ content }) => {
    return `<span class="wf-badge">${content}</span>`;
  },
};

export const Default = {};
