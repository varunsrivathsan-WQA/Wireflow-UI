export default {
  title: "Primitives/Typography/Placeholder text block",
  argTypes: {
    content: { control: 'text' },
  },
  args: { content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  render: ({ content }) => {
    return `<p class="wf-placeholder-text">${content}</p>`;
  },
};

export const Default = {};
