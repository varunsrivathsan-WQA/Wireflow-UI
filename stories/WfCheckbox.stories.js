export default {
  title: "Primitives/Forms/Checkbox",
  argTypes: {
    checked: { control: 'select', options: ["checked", ""] },
  },
  args: { checked: "checked" },
  render: ({ checked }) => {
    return `<label class="wf-checkbox"><input type="checkbox" ${checked}>Checkbox label</label>`;
  },
};

export const Checked = { args: { checked: "checked" } };
export const Unchecked = { args: { checked: "" } };
