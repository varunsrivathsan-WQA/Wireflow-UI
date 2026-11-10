export default {
  title: "Primitives/Typography/Heading",
  argTypes: {
    level: { control: 'select', options: ["1", "2", "3", "4", "5", "6"] },
  },
  args: { level: "1" },
  render: ({ level }) => {
    return `<h${level} class="wf-heading" data-level="${level}">Heading</h${level}>`;
  },
};

export const H1 = { args: { level: "1" } };
export const H2 = { args: { level: "2" } };
export const H3 = { args: { level: "3" } };
export const H4 = { args: { level: "4" } };
export const H5 = { args: { level: "5" } };
export const H6 = { args: { level: "6" } };
