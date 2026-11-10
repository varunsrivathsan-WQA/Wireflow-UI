export default {
  title: "Primitives/Media & branding/Aspect ratio box",
  argTypes: {
    ratio: { control: 'select', options: ["4-3", "16-9", "1-1"] },
  },
  args: { ratio: "16-9" },
  render: ({ ratio }) => {
    return `<div class="wf-aspect-ratio" data-ratio="${ratio}">
  <div class="wf-image-placeholder" style="width:100%;height:100%">Image</div>
</div>`;
  },
};

export const Ratio43 = { args: { ratio: "4-3" } };
export const Ratio169 = { args: { ratio: "16-9" } };
export const Ratio11 = { args: { ratio: "1-1" } };
