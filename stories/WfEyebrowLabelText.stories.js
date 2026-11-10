export default {
  title: "Primitives/Typography/Eyebrow label text",
  argTypes: {
    content: { control: 'text' },
  },
  args: { content: "EYEBROW LABEL" },
  render: ({ content }) => {
    return `<p class="wf-eyebrow">${content}</p>`;
  },
};

export const Default = {};
