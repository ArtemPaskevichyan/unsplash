import UIInput from "./UIInput.vue";
import { typeValids } from "./helpers/propsValidators";

export default {
  component: UIInput,
  tags: ["autodocs"],
  argTypes: {
    type: {
      options: typeValids,
      control: "select",
    },
    text: {
      control: "text",
    },
  },
};

export const Default = {
  args: {
    placeholder: "placeholder",
    subtitle: "subtitle",
  },
};

export const Error = {
  args: {
    ...Default.args,
    error: true,
  },
};
