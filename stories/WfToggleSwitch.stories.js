export default {
  title: "Primitives/Forms/Toggle switch",
  argTypes: {
    checked: { control: 'select', options: ["false", "true"] },
  },
  args: { checked: "false" },
  render: ({ checked }) => {
    return `<label class="wf-toggle" data-checked="${checked}">
  <span class="wf-toggle__track"><span class="wf-toggle__knob"></span></span>
  Toggle label
</label>`;
  },
};

export const Unchecked = { args: { checked: "false" } };
export const Checked = { args: { checked: "true" } };
