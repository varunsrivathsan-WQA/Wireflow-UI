export default {
  title: "Primitives/Forms/Radio",
  argTypes: {
    checked: { control: 'select', options: ["", "checked"] },
  },
  args: { checked: "" },
  render: ({ checked }) => {
    return `<label class="wf-radio"><input type="radio" name="radio-group" ${checked}>Radio label</label>`;
  },
};

export const Unselected = { args: { checked: "" } };
export const Selected = { args: { checked: "checked" } };
