export default {
  title: "Primitives/Layout & structure/Spacer",
  argTypes: {
    size: { control: 'select', options: ["1", "2", "3", "4", "5", "6", "7", "8"] },
  },
  args: { size: "5" },
  render: ({ size }) => {
    return `<div class="wf-spacer" data-size="${size}"></div>`;
  },
};

export const Size1 = { args: { size: "1" } };
export const Size2 = { args: { size: "2" } };
export const Size3 = { args: { size: "3" } };
export const Size4 = { args: { size: "4" } };
export const Size5 = { args: { size: "5" } };
export const Size6 = { args: { size: "6" } };
export const Size7 = { args: { size: "7" } };
export const Size8 = { args: { size: "8" } };
