export default {
  title: "Primitives/Feedback & overlays/Skeleton loader",
  argTypes: {
    shape: { control: 'select', options: ["text", "circle", "rect"] },
  },
  args: { shape: "text" },
  render: ({ shape }) => {
    return `<span class="wf-skeleton" data-shape="${shape}"></span>`;
  },
};

export const Text = { args: { shape: "text" } };
export const Circle = { args: { shape: "circle" } };
export const Rect = { args: { shape: "rect" } };
