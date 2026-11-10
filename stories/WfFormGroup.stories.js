export default {
  title: "Primitives/Forms/Form group",
  argTypes: {
    state: { control: 'select', options: ["default", "error"] },
  },
  args: { state: "default" },
  render: ({ state }) => {
    const helper = { "default": "Helper text", "error": "This field is required." }[state];
    return `<div class="wf-form-group">
  <label>Label</label>
  <input class="wf-input">
  <small data-variant="${state}">${helper}</small>
</div>`;
  },
};

export const Default = { args: { state: "default" } };
export const ErrorState = { args: { state: "error" } };
