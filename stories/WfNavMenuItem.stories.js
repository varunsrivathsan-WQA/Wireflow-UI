export default {
  title: "Primitives/Navigation/Nav menu item",
  argTypes: {
    active: { control: 'select', options: ["false", "true"] },
    content: { control: 'text' },
  },
  args: { active: "false", content: "Menu item" },
  render: ({ active, content }) => {
    return `<a class="wf-nav-item" data-active="${active}">${content}</a>`;
  },
};

export const Default = { args: { active: "false" } };
export const Active = { args: { active: "true" } };
