import UIImage from "./UIImage.vue";

export default {
  component: UIImage,
  tags: ["autodocs"],
  render: () => ({
    components: { UIImage },
    template:
      "<UIImage src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png' data-src='https://segwitz.com/wp-content/uploads/2021/06/vuejs-development-malaysia.jpeg'/>",
  }),
};

export const Default = {};
