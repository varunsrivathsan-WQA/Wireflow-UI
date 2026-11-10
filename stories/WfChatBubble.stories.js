export default {
  title: "Primitives/Data & content display/Chat bubble",
  argTypes: {
    role: { control: 'select', options: ["assistant", "user"] },
  },
  args: { role: "assistant" },
  render: ({ role }) => {
    return `<div class="wf-bubble" data-role="${role}">Message text</div>`;
  },
};

export const Assistant = { args: { role: "assistant" } };
export const User = { args: { role: "user" } };
