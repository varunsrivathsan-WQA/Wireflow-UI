export default {
  title: "Primitives/Data & content display/Stat metric block",
  argTypes: {
    value: { control: 'text' },
  },
  args: { value: "1,234" },
  render: ({ value }) => {
    return `<div class="wf-stat">
  <strong>${value}</strong>
  <span>Metric label</span>
</div>`;
  },
};

export const Default = {};
