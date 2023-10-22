import BaseLayout from "@/views/layouts/BaseLayout.vue";
import TestPage from "@/views/TestPage.vue";

export default [
  {
    component: BaseLayout,
    path: "/base-layout",
    name: "baseLayout",
    children: [
      {
        path: "/test",
        name: "test",
        component: TestPage,
      },
    ],
  },
];
