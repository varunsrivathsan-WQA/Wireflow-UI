export default {
  title: "Primitives/Typography/Blockquote",
  argTypes: {
    quote: { control: 'text' },
  },
  args: { quote: "\"A short, quotable line of text.\"" },
  render: ({ quote }) => {
    return `<blockquote class="wf-blockquote">
  <p>${quote}</p>
  <cite>— Attribution</cite>
</blockquote>`;
  },
};

export const Default = {};
