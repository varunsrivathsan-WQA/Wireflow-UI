export default {
  title: "Primitives/Typography/Body text",
  argTypes: {
    content: { control: 'text' },
  },
  args: { content: "Body text goes here." },
  render: ({ content }) => {
    return `<p class="wf-body">${content}</p>`;
  },
};

export const Default = {};
