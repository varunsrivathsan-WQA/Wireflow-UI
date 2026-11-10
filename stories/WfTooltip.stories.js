export default {
  title: "Primitives/Feedback & overlays/Tooltip",
  argTypes: {
    variant: { control: 'select', options: ["simple", "rich"] },
    content: { control: 'text' },
  },
  args: { variant: "simple", content: "Tooltip text" },
  render: ({ variant, content }) => {
    return variant === "rich"
      ? `<div class="wf-tooltip" data-variant="rich">
  <div class="wf-tooltip__bubble">
    <strong>Card title</strong>
    <p>${content}</p>
  </div>
  <span class="wf-tooltip__pointer"></span>
</div>`
      : `<div class="wf-tooltip">
  <span class="wf-tooltip__bubble">${content}</span>
  <span class="wf-tooltip__pointer"></span>
</div>`;
  },
};

export const Simple = { args: { variant: "simple" } };
export const Rich = { args: { variant: "rich" } };
