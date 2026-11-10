export default {
  title: "Primitives/Typography/Link text",
  argTypes: {
    content: { control: 'text' },
  },
  args: { content: "Link text" },
  render: ({ content }) => {
    return `<a class="wf-link" href="#">${content}</a>`;
  },
};

export const Default = {};
