export default {
    title: 'Primitives/Actions/Button',
    argTypes: {
      variant: { control: 'select', options: ['primary', 'secondary'] },
      label: { control: 'text' },
    },
    args: { variant: 'primary', label: 'Button' },
    render: ({ variant, label }) =>
      `<button class="wf-button" data-variant="${variant}">${label}</button>`,
  };
  
  export const Primary = { args: { variant: 'primary' } };
  export const Secondary = { args: { variant: 'secondary' } };